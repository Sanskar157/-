"use client"
import { motion } from "framer-motion";

export default function Anicca() {
  return (
    <motion.section
      className="w-full max-w-4xl py-20 px-6 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">
        Anicca – Impermanence
      </h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        Anicca (Impermanence) is one of the three marks of existence in Buddhism, which refers to the fact that all things are in a state of constant change. Everything in life, whether material or mental, is subject to birth, decay, and eventual cessation.
      </p>
      <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Understanding Anicca</h2>
      <p className="text-lg text-gray-300 mb-6">
        The Buddha taught that everything in our world, including our thoughts, emotions, and physical objects, is transient and ever-changing. This impermanence is what causes suffering (dukkha) when we become attached to things that are inevitably going to change or cease to exist.
      </p>

      <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Key Aspects of Anicca</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">1. All Things are Impermanent</h3>
          <p className="text-lg text-gray-300">
            Everything in the universe, including our experiences, bodies, and relationships, are in a constant state of flux. What is here today may not be here tomorrow. All material things age, wear out, and eventually disappear, while mental states also arise and pass away.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">2. Suffering Arises from Attachment</h3>
          <p className="text-lg text-gray-300">
            Because of our attachment to impermanent things, we experience suffering when those things change or are lost. Our desire for things to remain the same is the root cause of much of our frustration and disappointment.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">3. The Cycle of Birth, Decay, and Death</h3>
          <p className="text-lg text-gray-300">
            All beings, including humans, are born, age, experience decay, and eventually die. This cycle is governed by Anicca. This constant change is a universal experience and reflects the impermanence of all life.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">4. Embracing Change for Liberation</h3>
          <p className="text-lg text-gray-300">
            In Buddhism, understanding Anicca is crucial to achieving enlightenment. By recognizing the impermanence of everything, we can let go of attachments and stop clinging to fleeting things. This detachment is one of the steps toward freedom from suffering and the attainment of Nirvana.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Practical Applications of Anicca</h2>
      <p className="text-lg text-gray-300 mb-6">
        By meditating on the impermanent nature of life, we can reduce our attachment to transient things and become more accepting of change. Practicing mindfulness and awareness allows us to live in the present moment without clinging to the past or worrying about the future.
      </p>

      <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Anicca in Daily Life</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">1. Letting Go of Attachments</h3>
          <p className="text-lg text-gray-300">
            We often feel sadness or loss when things we love or care about change or disappear. Understanding Anicca helps us realize that all things—good or bad—are transient, and we can cultivate acceptance when things change.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">2. Understanding Change in Relationships</h3>
          <p className="text-lg text-gray-300">
            Relationships evolve, and people change over time. Recognizing the impermanence of relationships helps us appreciate the moments we share without becoming overly attached or fearful of change.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">3. Coping with Loss and Grief</h3>
          <p className="text-lg text-gray-300">
            When we experience the loss of loved ones or possessions, Anicca teaches us that everything is temporary, including grief. Understanding that loss is part of the cycle of life can help us process our emotions and heal more effectively.
          </p>
        </div>
      </div>

      <p className="text-lg text-gray-300 leading-relaxed mt-6">
        In conclusion, Anicca reminds us of the fleeting nature of life. By understanding that nothing is permanent, we can let go of attachment and find peace in the ever-changing world around us. The practice of mindfulness, meditation, and acceptance of change allows us to break free from the suffering that comes with clinging to what is impermanent.
      </p>
    </motion.section>
  );
}
