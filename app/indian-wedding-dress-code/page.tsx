import Link from "next/link"

export default function IndianWeddingDressCodePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-6">
        Indian Wedding Dress Code Guide
      </h1>

      <p className="text-muted-foreground mb-10">
        Indian weddings include multiple events, and each ceremony may have
        a slightly different dress code. Guests are usually encouraged to
        dress in festive, elegant outfits with color, embroidery, and
        accessories that fit the celebration.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        What Women Can Wear
      </h2>

      <p className="mb-6">
        Women commonly wear lehengas, sarees, anarkali dresses, or other
        formal South Asian outfits. Bright colors, jewel tones, and pastel
        shades are all common depending on the event and time of day.
      </p>

      <p className="mb-6">
        If you are choosing a guest outfit, see our{" "}
        <Link href="/what-to-wear-indian-wedding" className="underline">
          Indian wedding guest outfit guide
        </Link>.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        What Men Can Wear
      </h2>

      <p className="mb-6">
        Men often wear kurtas, Nehru jackets, or sherwanis depending on
        how formal the event is. Daytime functions may call for lighter
        outfits, while evening events are often more formal.
      </p>

      <p className="mb-6">
        Learn more in our guide to{" "}
        <Link href="/buy-sherwani-from-india-usa" className="underline">
          buying sherwanis from India
        </Link>.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Dress Code by Event
      </h2>

      <p className="mb-6">
        Mehndi and haldi events are usually more colorful and relaxed,
        while the wedding ceremony and reception are typically more formal.
        Guests often wear different outfits for each event when attending
        a full wedding weekend.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Colors and Styling
      </h2>

      <p className="mb-6">
        Indian weddings celebrate color, so guests usually avoid very plain
        or overly casual outfits. Elegant fabrics, jewelry, and festive
        styling are appropriate for most events.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Need Help Finding the Right Outfit?
      </h2>

      <p className="mb-6">
        CeremonyVerse helps couples and guests coordinate authentic Indian
        wedding outfits from trusted vendors in India.
      </p>

      <Link href="/book" className="underline text-lg">
        Schedule a consultation →
      </Link>
    </main>
  )
}
