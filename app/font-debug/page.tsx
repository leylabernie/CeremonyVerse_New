export default function FontDebugPage() {
  return (
    <div className="min-h-screen bg-background p-8 md:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <header>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-2">Font Debug Page</h1>
          <p className="font-sans text-muted-foreground">
            Verify that Cormorant Garamond (serif) and Inter (sans) are rendering correctly.
          </p>
        </header>

        {/* Visual Font Samples */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Sans (Inter) */}
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded">
                font-sans
              </span>
              <span className="text-sm text-muted-foreground">Inter</span>
            </div>
            <p className="font-sans text-2xl font-light">Light 300</p>
            <p className="font-sans text-2xl font-normal">Regular 400</p>
            <p className="font-sans text-2xl font-medium">Medium 500</p>
            <p className="font-sans text-2xl font-semibold">Semibold 600</p>
            <p className="font-sans text-2xl font-bold">Bold 700</p>
            <hr className="border-border my-4" />
            <p className="font-sans text-base leading-relaxed" id="p-sans">
              The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. 0123456789
            </p>
          </div>

          {/* Serif (Cormorant Garamond) */}
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded">font-serif</span>
              <span className="text-sm text-muted-foreground">Cormorant Garamond</span>
            </div>
            <p className="font-serif text-2xl font-normal">Regular 400</p>
            <p className="font-serif text-2xl font-medium">Medium 500</p>
            <p className="font-serif text-2xl font-semibold">Semibold 600</p>
            <hr className="border-border my-4" />
            <p className="font-serif text-base leading-relaxed" id="p-serif">
              The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. 0123456789
            </p>
          </div>
        </section>

        {/* Heading Examples */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-semibold border-b border-border pb-2">
            Heading Hierarchy (should be Cormorant Garamond)
          </h2>
          <div className="space-y-4 bg-card rounded-lg border border-border p-6">
            <h1>Heading 1 - Indian Wedding Planning</h1>
            <h2>Heading 2 - Cultural Ceremonies</h2>
            <h3>Heading 3 - Mehendi & Sangeet</h3>
            <h4>Heading 4 - Vendor Coordination</h4>
            <h5>Heading 5 - Timeline Details</h5>
            <h6>Heading 6 - Contact Information</h6>
          </div>
        </section>

        {/* Body Text Example */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-semibold border-b border-border pb-2">Body Text (should be Inter)</h2>
          <div className="bg-card rounded-lg border border-border p-6">
            <p className="font-sans">
              CeremonyVerse specializes in Indian and fusion wedding planning with cultural clarity. We handle multi-day
              ceremonies, detailed timelines, vendor coordination, and seamless execution. Our process-led approach
              ensures every ritual, from the Mehendi to the Vidaai, is honored with precision and care.
            </p>
          </div>
        </section>

        {/* CSS Variable Debug */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold border-b border-border pb-2">CSS Variable Debug</h2>
          <pre id="out" className="rounded-lg bg-muted p-4 text-sm font-mono overflow-x-auto">
            Loading...
          </pre>
        </section>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  try {
    const sansEl = document.getElementById('p-sans');
    const serifEl = document.getElementById('p-serif');
    const out = document.getElementById('out');

    const csSans = window.getComputedStyle(sansEl).fontFamily;
    const csSerif = window.getComputedStyle(serifEl).fontFamily;

    const root = document.documentElement;
    const rootStyles = window.getComputedStyle(root);

    console.log("[v0] Root element classes:", root.className);
    console.log("[v0] Computed font-sans:", csSans);
    console.log("[v0] Computed font-serif:", csSerif);
    console.log("[v0] --font-sans var:", rootStyles.getPropertyValue("--font-sans"));
    console.log("[v0] --font-serif var:", rootStyles.getPropertyValue("--font-serif"));
    console.log("[v0] --font-inter var:", rootStyles.getPropertyValue("--font-inter"));
    console.log("[v0] --font-cormorant var:", rootStyles.getPropertyValue("--font-cormorant"));

    const vars = {
      "--font-sans": rootStyles.getPropertyValue("--font-sans").trim() || "(not set)",
      "--font-serif": rootStyles.getPropertyValue("--font-serif").trim() || "(not set)",
      "--font-inter": rootStyles.getPropertyValue("--font-inter").trim() || "(not set)",
      "--font-cormorant": rootStyles.getPropertyValue("--font-cormorant").trim() || "(not set)",
    };

    const interLoaded = document.fonts.check('16px Inter');
    const cormorantLoaded = document.fonts.check('16px "Cormorant Garamond"');
    
    console.log("[v0] Inter font loaded:", interLoaded);
    console.log("[v0] Cormorant Garamond loaded:", cormorantLoaded);

    const sansMatch = csSans.toLowerCase().includes('inter');
    const serifMatch = csSerif.toLowerCase().includes('cormorant');

    out.textContent =
      "=== Computed Font Families ===\\n" +
      "font-sans element: " + csSans + "\\n" +
      "font-serif element: " + csSerif + "\\n\\n" +
      "=== Font Load Status ===\\n" +
      "Inter loaded: " + interLoaded + (sansMatch ? " ✓" : " ✗") + "\\n" +
      "Cormorant Garamond loaded: " + cormorantLoaded + (serifMatch ? " ✓" : " ✗") + "\\n\\n" +
      "=== CSS Variables on :root ===\\n" +
      JSON.stringify(vars, null, 2) + "\\n\\n" +
      "=== Result ===\\n" +
      (sansMatch && serifMatch ? "✓ Both fonts are working correctly!" : "✗ Font loading issue detected");
      
    console.log("[v0] Final result - sansMatch:", sansMatch, "serifMatch:", serifMatch);
  } catch (e) {
    console.log("[v0] Font debug error:", e.message);
    document.getElementById('out').textContent = "Error: " + e.message;
  }
})();`,
        }}
      />
    </div>
  )
}
