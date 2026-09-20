import { Zap, Crown, Check } from 'lucide-react';

const plans = [
  {
    icon: Zap,
    name: 'STRIKE Plus',
    duration: '2 Year',
    price: '9,999',
    originalPrice: '19,999',
    features: [
      'Every course — present and future',
      'Pay once, learn forever',
      'All DSA & GenAI courses',
      'Web Development courses',
      'Practice problems access',
      'Community support',
    ],
    popular: false,
  },
  {
    icon: Crown,
    name: 'STRIKE Ultra',
    duration: '2 Year',
    price: '11,999',
    originalPrice: '24,999',
    features: [
      'Everything in Strike Plus',
      'Code Arena access',
      'System Design Playground',
      'Capstone Projects',
      'Priority doubt resolution',
      '1-on-1 mentorship sessions',
      'Interview prep & resume review',
    ],
    popular: true,
  },
  {
    icon: Zap,
    name: 'STRIKE Plus',
    duration: '3 Year',
    price: '11,999',
    originalPrice: '19,999',
    features: [
      'Every course — present and future',
      'Pay once, learn forever',
      'All DSA & GenAI courses',
      'Web Development courses',
      'Practice problems access',
      'Community support',
    ],
    popular: false,
  },
];

export default function Membership() {
  return (
    <section id="membership" className="relative py-24">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">
            The Strike Membership
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Every course. Present and future.{' '}
            <span className="text-gradient">Pay once, learn forever.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the membership plan that works for you. Get access to all
            current and future courses with a single payment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'glass border-2 border-orange-500/40 glow-orange'
                  : 'glass hover:bg-white/8'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-xs font-bold uppercase tracking-wide">
                    <Crown className="w-3.5 h-3.5" />
                    Best Value
                  </div>
                </div>
              )}

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <plan.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-6">{plan.duration}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold">₹{plan.price}</span>
                  <span className="text-lg text-gray-500 line-through">
                    ₹{plan.originalPrice}
                  </span>
                </div>
              </div>

              <a
                href="#"
                className={`block text-center font-semibold py-3 rounded-xl transition-all duration-300 mb-6 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:shadow-xl hover:shadow-orange-500/30'
                    : 'glass hover:bg-white/10'
                }`}
              >
                Enroll Now
              </a>

              <ul className="space-y-3">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-orange-400" />
                    </div>
                    <span className="text-sm text-gray-300">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
