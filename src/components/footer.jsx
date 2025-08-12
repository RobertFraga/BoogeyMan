import gmail from "../assets/icons/gmail.svg";
import viber from "../assets/icons/viber.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import discord from "../assets/icons/discord.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-purple-700 p-7">
        <h2 className="md:text-5xl text-3xl font-bold text-center text-[#FFF7F7] mb-10">
          Robert Fraga
        </h2>

        <div className="flex justify-center gap-x-12">
          <a href="mailto:robertfraga517@gmail.com">
            <img src={gmail} alt="Gmail" className="w-8" />
          </a>

          <a href="viber://chat?number=%+639457134009">
            <img src={viber} alt="Viber" className="w-8" />
          </a>

          <a
            href="www.linkedin.com/in/robert-fraga-2b592526a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="w-8" />
          </a>

          <a href="https://github.com/RobertFraga">
            <img src={github} className="w-8" />
          </a>

          <a
            href="https://discord.com/users/916161484843810856"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={discord} alt="Discord" className="w-8" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
