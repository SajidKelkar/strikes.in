import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Adheli Priyanka',
    role: 'Software Developer',
    testimonial:
      'Nexus builds from basics with in-depth explanations. Daily homework, live classes, and project contests with rewards kept me motivated throughout my learning journey.',
  },
  {
    name: 'Shree',
    role: 'MERN Stack Developer',
    testimonial:
      'From zero coding knowledge to building full-stack projects, Nexus transformed my career. The mentorship and doubt support made all the difference in my journey.',
  },
  {
    name: 'Sumit Kumar',
    role: 'Software Developer',
    testimonial:
      "Completed Nexus MERN in 8-9 months. Rohit Bhaiya taught not just 'what' but 'why' behind everything. My consistency broke many times, but I finally made it!",
  },
  {
    name: 'Priyanshu',
    role: 'MERN Stack Developer',
    testimonial:
      'Best decision I made was joining Nexus. The First Principles teaching helped me understand concepts deeply, not just memorize solutions like other courses.',
  },
  {
    name: 'Raju Arya',
    role: 'Frontend Developer',
    testimonial:
      'I learned everything from beginner to advanced levels and built multiple real-world projects that strengthened my skills and boosted my confidence as a full-stack developer.',
  },
  {
    name: 'Coder Army Student',
    role: 'Software Developer',
    testimonial:
      'Nexus gave me everything I needed - MERN Stack, DSA, System Design, all in one place. The community support and regular contests pushed me beyond my limits.',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-600/5 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Trusted by <span className="text-gradient">Visionaries</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Hear from real users who achieved success with our courses
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative glass rounded-2xl p-6 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-orange-500/30 mb-4" />
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                "{t.testimonial}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-sm font-bold">
                  {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
