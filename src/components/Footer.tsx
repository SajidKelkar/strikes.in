import { Zap, Youtube, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const footerLinks = {
  Platform: [
    { label: 'Home', href: '/' },
    { label: 'Practice', href: '#courses' },
    { label: 'DSA Sheet', href: '#tracks' },
  ],
  Company: [
    { label: 'Contact', href: '#' },
    { label: 'Careers at Strike', href: '#' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                <Zap className="w-5 h-5 text-black" fill="black" />
              </div>
              <span className="text-xl font-extrabold text-white">STRIKE</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Empowering developers with cutting-edge tools and resources.
              Powered by Coder Army, Strike is your gateway to a world of
              endless coding with guided lessons, real projects, level up your
              skills.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Youtube, href: 'https://www.youtube.com/@CoderArmy9' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/rohit-negi9/' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: 'https://www.instagram.com/coder_army9/' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold uppercase tracking-wide text-gray-300 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-300 mb-5">
              Support
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Our support team is dedicated to helping you succeed. Expect a
              response within 24 hours on business days.
            </p>
            <a
              href="mailto:support@coderarmy.in"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              support@coderarmy.in
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2025 STRIKE. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Master DSA, System Design & AI with interactive coding environments
          </p>
        </div>
      </div>
    </footer>
  );
}
