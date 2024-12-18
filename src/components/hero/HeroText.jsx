import btn1 from "../../assets/play_store.svg"
import btn2 from "../../assets/apple_store.svg"

const HeroText = () => {
  return (
    <div className="w-full sm:w-3/5 md:w-[750px] px-5 md:px-0 md:ml-20 mt-10">
      <div className="space-y-5 mb-10">
        <h1 className="text-white text-4xl md:text-6xl font-medium">Welcome to the future of payments with PayLeave.</h1>
        <p className="text-[#D6D6D6] font-light text-lg md:text-xl ">
        Our innovative scan to pay wallet app is designed to make transactions faster, more secure, and more convenient than ever before. By registering with us, you can experience a whole new level of hassle-free payments.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <img src={btn1} alt="apple store" className='w-40'/>
        <img src={btn2} alt="apple store" className='w-40'/>
      </div>
    </div>
  )
}

export default HeroText