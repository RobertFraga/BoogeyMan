import Mainimg from "../assets/Version control-amico.svg";
import about from "../assets/Version control-bro.svg";
import Caroucel from "../components/Caroucel";
import Footer from "../components/footer";
import Card from "../components/project";

const Landing = () => {
  return (
    <>
      {/* hero section */}
      <main className="flex flex-col md:flex-row items-center lg:justify-items-center m-5 md:ml-20 space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">
        <div className="flex-1">
          <h1
            className="text-purple-700 font-black leading-tight"
            style={{
              fontSize: "clamp(2rem, 4vw + 1.5rem, 5rem)", // Fits 375px without wrap
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
            className="w-full max-w-[500px] pr-5 animate-floating"
          />
        </div>
      </main>

      {/* Tech Stack section*/}
      <Caroucel />

      {/* About section */}
      <div className="relative md:flex md:m-30">
        <img
          src={about}
          alt="about me"
          className="w-full max-w-[500px] object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/80 p-6 md:static md:w-1/2 md:bg-transparent md:items-start md:justify-center">
          <h2
            className="sm:text-purple-700 md:text-6xl text-4xl font-bold mb-4"
            style={{
              fontSize: "clamp(0.3rem, 0.01vw + 2.5rem, 3rem)", // Fits 375px without wrap
            }}
          >
            About me
          </h2>
          <p
            className="sm:text-purple-700 md:text-left text-center text-xl md:text-2xl md:font-semibold"
            style={{
              fontSize: "clamp(0.3rem, 0.01vw + 1rem, 3rem)", // Fits 375px without wrap
            }}
          >
            I'm a freelance web developer focused on crafting responsive,
            high-performance websites and web apps that scale with your
            business. From startups to solo founders or solo projects, I help
            bring ideas to life with clean code, modern tech stacks, and
            user-first design.
          </p>
        </div>
      </div>

      {/* Project section */}
      <section className="bg-purple-700 min-h-[300px] pb-7 flex flex-col items-center justify-center">
        <h2 className="md:text-5xl text-4xl font-bold text-center m-7">
          Projects
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Card
            title="SMS"
            link="https://github.com/RobertFraga/Student-Management-System"
          />
          <Card
            title="Simple blog"
            link="https://github.com/RobertFraga/React-blog"
          />
        </div>
      </section>

      <section>
        <h2 className="md:text-5xl text-4xl font-bold text-center m-7 text-purple-700">
          Services
        </h2>

        <div className="md:flex md:justify-evenly m-10">
          <div className="m-10 flex-1/2">
            <h3 className="text-purple-700 font-bold text-lg">Web Design</h3>
            <p className="text-black">
              Crafting intuitive and modern UI mockups for seamless web
              development
            </p>
          </div>

          <div className="m-10 flex-1/2">
            <h3 className="text-purple-700 font-bold text-lg">
              Frontend Development
            </h3>
            <p className="text-black">
              Building fast, responsive, and accessible user interfaces with
              clean, modern code.
            </p>
          </div>

          <div className="m-10 flex-1/2">
            <h3 className="text-purple-700 font-bold text-lg">
              Backend Development
            </h3>
            <p className="text-black">
              Designing secure, scalable, and efficient server-side systems to
              power modern web applications
            </p>
          </div>
        </div>
      </section>

      {/* footer with contact */}
      <Footer />
    </>
  );
};

export default Landing;
