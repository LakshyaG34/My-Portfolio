import { FaWhatsapp } from "react-icons/fa";

const HeroCo1 = () => {
  const whatsappLink =
    "https://wa.me/919999057276?text=Hello%20I%20want%20to%20discuss%20a%20project%20with%20FunctionX";

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-28 text-center">

      <h1 className="text-4xl md:text-5xl font-semibold mb-6">
        Want to talk to Us Directly?
      </h1>

      <p className="text-gray-400 mb-10">
        Connect with us directly on WhatsApp and let's discuss your ideas.
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
      >
        <FaWhatsapp size={22} />
        Chat on WhatsApp
      </a>

    </section>
  );
};

export default HeroCo1;