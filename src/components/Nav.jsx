import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { MdClose } from "react-icons/md";

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
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
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
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-white/70 border-b border-violet-200/70 shadow-[0_8px_32px_rgba(91,65,160,0.08)]"
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 gap-2">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 cursor-pointer shrink-0"
            onClick={() => navigate("/")}
          >
            <img
              src="/images/mylogo-4.png"
              width={36}
              height={36}
              className="w-8 h-8 sm:w-10 sm:h-10"
              alt="LG logo"
            />
            <span className="font-semibold text-base sm:text-lg tracking-tight text-slate-900">
              Lakshya Goyal
            </span>
          </motion.div>

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
                <div className="flex items-center gap-2">
                  <img
                    src="/images/logo.png"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                    alt="LG logo"
                  />
                  <span className="font-semibold text-slate-900 text-lg">
                    Lakshya Goyal
                  </span>
                </div>
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
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-violet-100">
                <p className="text-slate-500 text-xs text-center">
                  © 2026 FunctionX. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
