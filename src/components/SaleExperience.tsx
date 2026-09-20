import { useEffect, useState, useRef } from 'react';
import {
  Zap,
  X,
  Copy,
  Check,
  Lock,
  Sparkles,
  Flame,
  Gift,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { useSaleTimer, COUPON_CODE } from '@/hooks/useSaleTimer';

type Stage = 'hidden' | 'hint' | 'unlocking' | 'revealed' | 'expired' | 'dismissed';

const LIGHTNING_TARGET = 7;

export default function SaleExperience() {
  const { timeLeft, startTimer, deadline } = useSaleTimer();
  const [stage, setStage] = useState<Stage>('hidden');
  const [strikes, setStrikes] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const strikeTimerRef = useRef<number | null>(null);

  // Show hint badge after a delay
  useEffect(() => {
    if (stage === 'hidden') {
      const t = setTimeout(() => {
        setStage('hint');
        setShowHint(true);
      }, 3500);
      return () => clearTimeout(t);
    }
  }, [stage]);

  // Start timer when unlocking begins
  useEffect(() => {
    if (stage === 'unlocking' && deadline === null) {
      startTimer();
    }
  }, [stage, deadline, startTimer]);

  // Check expiry
  useEffect(() => {
    if (timeLeft.expired && (stage === 'revealed' || stage === 'unlocking')) {
      setStage('expired');
    }
  }, [timeLeft.expired, stage]);

  // Auto-advance from unlocking to revealed
  useEffect(() => {
    if (stage === 'unlocking' && strikes >= LIGHTNING_TARGET) {
      const t = setTimeout(() => setStage('revealed'), 800);
      return () => clearTimeout(t);
    }
  }, [stage, strikes]);

  // Pulse the hint badge to draw attention
  useEffect(() => {
    if (stage !== 'hint') return;
    let pulses = 0;
    const interval = setInterval(() => {
      setShowHint((prev) => !prev);
      pulses++;
      if (pulses > 10) clearInterval(interval);
    }, 800);
    return () => clearInterval(interval);
  }, [stage]);

  const handleStrikeClick = () => {
    if (stage === 'unlocking') {
      setStrikes((s) => Math.min(s + 1, LIGHTNING_TARGET));
      // Reset if user pauses too long
      if (strikeTimerRef.current) clearTimeout(strikeTimerRef.current);
      strikeTimerRef.current = window.setTimeout(() => {
        if (strikes < LIGHTNING_TARGET - 1) {
          // Decay: lose a strike if you pause
          setStrikes((s) => Math.max(0, s - 1));
        }
      }, 3000);
    }
  };

  const handleHintClick = () => {
    setStage('unlocking');
    setShowHint(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(COUPON_CODE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleDismiss = () => {
    setStage('dismissed');
  };

  const handleRetry = () => {
    setStrikes(0);
    setStage('unlocking');
  };

  if (stage === 'dismissed' || stage === 'hidden') return null;

  const pad = (n: number) => String(n).padStart(2, '0');
  const progressPercent = (strikes / LIGHTNING_TARGET) * 100;

  return (
    <>
      {/* Floating Lightning Hint Badge */}
      {stage === 'hint' && (
        <button
          onClick={handleHintClick}
          className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
            showHint ? 'scale-100 opacity-100' : 'scale-90 opacity-70'
          }`}
          aria-label="Unlock strike deal"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 blur-xl opacity-60 animate-pulse" />
            <div className="relative flex items-center gap-3 glass rounded-2xl px-5 py-4 border border-orange-500/30 hover:border-orange-500/60 transition-colors">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <Zap
                  className="w-6 h-6 text-white animate-pulse"
                  fill="white"
                />
              </div>
              <div className="text-left">
                <p className="text-xs text-orange-400 font-semibold uppercase tracking-wide">
                  Lightning Deal
                </p>
                <p className="text-sm font-bold text-white">
                  Strike to Unlock
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </button>
      )}

      {/* Unlocking Stage - Lightning Strike Game */}
      {stage === 'unlocking' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) handleDismiss();
            }}
          />
          <div className="relative w-full max-w-lg">
            {/* Close */}
            <button
              onClick={handleDismiss}
              className="absolute -top-12 right-0 w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-300" />
            </button>

            <div className="glass rounded-3xl p-8 sm:p-10 border border-orange-500/20 glow-orange">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-wide">
                    Lightning Unlock Challenge
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                  Strike the Lightning
                </h3>
                <p className="text-sm text-gray-400 max-w-sm mx-auto">
                  Hit the STRIKE button {LIGHTNING_TARGET} times before the
                  energy fades to unlock an exclusive hidden deal.
                </p>
              </div>

              {/* Strike counter */}
              <div className="flex justify-center gap-2 mb-6">
                {Array.from({ length: LIGHTNING_TARGET }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      i < strikes
                        ? 'bg-gradient-to-br from-orange-500 to-red-600 scale-110 glow-orange'
                        : 'glass'
                    }`}
                  >
                    {i < strikes && (
                      <Zap className="w-4 h-4 text-white" fill="white" />
                    )}
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden mb-8">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Big strike button */}
              <div className="flex justify-center mb-4">
                <button
                  onClick={handleStrikeClick}
                  className="relative group active:scale-90 transition-transform duration-100"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-red-600 blur-2xl opacity-50 group-active:opacity-80 transition-opacity" />
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-2xl group-active:shadow-orange-500/50">
                    <div className="absolute inset-2 rounded-full border-2 border-white/20" />
                    <div className="text-center">
                      <Zap
                        className="w-10 h-10 sm:w-12 sm:h-12 text-white mx-auto group-active:scale-125 transition-transform"
                        fill="white"
                      />
                      <span className="block text-xs font-bold text-white mt-1 uppercase tracking-widest">
                        STRIKE
                      </span>
                    </div>
                  </div>
                </button>
              </div>

              <p className="text-center text-xs text-gray-500">
                {strikes === 0
                  ? 'Tap the button to charge the lightning'
                  : strikes < LIGHTNING_TARGET
                    ? `${LIGHTNING_TARGET - strikes} strikes remaining`
                    : 'Unleashing deal...'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Revealed Stage - The Sale Offer */}
      {stage === 'revealed' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) handleDismiss();
            }}
          />
          <div className="relative w-full max-w-xl my-8">
            <button
              onClick={handleDismiss}
              className="absolute -top-12 right-0 w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Close offer"
            >
              <X className="w-5 h-5 text-gray-300" />
            </button>

            <div className="relative glass rounded-3xl p-8 sm:p-10 border border-orange-500/30 overflow-hidden">
              {/* Animated background bolts */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-red-500/10 rounded-full blur-3xl" />

              <div className="relative">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 mb-4">
                    <Sparkles className="w-4 h-4 text-orange-400" />
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                      Lightning Unlocked
                    </span>
                  </div>
                  <div className="inline-block mb-3">
                    <span className="text-6xl sm:text-7xl font-extrabold text-gradient">
                      40% OFF
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Complete STRIKE Bundle
                  </h3>
                  <p className="text-sm text-gray-400">
                    DSA + GenAI · 180+ Live Classes · Lifetime Access
                  </p>
                </div>

                {/* Price display */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-2xl text-gray-500 line-through">
                    ₹14,999
                  </span>
                  <span className="text-4xl font-extrabold text-white">
                    ₹8,999
                  </span>
                </div>

                {/* Timer */}
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      Offer Expires In
                    </span>
                  </div>
                  <div className="flex justify-center gap-3">
                    {[
                      { label: 'Hours', value: timeLeft.hours },
                      { label: 'Mins', value: timeLeft.minutes },
                      { label: 'Secs', value: timeLeft.seconds },
                    ].map((unit) => (
                      <div
                        key={unit.label}
                        className="relative"
                      >
                        <div className="glass rounded-xl px-4 py-3 sm:px-6 sm:py-4 min-w-[60px] sm:min-w-[80px] text-center border border-orange-500/10">
                          <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-gradient">
                            {pad(unit.value)}
                          </div>
                        </div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wide mt-1.5 text-center">
                          {unit.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coupon code */}
                <div className="mb-6">
                  <p className="text-xs text-gray-400 mb-2 text-center">
                    Use this coupon code at checkout
                  </p>
                  <div className="relative">
                    <div className="flex items-center gap-2 p-2 rounded-xl glass border border-orange-500/20">
                      <div className="flex items-center gap-2 flex-1 px-3">
                        <Lock className="w-4 h-4 text-orange-400" />
                        <code className="text-sm sm:text-base font-bold font-mono tracking-wider text-orange-400">
                          {COUPON_CODE}
                        </code>
                      </div>
                      <button
                        onClick={handleCopy}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                          copied
                            ? 'bg-green-500 text-white'
                            : 'bg-gradient-to-r from-orange-500 to-red-600 hover:shadow-lg hover:shadow-orange-500/30'
                        }`}
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#pricing"
                  onClick={handleDismiss}
                  className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-500 to-red-600 py-4 rounded-xl font-bold text-sm hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <Gift className="w-5 h-5" />
                  Claim Your Discount Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-center text-[11px] text-gray-500 mt-4">
                  40% off Complete STRIKE Bundle · Limited time · Cannot be
                  combined with other offers
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expired Stage */}
      {stage === 'expired' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in">
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) handleDismiss();
            }}
          />
          <div className="relative w-full max-w-md">
            <button
              onClick={handleDismiss}
              className="absolute -top-12 right-0 w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-300" />
            </button>
            <div className="glass rounded-3xl p-8 text-center border border-gray-500/20">
              <div className="w-16 h-16 rounded-2xl bg-gray-500/20 flex items-center justify-center mx-auto mb-5">
                <Lock className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-300">
                Offer Expired
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                The lightning deal has faded. The coupon code is no longer
                redeemable. Stay tuned for future strikes!
              </p>
              <button
                onClick={handleDismiss}
                className="px-6 py-3 rounded-xl glass hover:bg-white/10 text-sm font-semibold transition-colors"
              >
                Back to STRIKE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
