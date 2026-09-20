import { GraduationCap, Trophy, Building2, Zap } from 'lucide-react';

const instructors = [
  {
    name: 'Rohit Negi',
    role: 'Founder & Lead Instructor',
    company: 'Ex-@Uber',
    education: 'IIT Graduate',
    package: '2 Cr+ Package',
    expertise: 'Visionary Leader',
    description:
      "Heartfelt Problem Solver, Instructor, and Visionary Leader. Got Highest Placement in India of 2 Cr+. Post Graduate from IIT G, GATE-CSE'20 AIR - 202",
    image: 'https://dolia18uq98lp.cloudfront.net/course/bf84ce20-9e40-40ef-91e0-e1c1170f4c59.jpg',
    linkedin: 'https://www.linkedin.com/in/rohit-negi9/',
  },
  {
    name: 'Aditya Tandon',
    role: 'Co-Founder & Senior Instructor',
    company: 'Ex-Ola | Currently @Oxyzo',
    education: 'IIT Guwahati',
    package: 'Ex-Ola',
    expertise: 'Scalable Systems & Algorithms Expert',
    description:
      'Senior Software Engineer passionate about scalable systems and elegant algorithms. Dedicated mentor committed to teaching, learning, and inspiring future developers.',
    image: 'https://dolia18uq98lp.cloudfront.net/course/82819fa0-24a9-4ee0-aae1-74e6923f3f9d.jpg',
    linkedin: 'https://www.linkedin.com/in/adityatandon2/',
  },
];

export default function Instructor() {
  return (
    <section id="instructors" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Meet With Our <span className="text-gradient">Mentors</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn faster with hands-on tracks and mentor feedback from industry
            experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {instructors.map((inst, i) => (
            <div
              key={i}
              className="group relative glass rounded-3xl p-8 hover:bg-white/8 transition-all duration-300"
            >
              <div
                className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl ${
                  i === 0 ? 'bg-orange-500/10' : 'bg-blue-500/10'
                }`}
              />
              <div className="relative flex flex-col sm:flex-row gap-6">
                <div className="shrink-0">
                  <div
                    className={`w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-extrabold overflow-hidden ${
                      i === 0
                        ? 'bg-gradient-to-br from-orange-500 to-red-600'
                        : 'bg-gradient-to-br from-blue-500 to-indigo-600'
                    }`}
                  >
                    {inst.image ? (
                      <img
                        src={inst.image}
                        alt={inst.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : null}
                    <span className="absolute">
                      {inst.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold mb-1">{inst.name}</h3>
                  <p
                    className={`text-sm font-semibold mb-3 ${
                      i === 0 ? 'text-orange-400' : 'text-blue-400'
                    }`}
                  >
                    {inst.role}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {inst.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: Building2, text: inst.company },
                      { icon: GraduationCap, text: inst.education },
                      { icon: Trophy, text: inst.package },
                      { icon: Zap, text: inst.expertise },
                    ].map((tag, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs text-gray-300"
                      >
                        <tag.icon
                          className={`w-3.5 h-3.5 ${
                            i === 0 ? 'text-orange-400' : 'text-blue-400'
                          }`}
                        />
                        {tag.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
