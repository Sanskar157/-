"use client"
import { motion } from "framer-motion";

export default function Anatta() {
  return (
    <motion.section
      className="w-full max-w-4xl py-20 px-6 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">Anatta – Non-Self</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        Anatta (Non-Self) is one of the three marks of existence in Buddhism. It refers to the teaching that there is no permanent, unchanging self, soul, or essence within beings or things. This concept is central to understanding suffering (dukkha) and liberation (Nirvana). 
      </p>

      <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Understanding Anatta</h2>
      <p className="text-lg text-gray-300 mb-6">
        The Buddha taught that the idea of a permanent, unchanging self is an illusion. In reality, what we consider "self" is just a collection of constantly changing physical and mental phenomena. Our attachment to this false notion of self causes suffering because we seek to protect and fulfill this imagined self.
      </p>

      <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Key Aspects of Anatta</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">1. The Illusion of a Permanent Self</h3>
          <p className="text-lg text-gray-300">
            According to the Buddha, the belief in a permanent self (atman) is the root cause of suffering. People cling to the idea that there is a consistent, enduring essence that defines who they are. This attachment creates suffering because everything, including the mind and body, is impermanent.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">2. The Five Aggregates (Skandhas)</h3>
          <p className="text-lg text-gray-300">
            The Buddha explained that what we consider to be the "self" is actually a combination of five aggregates:
          </p>
            <ul className="list-inside list-disc ml-4">
              <li><strong>Rupa</strong> – Form or physical body.</li>
              <li><strong>Vedana</strong> – Sensations or feelings.</li>
              <li><strong>Samjna</strong> – Perceptions or cognitions.</li>
              <li><strong>Samskara</strong> – Mental formations or volitions.</li>
              <li><strong>Vijnana</strong> – Consciousness or awareness.</li>
            </ul>
            <p>
            These aggregates are constantly changing, and none of them constitute a permanent "self." The belief that they do is a misconception that leads to suffering.
            </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">3. No Fixed Identity</h3>
          <p className="text-lg text-gray-300">
            The self is not a fixed or permanent identity. It is a fluid, ever-changing process that depends on conditions. When we identify with certain roles, traits, or labels, we are deluding ourselves into thinking we are a fixed entity. In reality, everything about us is in constant change.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">4. Breaking Attachment to the "Self"</h3>
          <p className="text-lg text-gray-300">
            Understanding and realizing Anatta helps in breaking attachment to the self. This detachment is essential for spiritual growth and freedom from suffering. The more we let go of the false sense of self, the more we open ourselves to the truth of impermanence and interconnectedness.
          </p>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold text-yellow-300 mb-4 mt-8">Practical Applications of Anatta</h2>
      <p className="text-lg text-gray-300 mb-6">
        Realizing that there is no permanent self can bring a profound sense of freedom. We can stop taking things personally and stop clinging to our identities. This understanding reduces ego-driven reactions and makes it easier to forgive others and ourselves.
      </p>

      <h2 className="text-2xl font-semibold text-yellow-300 mb-4 mt-8">Anatta in Daily Life</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">1. Letting Go of Ego</h3>
          <p className="text-lg text-gray-300">
            The concept of Anatta teaches us to let go of the ego or the false sense of "I" and "mine." This allows us to respond to situations more mindfully, without being driven by personal desires or fears. We begin to see ourselves as interconnected with others and the world around us.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">2. Reducing Self-Centeredness</h3>
          <p className="text-lg text-gray-300">
            Realizing the non-self nature of existence helps us reduce self-centeredness. When we stop identifying with our thoughts, feelings, and possessions as "mine," we can develop greater compassion and empathy for others.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-yellow-300">3. Dealing with Change and Loss</h3>
          <p className="text-lg text-gray-300">
            Understanding that the self is not permanent helps us cope better with changes in our lives, including loss, aging, and death. We realize that clinging to the self or to what we believe is "ours" only leads to suffering. Embracing the fluidity of life brings peace and acceptance.
          </p>
        </div>
      </div>

      <p className="text-lg text-gray-300 leading-relaxed mt-6">
        In conclusion, the teaching of Anatta encourages us to let go of the illusion of a permanent self and to realize the interconnectedness and impermanence of all things. By doing so, we can overcome suffering, ego, and attachment, leading us to a state of inner peace and freedom.
      </p>
    </motion.section>
  );
}
