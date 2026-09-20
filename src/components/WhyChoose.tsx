import { Rocket, MessageSquare, Target, Briefcase } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Project-Based Learning',
    description: 'Learn by building — every concept turns into a working project you can showcase.',
  },
  {
    icon: MessageSquare,
    title: 'Mentor Guidance',
    description: 'Get personalized reviews and mentorship from top industry professionals.',
  },
  {
    icon: Target,
    title: 'Interview Focused',
    description: 'Mock interviews, problem-solving drills, and system design sessions.',
  },
  {
    icon: Briefcase,
    title: 'Career Assistance',
    description: 'Placement help, resume reviews, and portfolio enhancement support.',
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-transparent to-blue-600/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Why Choose <span className="text-gradient">Us</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Learn smarter with modern tools, guided mentors, and a platform
            built to help you grow your skills faster, setting a new benchmark
            for modern coding excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative glass rounded-2xl p-6 hover:bg-white/8 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
