import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 grid-bg overflow-hidden"
    >
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-medium text-gray-300">
              Live DSA & GenAI · Starting Soon
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Master DSA, System Design{' '}
            <span className="text-gradient">& AI</span> with interactive coding
            environments
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Coding courses, guided practice, articles, quizzes, and interview
            preparation by Rohit Negi. Learn smarter with modern tools, guided
            mentors, and a platform built to help you grow your skills faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#courses"
              className="group inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-200 transition-all duration-300 hover:scale-105"
            >
              Start Learning
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#courses"
              className="group inline-flex items-center justify-center gap-2 border border-white text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              <Play className="w-4 h-4" fill="currentColor" />
              Explore Courses
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in hidden lg:block">
          <div className="relative glass rounded-2xl p-1 glow-orange">
            <div className="bg-[#0a0a0f] rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-gray-500 font-mono">
                  strike.js
                </span>
                <span className="ml-auto text-xs text-orange-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                  Live
                </span>
              </div>
              <pre className="p-5 text-sm font-mono leading-relaxed overflow-hidden">
                <code>
                  <span className="text-purple-400">const</span>
                  <span className="text-gray-300">{' strike = {\n'}</span>
                  <span className="text-gray-400">{'  courses: '}</span>
                  <span className="text-blue-400">{`["DSA", "GenAI", "Web Dev"]\n`}</span>
                  <span className="text-gray-400">{'  mentors: '}</span>
                  <span className="text-green-400">{`"Rohit Negi & Team"\n`}</span>
                  <span className="text-gray-400">{'  practice: '}</span>
                  <span className="text-blue-400">{'200+\n'}</span>
                  <span className="text-gray-400">{'  projects: '}</span>
                  <span className="text-blue-400">{'20+\n'}</span>
                  <span className="text-gray-300">{`};\n\n`}</span>
                  <span className="text-purple-400">{'async function '}</span>
                  <span className="text-yellow-300">{'startLearning() {\n'}</span>
                  <span className="text-gray-400">{'  await '}</span>
                  <span className="text-blue-400">{'enroll'}</span>
                  <span className="text-gray-300">{`((strike));\n`}</span>
                  <span className="text-gray-400">{'  '}</span>
                  <span className="text-blue-400">return</span>
                  <span className="text-gray-300">{` "Ready to Strike!";\n`}</span>
                  <span className="text-yellow-300">{'}'}</span>
                </code>
              </pre>
            </div>
          </div>

          <div className="absolute -top-6 -right-4 glass rounded-xl px-4 py-3 animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Launching</p>
                <p className="text-sm font-bold text-white">Oct 18, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
