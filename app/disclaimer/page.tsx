import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer | CeremonyVerse",
  description: "Important disclaimer information for CeremonyVerse wedding planning services.",
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-cvBg">
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-24">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-cvInk mb-8">
          Disclaimer
        </h1>
        
        <div className="prose prose-lg text-cvMuted space-y-6">
          <p>
            The information provided on the CeremonyVerse website is for general informational 
            purposes only. All content, including but not limited to text, graphics, images, 
            vendor recommendations, pricing estimates, and other materials, is intended to 
            serve as a helpful resource for couples planning their Indian or fusion weddings. 
            This information should not be construed as professional advice, and we encourage 
            you to consult with qualified professionals for specific guidance related to your 
            wedding planning needs.
          </p>
          
          <p>
            While we make every effort to ensure the accuracy and reliability of the information 
            presented on our website, CeremonyVerse makes no representations or warranties of 
            any kind, express or implied, about the completeness, accuracy, reliability, 
            suitability, or availability of the information, products, services, or related 
            graphics contained on the website. Any reliance you place on such information is 
            strictly at your own risk. Vendor availability, pricing, and service offerings 
            are subject to change without notice, and we recommend verifying all details 
            directly with service providers.
          </p>
          
          <p>
            By using this website, you acknowledge and agree that CeremonyVerse shall not be 
            held liable for any loss or damage, including without limitation, indirect or 
            consequential loss or damage, arising from the use of this website or reliance 
            on any information provided herein. Your use of any information or materials on 
            this website is entirely at your own risk, for which we shall not be liable. It 
            shall be your own responsibility to ensure that any products, services, or 
            information available through this website meet your specific requirements.
          </p>
        </div>
      </div>
    </main>
  )
}
