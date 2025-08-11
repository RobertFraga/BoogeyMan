import project from "../assets/Admin-amico.svg";

const Card = (props) => {
  return (
    <>
      <div className="bg-white flex flex-col items-center w-65 rounded-lg m-5">
        <img src={project} className="max-w-[200px]" />

        <div className="bg-[#FFF7F7] h-20 flex items-center justify-center w-full rounded-b-lg">
          <p className="text-purple-700 text-lg">{props.title}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
