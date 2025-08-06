import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={"Skills and Expertise"}
          sub={"🤝 The Skills I Bring to the Table"}
        />

        <div className="tech-grid">
          {techStackImgs.map((stack) => (
            <div key={stack.name} className="card-border overflow-hidden xl:rounded-6xl rounded-4xl">
              <div className="tech-icon-wrapper text-center w-full flex flex-col gap-4">
                <p className="text-white text-xl font-semibold break-words px-6 h-16">
                  {stack.name}
                </p>

                <div
                  className="grid gap-2 w-4/5 h-full place-items-center
                  grid-cols-2 sm:grid-cols-3"
                >
                  {stack.technologies.map((logoPath, i) => (
                    <img
                      key={i} src={logoPath} alt=""
                      className="aspect-square object-contain bg-white p-1 
                      rounded-2xl w-12 sm:w-14 xl:w-16"
                    />
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;