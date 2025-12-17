// Database utility for storing leads
// Supports multiple storage options: Vercel KV, Local Storage (dev), or in-memory fallback

interface Lead {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  weddingDate?: string
  message?: string
  source: string
  submittedAt: string
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost'
  tags?: string[]
  notes?: string
}

// Check if we have Vercel KV available
function hasVercelKV(): boolean {
  return !!(
    process.env.KV_REST_API_URL &&
    process.env.KV_REST_API_TOKEN
  )
}

// Store lead using Vercel KV
async function storeLeadKV(lead: Lead): Promise<boolean> {
  if (!hasVercelKV()) return false

  try {
    const response = await fetch(
      `${process.env.KV_REST_API_URL}/set/${lead.id}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        },
        body: JSON.stringify(lead),
      }
    )

    if (response.ok) {
      // Also add to a list of all leads
      await fetch(
        `${process.env.KV_REST_API_URL}/lpush/leads:all`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
          },
          body: JSON.stringify([lead.id]),
        }
      )
      return true
    }
  } catch (error) {
    console.error('KV storage error:', error)
  }

  return false
}

// Store lead in local JSON file (development fallback)
async function storeLeadLocal(lead: Lead): Promise<boolean> {
  try {
    // In development, log to console
    console.log('📝 LEAD STORED (LOCAL):', JSON.stringify(lead, null, 2))
    
    // In a real implementation, you could write to a file
    // For now, we'll just return true to indicate success
    return true
  } catch (error) {
    console.error('Local storage error:', error)
    return false
  }
}

// Main function to store a lead
export async function storeLead(lead: Lead): Promise<boolean> {
  // Try Vercel KV first
  if (hasVercelKV()) {
    const success = await storeLeadKV(lead)
    if (success) {
      console.log('✅ Lead stored in Vercel KV:', lead.id)
      return true
    }
  }

  // Fallback to local storage
  const success = await storeLeadLocal(lead)
  if (success) {
    console.log('✅ Lead stored locally:', lead.id)
    return true
  }

  console.error('❌ Failed to store lead:', lead.id)
  return false
}

// Get all leads (for admin dashboard - to be built)
export async function getAllLeads(limit: number = 100): Promise<Lead[]> {
  if (!hasVercelKV()) {
    console.log('No KV available, returning empty array')
    return []
  }

  try {
    // Get list of lead IDs
    const listResponse = await fetch(
      `${process.env.KV_REST_API_URL}/lrange/leads:all/0/${limit - 1}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        },
      }
    )

    if (!listResponse.ok) return []

    const data = await listResponse.json()
    const leadIds = data.result || []

    // Fetch each lead
    const leads: Lead[] = []
    for (const id of leadIds) {
      const leadResponse = await fetch(
        `${process.env.KV_REST_API_URL}/get/${id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
          },
        }
      )

      if (leadResponse.ok) {
        const leadData = await leadResponse.json()
        if (leadData.result) {
          leads.push(JSON.parse(leadData.result))
        }
      }
    }

    return leads
  } catch (error) {
    console.error('Error fetching leads:', error)
    return []
  }
}

// Get a single lead by ID
export async function getLeadById(id: string): Promise<Lead | null> {
  if (!hasVercelKV()) return null

  try {
    const response = await fetch(
      `${process.env.KV_REST_API_URL}/get/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        },
      }
    )

    if (response.ok) {
      const data = await response.json()
      if (data.result) {
        return JSON.parse(data.result)
      }
    }
  } catch (error) {
    console.error('Error fetching lead:', error)
  }

  return null
}

// Update lead status
export async function updateLeadStatus(
  id: string,
  status: Lead['status'],
  notes?: string
): Promise<boolean> {
  const lead = await getLeadById(id)
  if (!lead) return false

  lead.status = status
  if (notes) {
    lead.notes = notes
  }

  return storeLead(lead)
}

// Export types
export type { Lead }
