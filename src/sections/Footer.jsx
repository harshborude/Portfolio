const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 mt-20 py-8">
      <div className="max-w-6xl mx-auto px-5 flex flex-col items-center gap-4">

        <div className="flex gap-6">
          <a
            href="https://github.com/harshborude"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition"
          >
            <img src="/images/github.webp" alt="GitHub" className="w-6 h-6 opacity-70 hover:opacity-100" />

          </a>

          <a
            href="https://www.linkedin.com/in/harshborude/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition"
          >
            <img src="/images/linkedin.png" alt="LinkedIn" className="w-6 h-6 opacity-70 hover:opacity-100" />

          </a>

          <a
            href="https://x.com/Borude82025"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition"
          >
            <img src="/images/x.png" alt="X (Twitter)" className="w-6 h-6 opacity-70 hover:opacity-100" />
          </a>
        </div>

        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Harsh Borude
        </p>

      </div>
    </footer>
  );
};

export default Footer;
