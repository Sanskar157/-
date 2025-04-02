"use client"
import { motion } from "framer-motion";

export default function Samsara() {
  return (
    <motion.div
      className="w-full max-w-4xl py-20 px-6 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">Samsara - The Cycle of Birth and Death</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        Samsara is the endless cycle of birth, death, and rebirth that all living beings go through. In Buddhism, this cycle is seen as a state of suffering and dissatisfaction because it is driven by <strong>craving (tanha)</strong> and <strong>ignorance (avijja)</strong>.
      </p>
      <h2 className="text-2xl font-semibold text-yellow-300 mb-4">How Does Samsara Work?</h2>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        Every action (karma) we take has consequences, shaping our future experiences and rebirths. Good karma leads to a favorable rebirth, while bad karma results in suffering. However, even a good rebirth is temporary, and the cycle continues.
      </p>
      <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Why is Samsara Considered Suffering?</h2>
      <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed mb-6">
        <li><strong>Impermanence (Anicca):</strong> Everything in Samsara constantly changes—happiness, possessions, and even life itself.</li>
        <li><strong>Dissatisfaction (Dukkha):</strong> No matter how much we achieve, we always crave more, leading to suffering.</li>
        <li><strong>No Permanent Self (Anatta):</strong> There is no unchanging soul or self moving through Samsara—just a continuous flow of causes and effects.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Can We Escape Samsara?</h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        Yes. The ultimate goal of Buddhism is to break free from Samsara and attain Nirvana—a state of complete peace and liberation from suffering. This is done by following the <strong>Eightfold Path</strong>, which leads to wisdom, ethical living, and meditation.
      </p>
    </motion.div>
  );
}
