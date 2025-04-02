"use client"
import { motion } from "framer-motion";

export default function Brahmavihara() {
  return (
    <motion.section
      className="w-full max-w-4xl py-20 px-6 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">
        Brahmavihara – The Four Divine Abodes
      </h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        The Brahmaviharas are four sublime states of mind that cultivate love, compassion, joy, and equanimity. They are called the "Divine Abodes" because they represent the highest emotional states a person can develop, leading to true happiness and peace.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-yellow-300">1. Metta (Loving-Kindness)</h2>
          <p className="text-lg text-gray-300">
            Metta is unconditional love and goodwill toward all beings. It is a selfless wish for others to be happy, free from suffering, and at peace. Practicing metta dissolves anger, hatred, and resentment.
          </p>
          <p className="text-lg text-gray-300 mt-2">
            🔹 Example: Silently wishing "May all beings be happy and safe" in meditation or daily life.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-yellow-300">2. Karuna (Compassion)</h2>
          <p className="text-lg text-gray-300">
            Karuna is deep empathy for the suffering of others, accompanied by a strong desire to help. It arises naturally when we recognize that all beings experience pain and hardship.
          </p>
          <p className="text-lg text-gray-300 mt-2">
            🔹 Example: Helping someone in distress, not out of pity, but with genuine concern and care.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-yellow-300">3. Mudita (Sympathetic Joy)</h2>
          <p className="text-lg text-gray-300">
            Mudita is the joy we feel when others experience happiness and success. It is the opposite of envy or jealousy, allowing us to celebrate the well-being of others with an open heart.
          </p>
          <p className="text-lg text-gray-300 mt-2">
            🔹 Example: Feeling truly happy when a friend achieves their goals, without comparing ourselves.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-yellow-300">4. Upekkha (Equanimity)</h2>
          <p className="text-lg text-gray-300">
            Upekkha is balanced mindfulness and peace in the face of life's ups and downs. It means accepting things as they are, without attachment or aversion, and maintaining inner calm.
          </p>
          <p className="text-lg text-gray-300 mt-2">
            🔹 Example: Remaining peaceful in difficult situations, neither clinging to pleasure nor reacting to pain.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-4">
        Why Practice the Brahmaviharas?
      </h2>
      <ul className="list-inside list-disc text-lg text-gray-300 ml-4 space-y-2">
        <li>They transform negative emotions into positive, uplifting states.</li>
        <li>They create deep peace, happiness, and meaningful relationships.</li>
        <li>They reduce anger, jealousy, and attachment, leading to a calm mind.</li>
        <li>They are essential for spiritual growth and enlightenment.</li>
      </ul>

      <p className="text-lg text-gray-300 leading-relaxed mt-6">
        The Brahmaviharas are not just emotions but **skills that can be cultivated** through meditation and daily practice. By developing these qualities, we bring more love, compassion, joy, and balance into our lives and the world around us.
      </p>
    </motion.section>
  );
}
