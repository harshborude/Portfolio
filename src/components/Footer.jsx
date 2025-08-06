import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer fixed-footer">
      <div className="inner">
        {/* Left: Logo */}
        <div className="logo-wrap">
          <a href="#hero" className="logo">
            Harsh Borude
          </a>
        </div>

        {/* Center: Social Icons */}
        <nav className="desktop socials-wrap" aria-label="social links">
          <ul>
            {footerLinks.map(({ link, name, icon: Icon }) => (
              <li key={name} className="group">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Copyright */}
        <div className="footer-bottom copyright-wrap">
          <p>© {new Date().getFullYear()} Harsh Borude. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
