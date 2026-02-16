import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {projects} from "../constants/index.js"
gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {

  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)
  const project4Ref = useRef(null)
  const project5Ref = useRef(null)
  // const project6Ref = useRef(null)


  const animationRef = useRef(null)

useGSAP(() => {
  const track = sectionRef.current
  const totalWidth = track.scrollWidth / 2

  animationRef.current = gsap.to(track, {
    x: -totalWidth,
    duration: 30,
    ease: "none",
    repeat: -1,
  })
}, [])






  return (
   <section id="work" className="app-showcase py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold mb-12 text-white text-center">
  My Projects
</h2>


    <div className="projects-wrapper">
      <div className="projects-track" ref={sectionRef}>
  {[...projects, ...projects].map((project, index) => (
    <a
      key={index}
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      onMouseEnter={() => animationRef.current.pause()}
      onMouseLeave={() => animationRef.current.play()}
    >
      <div className="project-image">
  <img src={project.image} alt={project.title} />
</div>

<div className="project-info-box">
  <h3 className="project-title">{project.title}</h3>
  <p className="text-sm italic text-white/80 mt-2">
  <span className="font-semibold not-italic text-white">Tech Stack:</span> {project.techStack}
</p>
    <br></br>
  <p className="project-description">
    {project.description}
  </p>
</div>

    </a>
  ))}
</div>

    </div>

  </div>
</section>


  );
}

export default ShowcaseSection;