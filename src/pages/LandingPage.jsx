import Mainimg from "../assets/Version control-amico.svg";
import Caroucel from "../components/Caroucel";

const Landing = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row items-center m-5 md:ml-20 space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">
        <div className="flex-1">
          <h1
            className="text-purple-700 font-bold leading-tight"
            style={{
              fontSize: "clamp(2rem, 4vw + 1.5rem, 4rem)", // Fits 375px without wrap
            }}
          >
            <span className="whitespace-nowrap">Crafting Scalable</span>{" "}
            Solutions for the Modern Web
          </h1>
          <p className="text-purple-700 font-bold mt-4">
            Helping Team and Startup go Further, Faster
          </p>
        </div>

        <div className="flex-1">
          <img
            src={Mainimg}
            alt="Main Visual"
            className="w-full max-w-[1000px] pr-5"
          />
        </div>
      </main>
      <Caroucel />
    </>
  );
};

export default Landing;
