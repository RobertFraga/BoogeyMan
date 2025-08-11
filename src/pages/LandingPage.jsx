import Mainimg from "../assets/Version control-amico.svg";
import Caroucel from "../components/Caroucel";

const Landing = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row items-center m-5 md:ml-20 space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">
        <div className="flex-1">
          <h1
            className="text-purple-700 font-bold text-2xl sm:text-3xl md:leading-tight"
            style={{
              // Default mobile font size (Tailwind handles 2xl / 3xl)
              // Apply clamp only for desktop sizes
              "--desktop-size": "clamp(2.5rem, 2vw + 2.5rem, 10rem)",
              fontSize: "var(--desktop-size)",
            }}
          >
            Crafting Scalable Solution for the Modern Web
          </h1>
          <p className="text-purple-700 font-bold mt-4">
            Helping Team and Startup go Further, Faster
          </p>
        </div>

        <div className="flex-1">
          <img
            src={Mainimg}
            alt="Main Visual"
            className="w-full max-w-[500px]"
          />
        </div>
      </main>
      <Caroucel />
    </>
  );
};

export default Landing;
