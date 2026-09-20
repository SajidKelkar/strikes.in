import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What programming languages can I learn on the platform?',
    a: "Strike offers comprehensive courses in JavaScript, Python, Java, C++, React, Node.js, and many more. We also provide courses on Data Structures, Algorithms, System Design, and Full-Stack Development with hands-on projects.",
  },
  {
    q: 'What will I learn in the DSA + Gen AI course?',
    a: "This course covers Data Structures & Algorithms from basics to advanced level, along with Generative AI fundamentals. You'll learn arrays, trees, graphs, dynamic programming, and how to build AI-powered applications using modern frameworks. The course includes 200+ problems, live doubt sessions, and real-world AI projects.",
  },
  {
    q: 'Do I need prior coding experience to join DSA + Gen AI course?',
    a: "Basic programming knowledge in any language (C++, Java, or Python) is recommended. If you're completely new, we suggest starting with our beginner programming course first. The DSA + Gen AI course is designed for learners who know basic syntax and want to master algorithms and AI together.",
  },
  {
    q: 'How is Gen AI integrated with DSA in this course?',
    a: "You'll learn how AI models use data structures internally, optimize algorithms for AI applications, and build Gen AI projects like chatbots, code generators, and recommendation systems. We teach practical AI integration with strong DSA fundamentals, preparing you for modern tech roles.",
  },
  {
    q: 'Will this course help me crack product-based company interviews?',
    a: "Absolutely! The course is specifically designed for interview preparation. You'll solve 200+ problems from FAANG interview archives, learn First Principles problem-solving approach, and get weekly mock interviews. Our students have cracked interviews at Google, Microsoft, Amazon, and top startups.",
  },
  {
    q: 'How long does it take to complete the DSA + Gen AI course?',
    a: "The course is designed to be completed in 6-8 months with consistent daily practice. However, you get lifetime access to all course materials, so you can learn at your own pace. Most students spend 2-3 hours daily on lectures, practice problems, and projects to stay on track.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Your Questions, <span className="text-gradient">Answered</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get instant answers to most common questions about Strike.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass rounded-xl overflow-hidden transition-all duration-300 ${
                open === i ? 'bg-white/8' : ''
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-orange-400 shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
