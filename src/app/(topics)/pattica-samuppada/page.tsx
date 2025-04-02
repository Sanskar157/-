"use client"
import { motion } from "framer-motion";

export default function PaticcaSamuppada() {
  return (
    <motion.section
      className="w-full max-w-4xl py-20 px-6 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">
        Dependent Origination (Paticca Samuppada) – The 12 Links
      </h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        Buddhism teaches that all things arise due to causes and conditions. The 12 links of dependent origination explain how suffering (dukkha) continues in an endless cycle of birth, death, and rebirth (samsara).
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        Each link conditions the next, meaning if one exists, the next follows. Understanding these links helps to break free from suffering and attain Nirvana.
      </p>
      <h2 className="text-2xl font-semibold text-yellow-300 mb-4">The 12 Links of Dependent Origination</h2>
      
      <div className="space-y-6">
        {[
          {
            title: "1. Avijja (Ignorance)",
            description: "Ignorance is the root of all suffering. It is the lack of understanding of impermanence (anicca), suffering (dukkha), and non-self (anatta). Due to ignorance, people believe in a permanent self and chase worldly desires. This creates karma, binding them to samsara.",
            example: "A person believes that wealth or relationships will bring permanent happiness, unaware of their impermanent nature."
          },
          {
            title: "2. Sankhara (Mental Formations)",
            description: "These are intentional actions, habits, and thoughts that shape future experiences. Every action (good or bad) creates karma, leading to future consequences. This link represents the formation of a personality based on past conditioning.",
            example: "Due to greed or anger, a person develops habits that create suffering, such as lying or harming others."
          },
          {
            title: "3. Viññana (Consciousness)",
            description: "Consciousness arises from past karma and determines where a being is reborn. It carries forward previous mental formations into a new existence. Consciousness is not a soul, but rather a stream of momentary experiences.",
            example: "After death, a person’s karma leads to rebirth in a new body, continuing the cycle of suffering."
          },
          {
            title: "4. Nama-Rupa (Mind & Body)",
            description: "Nama refers to the mind (feelings, perceptions, thoughts). Rupa refers to the physical body. They arise together, forming an individual’s experience of life.",
            example: "A newborn baby already has a mind-body connection shaped by past karma."
          },
          {
            title: "5. Salayatana (Six Sense Bases)",
            description: "These six senses allow interaction with the world, leading to further attachment and suffering. Even the mind is considered a sense organ, processing thoughts and emotions.",
            example: "A person sees a beautiful object (eye), hears pleasant music (ear), or thinks of success (mind), leading to craving."
          },
          {
            title: "6. Phassa (Contact)",
            description: "When the senses come in contact with an object, experience arises. Contact conditions feeling, leading to craving.",
            example: "Seeing a delicious cake (eye + object = contact) creates the experience of wanting it."
          },
          {
            title: "7. Vedana (Feeling/Sensation)",
            description: "All experiences result in pleasant, unpleasant, or neutral sensations. This is a key moment where suffering can be avoided—by not clinging to pleasant feelings or resisting unpleasant ones.",
            example: "After eating a cake, the person experiences pleasure but later craves more, leading to suffering."
          },
          {
            title: "8. Tanha (Craving/Desire)",
            description: "Craving is the fuel that keeps samsara turning. Desires arise for sense pleasures, existence, or even non-existence. Craving leads to clinging, which strengthens suffering.",
            example: "A person desires fame, wealth, or relationships, believing they will bring lasting happiness."
          },
          {
            title: "9. Upadana (Clinging/Attachment)",
            description: "This is an intensified form of craving, where the mind clings strongly to desires. People cling to material things, relationships, opinions, and even religious views.",
            example: "A person becomes obsessed with success and fears losing their wealth, causing anxiety."
          },
          {
            title: "10. Bhava (Becoming/Existence)",
            description: "Due to clinging, a strong karmic force builds up, shaping the next rebirth. This creates the conditions for future suffering.",
            example: "A person’s attachment to status and power leads them to actions that create karma, ensuring rebirth in similar conditions."
          },
          {
            title: "11. Jati (Birth/Rebirth)",
            description: "Due to previous karma, a new existence is formed. Birth guarantees suffering, because all beings are subject to aging, sickness, and death.",
            example: "A person is born into wealth or poverty based on their past karma."
          },
          {
            title: "12. Jara-Marana (Aging & Death)",
            description: "All beings experience decay, illness, and death, causing grief and sorrow. Death leads back to ignorance, starting the cycle again unless it is broken.",
            example: "A person grows old, faces suffering, and dies, only to be reborn due to attachment and karma."
          }
        ].map((link, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-yellow-300">{link.title}</h3>
            <p className="text-lg text-gray-300">{link.description}</p>
            <p className="text-lg text-gray-400 italic">🔹 Example: {link.example}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-yellow-300 mt-6">Breaking the Cycle of Suffering</h2>
      <p className="text-lg text-gray-300 leading-relaxed mt-4">
        The only way to stop this cycle is to remove ignorance (avijja) through:
      </p>
      <ul className="list-disc list-inside text-gray-300">
        <li><strong>Wisdom (Panna)</strong> – Seeing things as they truly are.</li>
        <li><strong>Meditation (Samadhi)</strong> – Cultivating mindfulness to observe reality without attachment.</li>
        <li><strong>Ethical Living (Sila)</strong> – Following the Eightfold Path to reduce craving and clinging.</li>
      </ul>
      <p className="text-lg text-gray-300 leading-relaxed mt-4">
        When ignorance is removed, the entire chain collapses, leading to Nirvana (liberation from suffering).
      </p>
    </motion.section>
  );
}
