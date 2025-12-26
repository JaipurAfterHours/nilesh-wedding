import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Calendar, MapPin, ExternalLink } from "lucide-react";
import {
  MarigoldSVG,
  MehendiHandSVG,
  GaneshSmallSVG,
  TurmericSVG,
  MusicNotesSVG,
  HorseSVG,
  DholakSVG,
  KalashSVG,
  FloatingDecoration,
  FilmReelSVG,
  CameraSVG,
  SpotlightSVG,
} from "../decorative/EventIllustrations";

interface Event {
  name: string;
  date: string;
  time: string;
  venue?: string;
  address?: string;
  mapLink?: string;
  description?: string;
}

interface EventDay {
  title: string;
  subtitle?: string;
  date: string;
  events: Event[];
  venue?: string;
  address?: string;
  mapLink?: string;
}

interface EventDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: EventDay;
  theme: {
    theme: string;
    primary: string;
    secondary: string;
    bg: string;
    border: string;
    headerBg: string;
    textColor: string;
    iconColor: string;
    illustrations: string[];
  };
}

// Bride and Groom illustrations based on theme
const CoupleIllustration = ({ theme, className = "w-32 h-40" }: { theme: string; className?: string }) => {
  const getColors = () => {
    switch (theme) {
      case "haldi":
        return { primary: "#fbbf24", secondary: "#ca8a04", accent: "#f59e0b" };
      case "mehndi":
        return { primary: "#22c55e", secondary: "#15803d", accent: "#16a34a" };
      case "sangeet":
        return { primary: "#3b82f6", secondary: "#1e40af", accent: "#60a5fa" };
      case "barat":
        return { primary: "#e11d48", secondary: "#9f1239", accent: "#fb7185" };
      default:
        return { primary: "#f59e0b", secondary: "#b45309", accent: "#fcd34d" };
    }
  };

  const colors = getColors();

  return (
    <svg viewBox="0 0 120 150" className={className}>
      <defs>
        <linearGradient id="brideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.primary} />
          <stop offset="100%" stopColor={colors.secondary} />
        </linearGradient>
        <linearGradient id="groomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.secondary} />
          <stop offset="100%" stopColor={colors.primary} />
        </linearGradient>
      </defs>
      
      {/* Groom - Left side */}
      <g transform="translate(10, 20)">
        {/* Head */}
        <circle cx="25" cy="20" r="12" fill="#deb887" stroke="#c4a574" strokeWidth="1" />
        {/* Turban/Pagdi */}
        <path d="M13 18 Q15 5 25 5 Q35 5 37 18 Q38 10 35 8 Q28 4 22 8 Q15 10 13 18" fill={colors.primary} />
        <path d="M18 12 Q25 8 32 12" fill="none" stroke={colors.accent} strokeWidth="1" />
        <circle cx="25" cy="8" r="3" fill={colors.accent} />
        {/* Face */}
        <circle cx="22" cy="18" r="1.5" fill="#4a3728" />
        <circle cx="28" cy="18" r="1.5" fill="#4a3728" />
        <path d="M23 23 Q25 25 27 23" fill="none" stroke="#8b7355" strokeWidth="0.8" />
        {/* Body/Sherwani */}
        <path d="M15 32 L10 90 L40 90 L35 32 Q25 28 15 32" fill="url(#groomGrad)" />
        {/* Sherwani details */}
        <path d="M25 35 L25 80" stroke={colors.accent} strokeWidth="1.5" />
        <circle cx="25" cy="45" r="2" fill={colors.accent} />
        <circle cx="25" cy="55" r="2" fill={colors.accent} />
        <circle cx="25" cy="65" r="2" fill={colors.accent} />
        {/* Dupatta/Stole */}
        <path d="M15 35 Q8 50 12 90" stroke={colors.accent} strokeWidth="3" fill="none" opacity="0.8" />
      </g>

      {/* Bride - Right side */}
      <g transform="translate(60, 20)">
        {/* Head */}
        <circle cx="25" cy="20" r="12" fill="#deb887" stroke="#c4a574" strokeWidth="1" />
        {/* Hair */}
        <path d="M13 20 Q10 10 18 8 Q25 6 32 8 Q40 10 37 20" fill="#2d1f1a" />
        {/* Maang tikka */}
        <circle cx="25" cy="10" r="2.5" fill={colors.primary} />
        <path d="M25 12 L25 16" stroke={colors.primary} strokeWidth="1" />
        <circle cx="25" cy="17" r="1.5" fill={colors.accent} />
        {/* Face */}
        <circle cx="22" cy="18" r="1.5" fill="#4a3728" />
        <circle cx="28" cy="18" r="1.5" fill="#4a3728" />
        <path d="M23 23 Q25 25 27 23" fill="none" stroke="#c17171" strokeWidth="1" />
        {/* Bindi */}
        <circle cx="25" cy="15" r="1.2" fill="#e11d48" />
        {/* Earrings */}
        <circle cx="12" cy="22" r="2" fill={colors.primary} />
        <circle cx="38" cy="22" r="2" fill={colors.primary} />
        {/* Body/Lehenga */}
        <path d="M15 32 L5 100 L45 100 L35 32 Q25 28 15 32" fill="url(#brideGrad)" />
        {/* Dupatta/Chunri over head */}
        <path d="M12 12 Q5 20 8 40 Q10 60 15 100" fill={colors.accent} opacity="0.6" />
        <path d="M38 12 Q45 20 42 40 Q40 60 35 100" fill={colors.accent} opacity="0.6" />
        {/* Jewelry details */}
        <path d="M20 35 Q25 40 30 35" stroke={colors.accent} strokeWidth="2" fill="none" />
        {/* Lehenga pattern */}
        <ellipse cx="25" cy="70" rx="15" ry="5" fill="none" stroke={colors.accent} strokeWidth="1" opacity="0.5" />
        <ellipse cx="25" cy="85" rx="18" ry="5" fill="none" stroke={colors.accent} strokeWidth="1" opacity="0.5" />
      </g>
    </svg>
  );
};

// Render illustration based on type
const renderIllustration = (type: string, color: string, className: string) => {
  switch (type) {
    case "marigold":
      return <MarigoldSVG className={className} color={color} />;
    case "mehendi":
      return <MehendiHandSVG className={className} color={color} />;
    case "ganesh":
      return <GaneshSmallSVG className={className} color={color} />;
    case "turmeric":
      return <TurmericSVG className={className} color={color} />;
    case "music":
      return <MusicNotesSVG className={className} color={color} />;
    case "dholak":
      return <DholakSVG className={className} color={color} />;
    case "horse":
      return <HorseSVG className={className} color={color} />;
    case "kalash":
      return <KalashSVG className={className} color={color} />;
    case "filmreel":
      return <FilmReelSVG className={className} color={color} />;
    case "camera":
      return <CameraSVG className={className} color={color} />;
    case "spotlight":
      return <SpotlightSVG className={className} color={color} />;
    default:
      return <MarigoldSVG className={className} color={color} />;
  }
};

// Generate Google Maps link from address
const getMapLink = (address: string, mapLink?: string) => {
  if (mapLink) return mapLink;
  return `https://maps.google.com/?q=${encodeURIComponent(address)}`;
};

export const EventDetailModal = ({ isOpen, onClose, day, theme }: EventDetailModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-gradient-to-br ${theme.bg} rounded-2xl shadow-2xl border-2 ${theme.border} pointer-events-auto`}
            >
              {/* Floating illustrations */}
              <div className="absolute top-4 left-4 opacity-30 pointer-events-none">
                <FloatingDecoration delay={0}>
                  {renderIllustration(theme.illustrations[0], theme.primary, "w-12 h-12")}
                </FloatingDecoration>
              </div>
              <div className="absolute top-4 right-16 opacity-25 pointer-events-none">
                <FloatingDecoration delay={0.5}>
                  {renderIllustration(theme.illustrations[1] || theme.illustrations[0], theme.secondary, "w-10 h-10")}
                </FloatingDecoration>
              </div>
              <div className="absolute bottom-4 left-4 opacity-25 pointer-events-none">
                <FloatingDecoration delay={1}>
                  {renderIllustration(theme.illustrations[2] || theme.illustrations[0], theme.primary, "w-10 h-10")}
                </FloatingDecoration>
              </div>
              <div className="absolute bottom-4 right-4 opacity-30 pointer-events-none">
                <FloatingDecoration delay={1.5}>
                  {renderIllustration(theme.illustrations[0], theme.secondary, "w-12 h-12")}
                </FloatingDecoration>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white ${theme.textColor} transition-colors shadow-lg`}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className={`${theme.headerBg} py-6 px-8 text-center relative overflow-hidden`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='15' stroke='white' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>
                <h2 className="font-script text-3xl sm:text-4xl text-white drop-shadow-lg relative z-10">
                  {day.title}
                </h2>
                {day.subtitle && (
                  <p className="text-white/90 mt-1 font-body text-sm relative z-10">{day.subtitle}</p>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-6 relative">
                {/* Date */}
                <div className={`flex items-center justify-center gap-3 ${theme.textColor}`}>
                  <Calendar className="w-5 h-5" />
                  <span className="font-heading text-lg font-semibold">{day.date}</span>
                </div>

                {/* Couple Illustration */}
                <div className="flex justify-center py-4">
                  <CoupleIllustration theme={theme.theme} className="w-40 h-48" />
                </div>

                {/* Events List */}
                <div className="space-y-4">
                  <h3 className={`font-heading text-sm uppercase tracking-widest ${theme.textColor} opacity-70 text-center`}>
                    Schedule
                  </h3>
                  <div className="space-y-3">
                    {day.events.map((event, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className={`bg-white/50 backdrop-blur-sm rounded-xl p-4 border ${theme.border}`}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className={`font-heading text-base font-semibold ${theme.textColor}`}>
                            {event.name}
                          </h4>
                          <div className={`flex items-center gap-2 ${theme.textColor}`}>
                            <Clock className="w-4 h-4" />
                            <span className="font-body text-sm font-medium">{event.time}</span>
                          </div>
                        </div>
                        {event.description && (
                          <p className={`mt-2 font-body text-sm ${theme.textColor} opacity-80`}>
                            {event.description}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Venue */}
                {(day.venue || day.address) && (
                  <div className={`mt-6 pt-4 border-t ${theme.border}`}>
                    <h3 className={`font-heading text-sm uppercase tracking-widest ${theme.textColor} opacity-70 text-center mb-3`}>
                      Venue
                    </h3>
                    <a
                      href={getMapLink(day.address || day.venue || "", day.mapLink)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block bg-white/50 backdrop-blur-sm rounded-xl p-4 border ${theme.border} hover:bg-white/70 transition-colors group`}
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className={`w-5 h-5 ${theme.textColor} flex-shrink-0 mt-0.5`} />
                        <div className="flex-1">
                          {day.venue && (
                            <p className={`font-heading text-base font-semibold ${theme.textColor} group-hover:underline`}>
                              {day.venue}
                            </p>
                          )}
                          {day.address && (
                            <p className={`font-body text-sm ${theme.textColor} opacity-80 mt-1 group-hover:underline`}>
                              {day.address}
                            </p>
                          )}
                        </div>
                        <ExternalLink className={`w-4 h-4 ${theme.textColor} opacity-60 group-hover:opacity-100 transition-opacity`} />
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
