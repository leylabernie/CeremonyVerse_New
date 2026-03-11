import Link from "next/link";

export default function LehengaMeasurementGuide() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-serif mb-6">
        How to Measure for a Bridal Lehenga Remotely
      </h1>

      <p className="text-muted-foreground mb-10">
        Ordering a bridal lehenga from India while living in the United States
        is increasingly common, but accurate measurements are essential to
        ensure the outfit fits correctly when it arrives.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Why Accurate Measurements Matter
      </h2>

      <p className="mb-6">
        Bridal lehengas are often custom-made, and unlike standard clothing,
        they include structured blouses and heavy embroidery. Incorrect
        measurements can lead to costly alterations or delays close to the
        wedding date.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Measurements Typically Required
      </h2>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Bust measurement</li>
        <li>Waist measurement</li>
        <li>Hip measurement</li>
        <li>Blouse length</li>
        <li>Shoulder width</li>
        <li>Armhole circumference</li>
        <li>Lehenga skirt length</li>
      </ul>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Tips for Accurate Measurements
      </h2>

      <p className="mb-6">
        Always measure while wearing the type of undergarments you plan to wear
        with your wedding outfit. Use a flexible measuring tape and ask someone
        to help for better accuracy.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Planning Ahead for Alterations
      </h2>

      <p className="mb-6">
        Even with accurate measurements, minor tailoring adjustments may be
        needed after the outfit arrives. Plan for enough time before your
        wedding for final fittings.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Need Help Ordering a Bridal Lehenga?
      </h2>

      <p className="mb-6">
        CeremonyVerse helps US-based couples coordinate bridal lehengas,
        sherwanis, and bridesmaid outfits directly from India while managing
        measurements, vendor communication, and shipping timelines.
      </p>

      <Link href="/book" className="underline text-lg">
        Schedule a consultation →
      </Link>

    </main>
  );
}
