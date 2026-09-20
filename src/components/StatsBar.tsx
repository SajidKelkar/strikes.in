import { useEffect, useRef, useState } from 'react';
import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: 202, suffix: 'K+', label: 'Students Taught', color: 'text-orange-400' },
  { icon: BookOpen, value: 4, suffix: '+', label: 'Expert Courses', color: 'text-blue-400' },
  { icon: Award, value: 2, suffix: '+', label: 'Industry Mentors', color: 'text-pink-400' },
  { icon: TrendingUp, value: 100, suffix: '%', label: 'Live Sessions', color: 'text-green-400' },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (startTime === null) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function StatsBar() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-16 border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-transparent to-blue-600/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const count = useCountUp(stat.value, 2000, visible);
            return (
              <div key={i} className="text-center group">
                <div className="inline-flex w-14 h-14 rounded-2xl glass items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold mb-1">
                  {count}
                  <span className={stat.color}>{stat.suffix}</span>
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
