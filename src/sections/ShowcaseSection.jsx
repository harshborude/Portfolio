import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants/index.js";

const CARD_WIDTH = 370; // card min-width + gap
const RESUME_DELAY = 3000;

const ShowcaseSection = () => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useGSAP(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    animationRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const pauseCarousel = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.pause();
      setIsPaused(true);
    }
  }, []);

  const resumeCarousel = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.play();
      setIsPaused(false);
    }
  }, []);

  const scheduleResume = useCallback(() => {
    clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      resumeCarousel();
    }, RESUME_DELAY);
  }, [resumeCarousel]);

  const handleArrowClick = useCallback(
    (direction) => {
      pauseCarousel();

      const track = trackRef.current;
      const currentX = gsap.getProperty(track, "x");
      const shift = direction === "left" ? CARD_WIDTH : -CARD_WIDTH;

      gsap.to(track, {
        x: currentX + shift,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          scheduleResume();
        },
      });
    },
    [pauseCarousel, scheduleResume]
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