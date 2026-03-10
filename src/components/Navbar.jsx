import { useEffect, useState } from "react";
import { navLinks, RESUME_LINK } from "../constants";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Harsh Borude
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
            <li className="group">
              <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
                <span>Resume</span>
                <span className="underline" />
              </a>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group hidden lg:flex">
          <div className="inner">
            <span>
              Contact me
            </span>
          </div>
        </a>

        {/* Mobile hamburger button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-[200] relative"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[150] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile slide-in drawer */}
      <nav className={`
        fixed top-0 right-0 h-dvh w-72 bg-black-100 z-[175] 
        transform transition-transform duration-300 ease-in-out
        flex flex-col pt-24 px-8 gap-6
        lg:hidden
        ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {navLinks.map(({ link, name }) => (
          <a
            key={name}
            href={link}
            className="text-white-50 text-xl font-medium py-3 border-b border-white/10 hover:text-white transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {name}
          </a>
        ))}
        <a
          href={RESUME_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white-50 text-xl font-medium py-3 border-b border-white/10 hover:text-white transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          Resume ↗
        </a>
        <a
          href="#contact"
          className="mt-4 px-6 py-3 rounded-lg bg-white text-black font-semibold text-center hover:bg-white-50 transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          Contact me
        </a>
      </nav>
    </header>
  );
}

export default Navbar;