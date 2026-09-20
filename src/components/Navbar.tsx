import { useEffect, useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Practice', href: '#courses' },
  { label: 'Articles', href: '#instructors' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-lg border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-black" fill="black" />
            </div>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white">
            STRIKE
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
          >
            Login / Sign Up
          </a>
          <a
            href="#courses"
            className="text-sm font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105"
          >
            Enroll Now
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/5 animate-fade-in">
          <ul className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#courses"
                onClick={() => setMobileOpen(false)}
                className="block text-center text-sm font-semibold bg-white text-black px-5 py-3 rounded-full"
              >
                Enroll Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
