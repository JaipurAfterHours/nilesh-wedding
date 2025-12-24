import { motion } from "framer-motion";

// Decorative Elephant SVG
export const ElephantSVG = ({ className = "w-32 h-32", flip = false }: { className?: string; flip?: boolean }) => (
  <svg 
    viewBox="0 0 200 180" 
    className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
    fill="none"
  >
    <defs>
      <linearGradient id="elephantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f9a8d4" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#be185d" />
      </linearGradient>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fcd34d" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
    </defs>
    {/* Body */}
    <ellipse cx="100" cy="100" rx="55" ry="45" fill="url(#elephantGradient)" opacity="0.3" />
    <ellipse cx="100" cy="100" rx="55" ry="45" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
    {/* Head */}
    <circle cx="55" cy="70" r="30" fill="url(#elephantGradient)" opacity="0.3" />
    <circle cx="55" cy="70" r="30" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
    {/* Trunk */}
    <path d="M35 85 Q20 100 25 130 Q28 140 35 138 Q38 130 35 120 Q32 105 45 95" 
      fill="url(#elephantGradient)" opacity="0.3" stroke="url(#goldGradient)" strokeWidth="2" />
    {/* Ear */}
    <ellipse cx="30" cy="60" rx="18" ry="25" fill="url(#elephantGradient)" opacity="0.4" />
    <ellipse cx="30" cy="60" rx="18" ry="25" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
    {/* Decorative Howdah */}
    <rect x="75" y="55" width="50" height="40" rx="3" fill="url(#goldGradient)" opacity="0.3" />
    <rect x="75" y="55" width="50" height="40" rx="3" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
    {/* Howdah dome */}
    <path d="M80 55 Q100 35 120 55" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
    <circle cx="100" cy="42" r="5" fill="url(#goldGradient)" />
    {/* Decorative elements on howdah */}
    <circle cx="88" cy="70" r="4" fill="url(#goldGradient)" opacity="0.6" />
    <circle cx="100" cy="70" r="4" fill="url(#goldGradient)" opacity="0.6" />
    <circle cx="112" cy="70" r="4" fill="url(#goldGradient)" opacity="0.6" />
    {/* Legs */}
    <rect x="65" y="130" width="12" height="35" rx="4" fill="url(#elephantGradient)" opacity="0.3" stroke="url(#goldGradient)" strokeWidth="1.5" />
    <rect x="90" y="130" width="12" height="35" rx="4" fill="url(#elephantGradient)" opacity="0.3" stroke="url(#goldGradient)" strokeWidth="1.5" />
    <rect x="115" y="130" width="12" height="35" rx="4" fill="url(#elephantGradient)" opacity="0.3" stroke="url(#goldGradient)" strokeWidth="1.5" />
    {/* Tail */}
    <path d="M155 100 Q165 110 160 130 Q158 140 155 138" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
    {/* Eye */}
    <circle cx="50" cy="65" r="4" fill="url(#goldGradient)" />
    {/* Tusk */}
    <path d="M45 90 Q40 100 45 110" fill="none" stroke="#fffbeb" strokeWidth="3" strokeLinecap="round" />
    {/* Decorative anklets */}
    <ellipse cx="71" cy="158" rx="8" ry="4" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
    <ellipse cx="96" cy="158" rx="8" ry="4" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
    <ellipse cx="121" cy="158" rx="8" ry="4" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
  </svg>
);

// Lotus Flower SVG
export const LotusSVG = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 100 80" className={className}>
    <defs>
      <linearGradient id="lotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbcfe8" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#be185d" />
      </linearGradient>
      <linearGradient id="lotusGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fcd34d" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {/* Back petals */}
    <ellipse cx="30" cy="50" rx="12" ry="28" fill="url(#lotusGradient)" opacity="0.5" transform="rotate(-30 30 50)" />
    <ellipse cx="70" cy="50" rx="12" ry="28" fill="url(#lotusGradient)" opacity="0.5" transform="rotate(30 70 50)" />
    {/* Middle petals */}
    <ellipse cx="38" cy="45" rx="10" ry="30" fill="url(#lotusGradient)" opacity="0.7" transform="rotate(-15 38 45)" />
    <ellipse cx="62" cy="45" rx="10" ry="30" fill="url(#lotusGradient)" opacity="0.7" transform="rotate(15 62 45)" />
    {/* Center petal */}
    <ellipse cx="50" cy="40" rx="10" ry="32" fill="url(#lotusGradient)" />
    {/* Golden center */}
    <circle cx="50" cy="55" r="8" fill="url(#lotusGold)" />
    <circle cx="50" cy="55" r="4" fill="#fcd34d" />
    {/* Small dots */}
    <circle cx="46" cy="52" r="1.5" fill="#fcd34d" />
    <circle cx="54" cy="52" r="1.5" fill="#fcd34d" />
    <circle cx="50" cy="48" r="1.5" fill="#fcd34d" />
  </svg>
);

// Rajasthani Arch SVG for cards
export const RajasthaniArch = ({ className = "", children }: { className?: string; children?: React.ReactNode }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 400 120" className="w-full h-auto absolute top-0 left-0" preserveAspectRatio="none">
      <defs>
        <linearGradient id="archGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>
      {/* Main arch shape */}
      <path 
        d="M0,120 L0,80 Q0,40 40,40 L80,40 Q100,40 110,20 Q130,0 150,0 L250,0 Q270,0 290,20 Q300,40 320,40 L360,40 Q400,40 400,80 L400,120 Z"
        fill="url(#archGradient)"
        opacity="0.15"
      />
      <path 
        d="M0,120 L0,80 Q0,40 40,40 L80,40 Q100,40 110,20 Q130,0 150,0 L250,0 Q270,0 290,20 Q300,40 320,40 L360,40 Q400,40 400,80 L400,120"
        fill="none"
        stroke="url(#archGradient)"
        strokeWidth="3"
      />
      {/* Decorative elements */}
      <circle cx="200" cy="5" r="8" fill="url(#archGradient)" />
      <path d="M185,5 L175,20 M215,5 L225,20" stroke="url(#archGradient)" strokeWidth="2" />
      {/* Side ornaments */}
      <circle cx="50" cy="60" r="5" fill="url(#archGradient)" opacity="0.5" />
      <circle cx="350" cy="60" r="5" fill="url(#archGradient)" opacity="0.5" />
    </svg>
    <div className="relative pt-16">
      {children}
    </div>
  </div>
);

// Decorative Star
export const GoldenStar = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <defs>
      <linearGradient id="starGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fcd34d" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#fcd34d" />
      </linearGradient>
    </defs>
    <path 
      d="M12 0 L14.5 8.5 L24 9 L17 15 L19 24 L12 19 L5 24 L7 15 L0 9 L9.5 8.5 Z"
      fill="url(#starGold)"
    />
  </svg>
);

// Four-pointed Star
export const FourPointStar = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path 
      d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z"
      fill="url(#starGold)"
    />
    <defs>
      <linearGradient id="starGold4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fcd34d" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
  </svg>
);

// Peacock SVG
export const PeacockSVG = ({ className = "w-40 h-40" }: { className?: string }) => (
  <svg viewBox="0 0 150 150" className={className}>
    <defs>
      <linearGradient id="peacockBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
      <linearGradient id="peacockFeather" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="50%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
    {/* Tail feathers (fan) */}
    {[...Array(7)].map((_, i) => (
      <g key={i} transform={`rotate(${-45 + i * 15} 75 120)`}>
        <ellipse cx="75" cy="50" rx="8" ry="35" fill="url(#peacockFeather)" opacity="0.6" />
        <circle cx="75" cy="30" r="6" fill="#fcd34d" opacity="0.8" />
        <circle cx="75" cy="30" r="3" fill="#0369a1" />
      </g>
    ))}
    {/* Body */}
    <ellipse cx="75" cy="110" rx="15" ry="25" fill="url(#peacockBody)" />
    {/* Neck */}
    <path d="M75 85 Q75 70 70 55" stroke="url(#peacockBody)" strokeWidth="8" fill="none" strokeLinecap="round" />
    {/* Head */}
    <circle cx="68" cy="52" r="10" fill="url(#peacockBody)" />
    {/* Beak */}
    <path d="M58 52 L50 50 L58 48" fill="#f59e0b" />
    {/* Eye */}
    <circle cx="65" cy="50" r="2" fill="#1e293b" />
    {/* Crown */}
    <path d="M68 42 L65 35 M68 42 L68 34 M68 42 L71 35" stroke="url(#peacockBody)" strokeWidth="2" />
    <circle cx="65" cy="33" r="2" fill="#fcd34d" />
    <circle cx="68" cy="32" r="2" fill="#fcd34d" />
    <circle cx="71" cy="33" r="2" fill="#fcd34d" />
    {/* Legs */}
    <path d="M70 130 L70 145 M80 130 L80 145" stroke="#f59e0b" strokeWidth="2" />
  </svg>
);

// Floating Stars Animation Component for Hero
export const FloatingStars = () => {
  const stars = [
    { left: "5%", top: "10%", size: 32, delay: 0, type: "four" },
    { left: "15%", top: "25%", size: 16, delay: 0.5, type: "regular" },
    { left: "25%", top: "8%", size: 24, delay: 1, type: "four" },
    { left: "35%", top: "35%", size: 12, delay: 1.5, type: "regular" },
    { left: "45%", top: "15%", size: 20, delay: 0.3, type: "four" },
    { left: "55%", top: "28%", size: 28, delay: 0.8, type: "regular" },
    { left: "65%", top: "5%", size: 18, delay: 1.2, type: "four" },
    { left: "75%", top: "22%", size: 22, delay: 0.6, type: "regular" },
    { left: "85%", top: "12%", size: 26, delay: 1.8, type: "four" },
    { left: "92%", top: "30%", size: 14, delay: 0.4, type: "regular" },
    { left: "8%", top: "45%", size: 20, delay: 2, type: "four" },
    { left: "88%", top: "48%", size: 24, delay: 1.3, type: "regular" },
    { left: "50%", top: "5%", size: 30, delay: 0.2, type: "four" },
    { left: "30%", top: "50%", size: 16, delay: 1.7, type: "regular" },
    { left: "70%", top: "42%", size: 18, delay: 0.9, type: "four" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: star.left, top: star.top }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + star.delay,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        >
          {star.type === "four" ? (
            <FourPointStar size={star.size} />
          ) : (
            <GoldenStar size={star.size} />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default { ElephantSVG, LotusSVG, RajasthaniArch, GoldenStar, PeacockSVG, FloatingStars };
