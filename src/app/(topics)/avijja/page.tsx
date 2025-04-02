"use client"
import { motion } from "framer-motion";

export default function Avijja() {
  return (
    <motion.section
      className="w-full max-w-4xl py-20 px-6 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">
        Avijja (Ignorance) - The Root of Suffering
      </h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        Avijja, or ignorance, is the first link in the chain of **Paticca Samuppada** (Dependent Origination). It is the fundamental cause of suffering, leading beings into the endless cycle of Samsara.
      </p>
      
      <h2 className="text-2xl font-semibold text-yellow-300 mb-4">What is Avijja?</h2>
      <p className="text-lg text-gray-300 mb-4">
        Avijja means **not knowing the true nature of reality**. It is the lack of understanding of:
      </p>
      <ul className="list-disc pl-6 text-gray-300 text-lg space-y-2">
        <li>Anicca (Impermanence) - Everything is constantly changing.</li>
        <li>Dukkha (Suffering) - Clinging to impermanent things leads to suffering.</li>
        <li>Anatta (Non-Self) - There is no permanent, unchanging self.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-4">How Ignorance Leads to Suffering</h2>
      <p className="text-lg text-gray-300 mb-4">
        Because of Avijja, people chase temporary pleasures, believing they will bring lasting happiness. This creates **karma**, binding them to Samsara.
      </p>
      
      <h3 className="text-xl font-semibold text-yellow-300 mb-2">🔹 Example:</h3>
      <p className="text-lg text-gray-300">
        A person believes that wealth or relationships will bring permanent happiness, unaware of their impermanent nature. When things change, they experience suffering.
      </p>
      
      <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-4">Overcoming Avijja</h2>
      <p className="text-lg text-gray-300 mb-4">
        The path to breaking ignorance is through wisdom, mindfulness, and ethical living. The **Eightfold Path** provides a way to remove Avijja and attain liberation:
      </p>
      <ul className="list-disc pl-6 text-gray-300 text-lg space-y-2">
        <li>Right View - Seeing things as they are.</li>
        <li>Right Intention - Developing wisdom and compassion.</li>
        <li>Right Mindfulness - Observing reality without attachment.</li>
      </ul>
      
      <p className="text-lg text-gray-300 leading-relaxed mt-6">
        By cultivating wisdom (**Panna**), practicing meditation (**Samadhi**), and living ethically (**Sila**), one can break free from ignorance and move toward Nirvana.
      </p>
    </motion.section>
  );
}