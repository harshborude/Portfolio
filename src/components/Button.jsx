const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault(); // preventing the default reloading action of the a tag

        const target = document.getElementById('counter')

        // Setting up animation for scroll that is to move from one to another
        if (target && id) {
          const offset = window.innerHeight * 0.15;

          const top = target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top,
            behavior: 'smooth'
          })
        }
      }}
      className={`${className ?? ''} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">
          {text}
        </p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
}

export default Button;