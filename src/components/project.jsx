import project from "../assets/Admin-amico.svg";

const Card = (props) => {
  return (
    <>
      <div className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white flex flex-col items-center w-65 rounded-lg m-5 hover:shadow-lg transition "
        >
          <img src={project} className="max-w-[200px]" alt={props.title} />
          <div className="bg-[#FFF7F7] h-20 flex items-center justify-center w-full rounded-b-lg">
            <p className="text-purple-700 text-lg font-bold">{props.title}</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Card;
