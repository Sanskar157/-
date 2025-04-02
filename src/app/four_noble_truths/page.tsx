"use client";
import { motion } from "framer-motion";

export default function FourNobleTruths() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen flex flex-col items-center px-6">
      <motion.section
        className="w-full max-w-5xl text-center py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-6">
          The Four Noble Truths
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          The essence of the Buddha’s teachings, offering a profound insight
          into the nature of suffering and the path to liberation.
        </p>
      </motion.section>

      {/* First Noble Truth */}
      <motion.section
        className="w-full max-w-6xl py-20 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">
          1. Dukkha - The Truth of Suffering
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Life is filled with suffering – birth, aging, illness, and death. Even
          happiness is temporary, leading to dissatisfaction. Recognizing this
          is the first step toward enlightenment.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          The First Noble Truth in Buddhism is <strong>Dukkha</strong>, often
          translated as "suffering." However, this translation only partially
          captures its depth. Dukkha encompasses not just obvious physical or
          emotional pain but also the inherent unsatisfactoriness and
          impermanence of all conditioned phenomena. It's the recognition that
          even pleasurable experiences are fleeting and can lead to
          dissatisfaction when they change or end.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          The Buddha elaborated on Dukkha by stating:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-300 mb-6">
          <li>Birth is suffering</li>
          <li>Aging is suffering</li>
          <li>Illness is suffering</li>
          <li>Death is suffering</li>
          <li>Sorrow, lamentation, pain, grief, and despair are suffering</li>
          <li>Association with the unpleasant is suffering</li>
          <li>Separation from the pleasant is suffering</li>
          <li>Not getting what one wants is suffering</li>
        </ul>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          In summary, the five aggregates of attachment are suffering.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          To delve deeper, Dukkha is categorized into three types:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-300 mb-6">
          <li>
            <strong>Dukkha-dukkha (Suffering of Suffering):</strong> This refers
            to the basic physical and mental discomforts such as pain, illness,
            and distress.
          </li>
          <li>
            <strong>Viparinama-dukkha (Suffering of Change):</strong> This
            arises from the transient nature of pleasurable experiences. When
            pleasant conditions change—as they inevitably do—it leads to
            dissatisfaction.
          </li>
          <li>
            <strong>
              Sankhara-dukkha (Suffering of Conditioned Existence):
            </strong>{" "}
            This is the most subtle form, pointing to the inherent
            unsatisfactoriness due to the conditioned and impermanent nature of
            all phenomena.
          </li>
        </ul>
        <p className="text-lg text-gray-300 leading-relaxed">
          Understanding Dukkha is not intended to induce pessimism but to foster
          a realistic awareness of life's nature. By fully comprehending the
          pervasive presence of Dukkha, individuals can cultivate detachment
          from transient pleasures and pains, leading towards the cessation of
          suffering, as outlined in the subsequent Noble Truths.
        </p>
      </motion.section>

      {/* Second Noble Truth */}
      <motion.section
        className="w-full max-w-6xl py-20 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">
          2. Samudaya - The Cause of Suffering
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          The Second Noble Truth explains that suffering is not random; it has a
          cause. According to the Buddha, the root of suffering lies in craving
          (<strong>tanha</strong>), attachment, and ignorance. These forces
          create cycles of dissatisfaction and perpetuate suffering.
        </p>
        <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
          The Three Types of Craving (Tanha)
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Craving is categorized into three main types:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed mb-6">
          <li>
            <strong>Kama-tanha (Craving for Sensual Pleasures):</strong> The
            desire for pleasurable experiences—food, music, physical comfort,
            relationships, entertainment, etc. This craving is endless, as
            pleasures are temporary and never fully satisfying.
          </li>
          <li>
            <strong>Bhava-tanha (Craving for Existence & Becoming):</strong> The
            deep attachment to life and personal identity, leading to ambition,
            status-seeking, and ego-driven desires. This includes the fear of
            death and the longing for eternal existence.
          </li>
          <li>
            <strong>
              Vibhava-tanha (Craving for Non-existence or Self-destruction):
            </strong>{" "}
            The wish to escape suffering through avoidance, denial, or
            self-destruction. This craving manifests as nihilism, addiction, or
            self-harm.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
          How Craving Leads to Suffering
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          <strong>Attachment & Clinging:</strong> We become attached to things,
          people, and ideas, expecting them to bring permanent happiness. When
          they change or disappear, suffering follows.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          <strong>Ignorance (Avijja):</strong> Not understanding the impermanent
          nature of life leads us to chase after illusions of lasting pleasure
          and self-identity.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          <strong>The Cycle of Samsara:</strong> Craving fuels the cycle of
          birth, death, and rebirth (<strong>samsara</strong>). Each unfulfilled
          desire leads to future existence, continuing the cycle of suffering.
        </p>
      </motion.section>

      {/* Third Noble Truth */}
      <motion.section
        className="w-full max-w-6xl py-20 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">
          3. Nirodha - The End of Suffering
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          The Third Noble Truth teaches that suffering can end. The Buddha
          revealed that there is a way to completely cease suffering by
          eliminating craving (tanha) and ignorance (avijja). This state of
          liberation is called Nirvana.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Nirvana is the end of suffering, free from attachment, aversion, and
          ignorance. It is not a place but a state of peace, wisdom, and
          liberation from Samsara (the cycle of birth and death).
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Key aspects of Nirvana:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed mt-4">
          <li>
            <strong>Freedom from suffering:</strong> The extinguishing of
            craving removes dissatisfaction.
          </li>
          <li>
            <strong>No more rebirth:</strong> With no attachment or karma
            accumulation, the cycle of Samsara ends.
          </li>
          <li>
            <strong>Supreme peace:</strong> A mind free from clinging and
            illusions experiences deep peace and clarity.
          </li>
        </ul>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          The Buddha compared Nirvana to:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed mt-4">
          <li>A flame going out (extinguishing of desire and suffering).</li>
          <li>Coolness after a fever (release from the burning of craving).</li>
        </ul>
        <p className="text-lg text-gray-300 leading-relaxed">
          The cessation of suffering is possible for anyone who follows the path
          of wisdom and mindfulness.
        </p>
      </motion.section>


      {/* Fourth Noble Truth */}
      <motion.section
        className="w-full max-w-6xl py-20 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">
          4. Magga - The Path to Liberation
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          The Fourth Noble Truth presents the path to ending suffering, known as
          the Noble Eightfold Path. It consists of eight interconnected
          practices that lead to enlightenment:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed mb-6">
          <li>
            <strong>Right View:</strong> Understanding the Four Noble Truths.
          </li>
          <li>
            <strong>Right Intention:</strong> Developing goodwill, renunciation,
            and non-harm.
          </li>
          <li>
            <strong>Right Speech:</strong> Speaking truthfully and kindly.
          </li>
          <li>
            <strong>Right Action:</strong> Acting ethically, avoiding harm.
          </li>
          <li>
            <strong>Right Livelihood:</strong> Earning a living in a way that
            does not harm others.
          </li>
          <li>
            <strong>Right Effort:</strong> Cultivating positive qualities and
            abandoning negative ones.
          </li>
          <li>
            <strong>Right Mindfulness:</strong> Being fully aware and present.
          </li>
          <li>
            <strong>Right Concentration:</strong> Practicing meditation to
            attain mental clarity.
          </li>
        </ul>
        <p className="text-lg text-gray-300 leading-relaxed">
          The Noble Eightfold Path is categorized into three aspects: Wisdom
          (Right View, Right Intention), Ethical Conduct (Right Speech, Right
          Action, Right Livelihood), and Mental Discipline (Right Effort, Right
          Mindfulness, Right Concentration). By following this path, one can
          attain Nirvana and liberation from suffering.
        </p>
      </motion.section>
    </div>
  );
}
