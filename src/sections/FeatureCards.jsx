import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { abilities } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const FeatureCards = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray(".feature-card").forEach((card, i) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
        },
      });
    });
  }, []);

  return (
    <div className="w-full padding-x-lg mt-20" ref={containerRef}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {abilities.map(({ title, desc }) => (
          <div
            key={title}
            className="feature-card card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <h3 className="text-white text-2xl font-semibold">
              {title}
            </h3>

            <p className="text-white-50 text-lg">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCards;