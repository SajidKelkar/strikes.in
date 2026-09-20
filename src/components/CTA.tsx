import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Ready to Start Your{' '}
          <span className="text-gradient">Journey?</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of students already learning with us. Transform your
          career today.
        </p>
        <a
          href="#courses"
          className="group inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-200 transition-all duration-300 hover:scale-105"
        >
          Get Started
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
