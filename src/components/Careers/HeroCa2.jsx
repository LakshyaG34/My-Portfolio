import { motion } from "framer-motion";

const HeroCa2 = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold mb-10 text-center"
      >
        Available Positions
      </motion.h2>

      {/* Table Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="border border-white/10 rounded-xl overflow-hidden"
      >

        {/* Scroll wrapper for mobile */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[600px] text-left">

            {/* Table Head */}
            <thead className="bg-white/5">
              <tr className="text-gray-300">
                <th className="px-6 py-4">Position</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Type</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>

              <tr className="border-t border-white/10">
                <td
                  colSpan="4"
                  className="px-6 py-10 text-center text-gray-400"
                >
                  Currently there are no open positions.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </motion.div>

    </section>
  );
};

export default HeroCa2;