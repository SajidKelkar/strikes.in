import { Code, Bot, Rocket, Shield, Database, GitBranch, Check, ArrowRight } from 'lucide-react';

const courses = [
  {
    icon: Code,
    title: 'DSA and GENAI Course',
    level: 'All Levels',
    description: 'Complete LIVE course covering Data Structures, Algorithms, and Generative AI with 200+ practice problems and real-world AI projects.',
    features: ['200+ Practice Problems', 'Live Doubt Sessions', 'GenAI Projects', 'Mock Interviews'],
    price: '5,499',
    originalPrice: '7,999',
    badge: 'Popular',
  },
  {
    icon: Bot,
    title: 'GENAI Live Course',
    level: 'Intermediate',
    description: 'Master Generative AI from fundamentals to production. Build chatbots, code generators, and recommendation systems with modern AI frameworks.',
    features: ['80+ Live Sessions', '20+ AI Projects', 'RAG & AI Agents', 'Production Deployment'],
    price: '3,999',
    originalPrice: '4,999',
    badge: null,
  },
  {
    icon: Database,
    title: 'DSA Premium Course',
    level: 'All Levels',
    description: 'Data Structures and Algorithms from basics to advanced competitive programming level with LeetCode and Codeforces prep.',
    features: ['100+ Live Sessions', '500+ Problems', 'Competitive Programming', 'Lifetime Access'],
    price: '3,999',
    originalPrice: '4,999',
    badge: null,
  },
  {
    icon: Rocket,
    title: 'Web Development Complete',
    level: 'Beginner to Advanced',
    description: 'Complete web development course covering MERN Stack, System Design, and real-world project building from scratch.',
    features: ['MERN Stack', 'System Design', 'Real Projects', 'Community Support'],
    price: '2,999',
    originalPrice: '3,999',
    badge: null,
  },
  {
    icon: GitBranch,
    title: 'Web Dev + System Design + Security + DevOps',
    level: 'Advanced',
    description: 'Comprehensive course combining Web Development, High-Level Design, Security fundamentals, and DevOps practices for production-ready skills.',
    features: ['Full Stack + DevOps', 'HLD + Security', 'Production Projects', 'Career Support'],
    price: '3,999',
    originalPrice: '4,999',
    badge: 'New',
  },
  {
    icon: Shield,
    title: 'High Level Design Course',
    level: 'Advanced',
    description: 'Master system design interviews with scalable architecture patterns, capacity estimation, and real-world design problems.',
    features: ['System Design Patterns', 'Scalability', 'Case Studies', 'Interview Prep'],
    price: '2,999',
    originalPrice: '3,999',
    badge: null,
  },
];

export default function Courses() {
  return (
    <section id="courses" className="relative py-20 sm:py-24 md:py-28 lg:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3 sm:mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Explore our comprehensive{' '}
            <span className="text-gradient">courses</span> designed to elevate
            your skills
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="group relative bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1"
            >
              {course.badge && (
                <div className="absolute -top-3 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                    course.badge === 'New'
                      ? 'bg-green-500 text-black'
                      : 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                  }`}>
                    {course.badge}
                  </span>
                </div>
              )}

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <course.icon className="w-6 h-6 text-orange-400" />
              </div>

              <p className="text-xs text-gray-500 mb-1">{course.level}</p>
              <h3 className="text-lg font-bold mb-3 leading-tight">{course.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                {course.description}
              </p>

              <ul className="space-y-2 mb-6">
                {course.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-orange-400" />
                    </div>
                    <span className="text-xs text-gray-300">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-2xl font-extrabold">₹{course.price}</span>
                <span className="text-sm text-gray-500 line-through">₹{course.originalPrice}</span>
              </div>

              <a
                href="#"
                className="group/btn w-full flex items-center justify-center gap-2.5 py-3 px-6 rounded-2xl text-sm font-bold bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-400"
              >
                Explore Course
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
