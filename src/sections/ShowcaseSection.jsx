import { useRef, useCallback, useEffect } from "react";
import gsap from "gsap";
import { projects } from "../constants/index.js";

const CARD_WIDTH = 364; // 340px card + 24px gap
const SPEED = 0.8; // pixels per frame (~48px/sec at 60fps)
const RESUME_DELAY = 3000;

const ShowcaseSection = () => {
  const trackRef = useRef(null);
  const xRef = useRef(0);
  const isPausedRef = useRef(false);
  const resumeTimerRef = useRef(null);
  const halfWidthRef = useRef(0);
  const arrowTweenRef = useRef(null);

  // Normalize x to stay within [-halfWidth, 0] range for seamless looping
  const normalizeX = useCallback((val) => {
    const half = halfWidthRef.current;
    if (half === 0) return val;
    // Modulo wrap into [-half, 0]
    let result = val % half;
    if (result > 0) result -= half;
    return result;
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    halfWidthRef.current = track.scrollWidth / 2;

    const tick = () => {
      if (!isPausedRef.current) {
        xRef.current -= SPEED;
        xRef.current = normalizeX(xRef.current);
        gsap.set(track, { x: xRef.current });
      }
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [normalizeX]);

  const pauseCarousel = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const resumeCarousel = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  const scheduleResume = useCallback(() => {
    clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(resumeCarousel, RESUME_DELAY);
  }, [resumeCarousel]);

  const handleArrowClick = useCallback(
    (direction) => {
      pauseCarousel();
      // Kill any in-flight arrow tween
      if (arrowTweenRef.current) arrowTweenRef.current.kill();

      const shift = direction === "left" ? CARD_WIDTH : -CARD_WIDTH;
      const targetX = normalizeX(xRef.current + shift);

      arrowTweenRef.current = gsap.to(trackRef.current, {
        x: targetX,
        duration: 0.45,
        ease: "power2.out",
        onUpdate() {
          xRef.current = gsap.getProperty(trackRef.current, "x");
        },
        onComplete() {
          xRef.current = targetX;
          arrowTweenRef.current = null;
          scheduleResume();
        },
      });
    },
    [pauseCarousel, scheduleResume, normalizeX]
  );

  const handleMouseEnter = useCallback(() => {
    pauseCarousel();
    clearTimeout(resumeTimerRef.current);
  }, [pauseCarousel]);

  const handleMouseLeave = useCallback(() => {
    resumeCarousel();
  }, [resumeCarousel]);

  return (
    <section id="work" className="showcase-section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-14 text-white text-center">
          My Projects
        </h2>

        <div className="showcase-container">
          {/* Left Arrow */}
          <button
            className="showcase-arrow showcase-arrow--left"
            onClick={() => handleArrowClick("left")}
            aria-label="Previous project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            className="showcase-arrow showcase-arrow--right"
            onClick={() => handleArrowClick("right")}
            aria-label="Next project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>

          {/* Gradient edges */}
          <div className="showcase-fade showcase-fade--left" />
          <div className="showcase-fade showcase-fade--right" />

          {/* Track */}
          <div className="showcase-viewport">
            <div className="projects-track" ref={trackRef}>
              {[...projects, ...projects].map((project, index) => (
                <a
                  key={index}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="project-card__image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-card__overlay">
                      <span className="project-card__view">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        View on GitHub
                      </span>
                    </div>
                  </div>

                  <div className="project-card__body">
                    <h3 className="project-card__title">{project.title}</h3>

                    <div className="project-card__tags">
                      {project.techStack.split(", ").map((tech) => (
                        <span key={tech} className="project-card__tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="project-card__desc">{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;