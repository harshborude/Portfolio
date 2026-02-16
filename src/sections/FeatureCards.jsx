import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
       {abilities.map(({ title, desc }) => (
        <div
    key={title}
    className="card-border rounded-xl p-8 flex flex-col gap-4"
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