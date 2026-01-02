"use client";

const reasons = [
  {
    title: "No Visa Required",
    description: "Indian passport holders can enter Mexico visa-free for tourism, making travel planning seamless for your guests.",
  },
  {
    title: "Perfect Weather Year-Round",
    description: "Enjoy sunny skies and comfortable temperatures, ideal for outdoor ceremonies and beach celebrations.",
  },
  {
    title: "Stunning Venues",
    description: "From pristine beaches to historic haciendas, Mexico offers breathtaking backdrops for every wedding style.",
  },
  {
    title: "Rich Cultural Heritage",
    description: "Blend Indian traditions with Mexican artistry for a unique celebration that honors both cultures.",
  },
  {
    title: "World-Class Hospitality",
    description: "Renowned resorts and wedding planners experienced in hosting large-scale Indian celebrations.",
  },
  {
    title: "Exceptional Value",
    description: "Get more for your budget with competitive pricing on venues, catering, and accommodations.",
  },
];

export function HomeWhyMexico() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Mexico works so well for Indian weddings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of Indian couples are choosing Mexico as their dream wedding destination.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-pink-50 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
