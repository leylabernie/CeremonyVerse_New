"use client";

import { useEffect } from "react";

export function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  if (!calendlyUrl) {
    return (
      <div className="w-full min-h-[500px] flex items-center justify-center bg-warm-2/20 rounded-lg p-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-text mb-4">
            Calendly URL Not Configured
          </h3>
          <p className="text-muted-foreground">
            Please contact us directly to schedule your consultation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="calendly-inline-widget w-full min-h-[700px] rounded-lg overflow-hidden"
      data-url={calendlyUrl}
      style={{ minHeight: "700px" }}
    />
  );
}
