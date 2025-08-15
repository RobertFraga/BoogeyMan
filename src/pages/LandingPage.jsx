import Mainimg from "../assets/svg/coding.svg";
import about from "../assets/svg/me.svg";
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
            className="text-purple-700 font-black leading-tight bounce-on-load"
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
            className="w-full max-w-[500px] pr-5 animate-floating-slide"
          />
        </div>
      </main>

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
          <div className="cursor-pointer  m-10 flex-1/2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <h3 className="text-purple-700 font-bold text-lg">Web Design</h3>
            <p className="text-black">
              Crafting intuitive and modern UI mockups for seamless web
              development
            </p>
          </div>

          <div className="cursor-pointer  m-10 flex-1/2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <h3 className="text-purple-700 font-bold text-lg">
              Frontend Development
            </h3>
            <p className="text-black">
              Building fast, responsive, and accessible user interfaces with
              clean, modern code.
            </p>
          </div>

          <div className="cursor-pointer m-10 flex-1/2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
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
