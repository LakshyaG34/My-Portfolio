import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import gsap from "gsap";

const BrandLogo = ({ onClick, compact = false }) => {
  const markRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        ".brand-mark__stroke",
        { strokeDashoffset: 100, opacity: 0.35 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power2.out",
        },
      );
    }, markRef);

    return () => context.revert();
  }, []);

  return (
    <motion.button
      type="button"
      onClick={onClick}
      data-hover-effect="off"
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`group flex items-center text-left ${compact ? "gap-2.5" : "gap-2 sm:gap-3"}`}
      aria-label="Lakshya Goyal home"
    >
      <motion.span
        whileHover={{ rotate: -5, scale: 1.06 }}
        transition={{ type: "spring", stiffness: 360, damping: 18 }}
        className={`relative grid shrink-0 place-items-center overflow-hidden rounded-[13px] bg-gradient-to-br from-violet-500 via-violet-600 to-indigo-700 shadow-[0_7px_18px_rgba(105,72,190,0.28)] ${compact ? "h-9 w-9" : "h-9 w-9 sm:h-10 sm:w-10"}`}
      >
        <span className="absolute inset-[1px] rounded-[12px] border border-white/25" />
        <span className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-white/20 blur-md transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
        <svg
          ref={markRef}
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
          className="relative h-[72%] w-[72%]"
        >
          <path
            className="brand-mark__stroke"
            pathLength="100"
            strokeDasharray="100"
            strokeDashoffset="100"
            d="M13 11v26h15"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="brand-mark__stroke"
            pathLength="100"
            strokeDasharray="100"
            strokeDashoffset="100"
            d="M36 17a12 12 0 1 0 0 14h-8v-7h8"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="36" cy="31" r="2" fill="#d8caff" />
        </svg>
        <motion.span
          aria-hidden="true"
          className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-violet-200 shadow-[0_0_8px_rgba(255,255,255,0.9)]"
          animate={{ scale: [0.8, 1.15, 0.8], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.span>
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap text-[15px] font-bold tracking-[-0.045em] text-slate-900 sm:text-[17px]">
          Lakshya <span className="text-violet-700">Goyal</span>
        </span>
        {!compact && (
          <span className="mt-1 hidden text-[8px] font-semibold tracking-[0.2em] text-slate-500 sm:block">
            DIGITAL ENGINEER
          </span>
        )}
      </span>
    </motion.button>
  );
};

const renderStaggeredLabel = (label) => (
  <span className="nav-hover-label" aria-hidden="true">
    {[false, true].map((isHoverLabel) => (
      <span
        className={`nav-hover-phrase${isHoverLabel ? " nav-hover-phrase-hover" : ""}`}
        key={`${label}-${isHoverLabel}`}
      >
        {[...label].map((letter, index) => (
          <span
            className="nav-hover-letter"
            key={`${isHoverLabel}-${index}`}
            style={{ "--nav-letter-index": index }}
          >
            {letter === " " ? "\u00a0" : letter}
          </span>
        ))}
      </span>
    ))}
  </span>
);

const Nav = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (mobileMenuOpen) return; // Don't hide nav when mobile menu is open
    
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About Me", path: "/about" },
    { name: "My Services", path: "/services" },
    // { name: "Products", path: "/products" },
    // { name: "Careers", path: "/careers" },
    { name: "Contact Me", path: "/contact" },
  ];

  // Animation variants
  const navVariants = {
    visible: { y: 0 },
    hidden: { y: "-100%" },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        // className="rounded-full fixed top-4 left-0 w-full z-50 backdrop-blur-2xl bg-white/70 border-b border-violet-200/70 shadow-[0_8px_32px_rgba(91,65,160,0.08)]"
        className="rounded-full fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 backdrop-blur-2xl bg-white/70 border-b border-violet-200/70 shadow-[0_8px_32px_rgba(91,65,160,0.08)]"
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 gap-2">
          {/* Logo */}
          <BrandLogo onClick={() => navigate("/")} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 sm:gap-8 text-xs sm:text-sm">
            {navLinks.map((link, index) => (
              <motion.button
                key={index}
                whileTap={{ scale: 0.95 }}
                data-hover-effect="off"
                onClick={() => navigate(link.path)}
                className={`nav-page-link relative group transition ${location.pathname === link.path ? "text-violet-700" : "text-slate-600"}`}
                aria-label={link.name}
              >
                {renderStaggeredLabel(link.name)}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-violet-500 transition-all group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            {/* Desktop Login Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 24px rgba(124,91,210,0.28)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="hidden md:flex bg-violet-600 text-white p-2 sm:px-4 sm:py-2 font-medium shrink-0 items-center justify-center gap-2 shadow-lg shadow-violet-500/20 rounded-lg"
              aria-label="Login"
            >
              <FaUserCircle className="text-lg sm:text-xl" />
              <span className="hidden sm:inline">Contact Me</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden bg-violet-600 text-violet-800 p-2 font-medium shrink-0 rounded-lg"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-lg" />
              ) : (
                <FaBars className="text-lg" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-violet-950/20 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white/90 backdrop-blur-2xl border-l border-violet-100 shadow-2xl shadow-violet-950/10 z-50 md:hidden"
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center p-6 border-b border-violet-100">
                <BrandLogo compact onClick={() => navigate("/")} />
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-500 hover:text-violet-700 p-2"
                >
                  <MdClose className="text-2xl" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col p-6 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    variants={mobileLinkVariants}
                    whileTap={{ scale: 0.95 }}
                    data-hover-effect="off"
                    onClick={() => {
                      navigate(link.path);
                      setMobileMenuOpen(false);
                    }}
                    className="nav-page-link relative group text-left text-slate-700 text-lg font-medium transition"
                    aria-label={link.name}
                  >
                    {renderStaggeredLabel(link.name)}
                    <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-violet-500 transition-all group-hover:w-full"></span>
                  </motion.button>
                ))}

                {/* Divider */}
                <div className="h-px bg-violet-100 my-2" />

                {/* Mobile Login Button */}
                <motion.button
                  variants={mobileLinkVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigate("/contact");
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-3 bg-violet-600 text-white px-6 py-3 font-semibold text-base shadow-lg shadow-violet-500/20 rounded-xl"
                >
                  <FaUserCircle className="text-xl" />
                  <span>Contact</span>
                </motion.button>
              </div>

              {/* Footer */}
              {/* <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-violet-100">
                <p className="text-slate-500 text-xs text-center">
                  © 2026 FunctionX. All rights reserved.
                </p>
              </div> */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
