"use client"
import { motion } from "framer-motion";

export default function Nirvana() {
  return (
    <motion.section
      className="w-full max-w-4xl py-20 px-6 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">Nirvana – The Ultimate Goal of Buddhism</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        Nirvana is the ultimate goal of the Buddhist path. It is the cessation of suffering (dukkha), the end of the cycle of birth, death, and rebirth (samsara). Nirvana is often described as the extinguishing of the flames of desire, aversion, and ignorance. It is a state of perfect peace and liberation.
      </p>

      <h2 className="text-2xl font-semibold text-yellow-300 mb-4">The Stages of Nirvana</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">1. Sotapanna (Stream-Enterer)</h3>
          <p className="text-lg text-gray-300">
            The first stage of Nirvana is Sotapanna, or the Stream-Enterer. In this stage, a person has broken through the first of the ten fetters that bind them to the cycle of samsara: the belief in a permanent self. A Sotapanna has fully understood the nature of impermanence, suffering, and non-self. They have irreversible faith in the Buddha, the Dharma (the teachings), and the Sangha (the community of practitioners).
          </p>
          <p className="text-lg text-gray-300">
            A Sotapanna is guaranteed to achieve Nirvana within seven lifetimes and will not be reborn in lower realms (such as hell or as an animal). They are characterized by moral purity, and they follow the Noble Eightfold Path.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-300">2. Sakadagami (Once-Returner)</h3>
          <p className="text-lg text-gray-300">
            The second stage is Sakadagami, the Once-Returner. A person at this stage has weakened the remaining fetters of desire and ill-will. They have reduced attachment to the worldly pleasures and are far closer to liberation. A Sakadagami is likely to be reborn one more time before attaining Nirvana.
          </p>
          <p className="text-lg text-gray-300">
            Sakadagamis are known for their deep sense of mindfulness, self-control, and equanimity. They have overcome most forms of sensual attachment and are not burdened by the kinds of desires that lead to suffering.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-300">3. Anagami (Non-Returner)</h3>
          <p className="text-lg text-gray-300">
            Anagami, or the Non-Returner, is the third stage. At this stage, all the fetters of desire and ill-will have been completely eradicated. An Anagami no longer experiences attachment to the material world, nor do they have any craving for sensory pleasures. They have transcended the realm of rebirth, and upon death, they will not return to the cycle of samsara.
          </p>
          <p className="text-lg text-gray-300">
            Anagamis are completely free from worldly attachments and desires, living in a state of peace and bliss. They are not swayed by emotions or desires but remain compassionate, wise, and grounded in reality.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-300">4. Arahant (Fully Enlightened One)</h3>
          <p className="text-lg text-gray-300">
            The final stage of Nirvana is Arahantship, the state of the Fully Enlightened One. An Arahant has eradicated all ten fetters, including those that bind them to the cycle of rebirth. This is the state of complete liberation, where all ignorance, craving, and attachment have been extinguished. An Arahant has realized the ultimate truth and lives in perfect peace, wisdom, and compassion.
          </p>
          <p className="text-lg text-gray-300">
            Arahants are free from suffering, desire, and ignorance. They live their lives in accordance with the Dharma and serve as an example for others, showing the path to liberation. When an Arahant dies, they do not undergo rebirth, as they have achieved Nirvana.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-yellow-300 mt-6">The Path to Nirvana</h2>
      <p className="text-lg text-gray-300 leading-relaxed mt-6">
        The path to Nirvana involves ethical conduct (sila), meditation (samadhi), and wisdom (panna). By following the Noble Eightfold Path, one gradually removes the defilements of the mind, eventually leading to the realization of Nirvana.
      </p>

      <p className="text-lg text-gray-300 leading-relaxed mt-6">
        Understanding Nirvana is central to Buddhist practice. It is not just an abstract goal, but a living experience of peace and liberation that can be attained in this lifetime.
      </p>
    </motion.section>
  );
}
