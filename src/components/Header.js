import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // ===== SCROLL SPY (ACTIVE LINK) =====
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll(); // run on load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ===== CLOSE MENU ON OUTSIDE CLICK =====
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // ===== NAV LINK CAPSULE CLASS =====
  const navLinkClass = (id) =>
    `relative px-4 py-1.5 rounded-full transition-all duration-300
     ${
       active === id
         ? "bg-blue-500/10 text-blue-400"
         : "text-gray-300 hover:text-white hover:bg-white/10"
     }
     after:content-[''] after:absolute after:left-2 after:-bottom-1
     after:h-[2px] after:w-[calc(100%-16px)] after:bg-blue-500
     after:origin-left after:scale-x-0 after:transition-transform
     hover:after:scale-x-100
     ${active === id ? "after:scale-x-100" : ""}`;

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-[#0b0f14]/90 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2">
          <span className="text-[#6BCCD9] text-xl font-bold">
            &lt;/&gt;
          </span>
          <h1 className="text-xl font-bold text-white">
            Mahendra Babu<span className="text-blue-500"> Konda</span>
          </h1>
        </a>



        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className={navLinkClass("home")}>Home</a>
          <a href="#about" className={navLinkClass("about")}>About</a>
          <a href="#skills" className={navLinkClass("skills")}>Skills</a>
          <a href="#certifications" className={navLinkClass("certifications")}>Certifications</a>
          <a href="#resume" className={navLinkClass("resume")}>Resume</a>
          <a href="#projects" className={navLinkClass("projects")}>Projects</a>
          <a href="#contact" className={navLinkClass("contact")}>Contact</a>
        </nav>

        {/* HAMBURGER (MOBILE) */}
        <button
          ref={buttonRef}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className={`md:hidden bg-[#0b0f14] border-t border-gray-800
          transition-all duration-300 ease-out
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col px-6 py-6 gap-3 text-sm">
          {[
            "home",
            "about",
            "projects",
            "skills",
            "certifications",
            "resume",
            "contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2 rounded-full transition
                ${
                  active === item
                    ? "bg-blue-500/10 text-blue-400"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
