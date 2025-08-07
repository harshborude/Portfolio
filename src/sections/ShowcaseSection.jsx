import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {

  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current]

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          }
        }
      )
    })

    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1.5
      }
    )
  }, [])

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
         {/* Left */}
<a href="https://your-link-to-whiteboard-app.com" target="_blank" rel="noopener noreferrer">
  <div className="first-project-wrapper" ref={project1Ref}>
    <div className="image-wrapper">
      <img src="/images/project1.png" alt="SearchEngine" />
    </div>
    <div className="text-content">
      <h2>WhiteBoard App</h2>
      <p className="text-white-50 md:text-xl">
        Engineered a Whiteboard app that can process over <strong>20,000+</strong> documents,
        delivering <strong>sub-100ms</strong> search responses through intelligent caching and async processing.
      </p>
    </div>
  </div>
</a>

{/* Right */}
<div className="project-list-wrapper overflow-hidden">
  <a href="https://your-link-to-cube-solver.com" target="_blank" rel="noopener noreferrer">
    <div className="project" ref={project2Ref}>
      <div className="image-wrapper bg-[#027ecd]/70">
        <img src="/images/project2.png" alt="GoChat" />
      </div>
      <div className="text-content">
        <h2>Rubik's Cube solver</h2>
        <p className="text-white-50 md:text-xl">
          Real time group chat application built in GoLang and React, allowing multiple users to communicate
        </p>
      </div>
    </div>
  </a>

  <a href="https://your-link-to-dsa-search.com" target="_blank" rel="noopener noreferrer">
    <div className="project" ref={project3Ref}>
      <div className="image-wrapper bg-[#ffe7eb]">
        <img src="/images/project3.png" alt="GoChat" />
      </div>
      <div className="text-content">
        <h2>DSA based Search-Engine</h2>
        <p className="text-white-50 md:text-xl">
          Lightweight, cross-platform emoji picker designed for quick access to emojis via keyboard
        </p>
      </div>
    </div>
  </a>
</div>

        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;