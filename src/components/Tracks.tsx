import { Code, BrainCircuit, Check } from 'lucide-react';

const dsaTopics = [
  'Time & Space Complexity Analysis',
  'Arrays, Hashing, Two-Pointers',
  'Sliding Window & Prefix Sum',
  'Binary Search & Variants',
  'Recursion & Backtracking',
  'Trees, Graphs & BFS/DFS',
  'Dynamic Programming',
  'Greedy Algorithms',
  'Heaps, Tries & Advanced DS',
  'Competitive Programming',
  'Mock Interviews',
];

const genaiTopics = [
  'LLM Fundamentals',
  'Prompt Engineering Mastery',
  'RAG Systems',
  'Vector Databases',
  'AI Agents & Tools',
  'Fine-tuning & Optimization',
  'Production Deployment',
  'Cost & Latency Optimization',
  'Safety & Guardrails',
  'Real-world Projects',
  'Industry Applications',
];

export default function Tracks() {
  return (
    <section id="tracks" className="relative py-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">
            What you will learn
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Complete <span className="text-gradient-blue">curriculum</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every module below is pulled directly from the course curriculum.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="group relative glass rounded-2xl p-8 hover:bg-white/8 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-xs text-orange-400 font-semibold uppercase tracking-wide">
                  DSA Track
                </p>
                <h3 className="text-2xl font-bold">Data Structures & Algorithms</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {dsaTopics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-orange-400" />
                  </div>
                  <span className="text-sm text-gray-300">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group relative glass rounded-2xl p-8 hover:bg-white/8 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BrainCircuit className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-xs text-blue-400 font-semibold uppercase tracking-wide">
                  GenAI Track
                </p>
                <h3 className="text-2xl font-bold">Generative AI & Machine Learning</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {genaiTopics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-sm text-gray-300">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
