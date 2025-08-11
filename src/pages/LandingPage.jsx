import Mainimg from "../assets/Version control-amico.svg";
import about from "../assets/Version control-bro.svg";
import Caroucel from "../components/Caroucel";

const Landing = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row items-center m-5 md:ml-20 space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">
        <div className="flex-1">
          <h1
            className="text-purple-700 font-black leading-tight"
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
      <div className="relative md:flex md:m-30">
        {/* Image */}
        <img
          src={about}
          alt="about me"
          className="w-full md:w-1/2 object-cover"
        />

        {/* Mask/Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/90 p-6 md:static md:w-1/2 md:bg-transparent md:items-start md:justify-center">
          <h2 className="sm:text-purple-700 md:text-6xl text-4xl font-bold mb-4">
            About me
          </h2>
          <p className="sm:text-purple-700 md:text-left text-center text-xl md:text-2xl md:font-semibold">
            I'm a freelance web developer focused on crafting responsive,
            high-performance websites and web apps that scale with your
            business. From startups to solo founders or solo projects, I help
            bring ideas to life with clean code, modern tech stacks, and
            user-first design.
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
