import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import { techStackImgs, techNameMap } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray(".tech-card").forEach((card, i) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <div id="skills" className="flex-center section-padding" ref={sectionRef}>
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={"Skills and Expertise"}
          sub={"The Skills I Bring to the Table"}
        />

        <div className="tech-grid max-w-7xl mx-auto justify-items-center">
          {techStackImgs.map((stack) => (
            <div
              key={stack.name}
              className="tech-card card-border overflow-hidden xl:rounded-6xl rounded-4xl w-full max-w-sm"
            >
              <div className="tech-icon-wrapper text-center w-full flex flex-col gap-4 items-center">
                <p className="text-white text-xl font-semibold break-words px-6 h-16">
                  {stack.name}
                </p>

                <div
                  className="grid gap-2 w-4/5 h-full place-items-center
                  grid-cols-2 sm:grid-cols-3"
                >
                  {stack.technologies.map((logoPath, i) => {
                    const filename = logoPath.split("/").pop();
                    const altText = techNameMap[filename] || filename;
                    return (
                      <img
                        key={i}
                        src={logoPath}
                        alt={altText}
                        className="aspect-square object-contain bg-white p-1 
                        rounded-2xl w-12 sm:w-14 xl:w-16"
                      />
                    );
                  })}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TechStack;
