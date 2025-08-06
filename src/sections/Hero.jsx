import { words } from "../constants/index";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {

  useGSAP(() => {
    gsap.fromTo(
      // target class name
      '.hero-text h1',

      // from these properties
      {
        y: 50,
        opacity: 0
      },

      // to these properties
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut'
      }
    )
  })

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* Left: hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span key={word.id}
                        className="flex items-center md:gap-3 gap-1 pb-2">
                        <img src={word.imgPath} alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1
                            rounded-full bg-white-50" />
                        <span>{word.text}</span>
                      </span>
                    ))
                    }
                  </span>
                </span>
              </h1>
              <h1>
                into Real Projects
              </h1>
              <h1>
                that Deliver Results
              </h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              <strong>Hello, I'm Harsh Borude.</strong> <br />
              Mining Engg @ IIT Kharagpur → Software Engineer by heart <br />
              Driven by curiosity, guided by code. 
            </p>

            <Button 
              text="See My Work"
              id="button"
              className="md:wd-80 md:h-16 w-60 h-12"
            />
          </div>
        </header>

        {/* Right: 3D model */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      
      <AnimatedCounter />
    </section>
  );
}

export { Hero };