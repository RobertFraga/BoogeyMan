import gmail from "../assets/icons/gmail.svg";
import viber from "../assets/icons/viber.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import discord from "../assets/icons/discord.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 p-10 text-center text-white animate-gradient-x">
        <h2 className="md:text-5xl text-3xl font-bold mb-2">Robert Fraga</h2>
        <p className="text-lg opacity-90 mb-6">
          Web Developer | React • Django • Tailwind
        </p>
        <p className="mb-8 text-sm">Let's build something great together 🚀</p>

        <div className="flex justify-center gap-x-10">
          <a href="mailto:robertfraga517@gmail.com" aria-label="Email Robert">
            <img
              src={gmail}
              alt="Gmail"
              className="w-8 transition duration-300 hover:-translate-y-1 hover:scale-110"
            />
          </a>

          <a
            href="viber://chat?number=%+639457134009"
            aria-label="Chat on Viber"
          >
            <img
              src={viber}
              alt="Viber"
              className="w-8 transition duration-300 hover:-translate-y-1 hover:scale-110"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/robert-fraga-2b592526a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-8 transition duration-300 hover:-translate-y-1 hover:scale-110"
            />
          </a>

          <a
            href="https://github.com/RobertFraga"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-8 transition duration-300 hover:-translate-y-1 hover:scale-110"
            />
          </a>

          <a
            href="https://discord.com/users/916161484843810856"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord Profile"
          >
            <img
              src={discord}
              alt="Discord"
              className="w-8 transition duration-300 hover:-translate-y-1 hover:scale-110"
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
