import btn1 from "../../assets/apple-store-transparent.svg";
import btn2 from "../../assets/play-store-transparent.svg";

const Mission = () => {
  return (
    <div className="bg-black bg-opacity-75 text-center flex flex-col items-center w-full md:w-3/5 mx-auto my-10 md:my-20 p-10 rounded-2xl gap-5" id="mission">
      <h1 className="text-3xl text-white">Our mission</h1>
      <p className="text-base md:text-xl text-[#D6D6D6]">
        To decentralized QR payment infrastructure for all businesses across
        Africa making financial services seamless and reliable
      </p>
      <div className="flex flex-col md:flex-row gap-5 ">
        <img src={btn1} alt="apple-store" className="w-40" />
        <img src={btn2} alt="play-store" className="w-40" />
      </div>
    </div>
  );
};

export default Mission;
