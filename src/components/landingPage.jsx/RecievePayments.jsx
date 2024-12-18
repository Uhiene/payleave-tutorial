import image from "../../assets/recievePayment.svg"

const RecievePayments = () => {
  return (
    <div className="bg-[#141414] px-5 py-12 md:p-20 flex justify-between items-center">
      <div className="sm:w-1/2 space-y-5">
        <h1 className="text-3xl text-white">Receive payments</h1>
        <div >
          <p className="text-base md:text-xl text-[#D6D6D6] mb-5">
            Our cutting-edge scan to pay wallet app is made to provide merchants
            with a quick, safe, and practical payment experience. Businesses can
            use the app in their everyday sales by signing up with PayLeave,
            enabling customers to buy things with simply a scan.
          </p>
          <p className="text-base md:text-xl text-[#D6D6D6]">
            Low fees, no transaction costs, and excellent security are all
            provided by PayLeave. By giving customers a simple payment
            alternative, it hopes to aid in the expansion and prosperity of
            enterprises.
          </p>
        </div>
        <button className="p-2 px-4 font-medium text-xl rounded-md bg-white text-[#141414]">
          Become a merchant
        </button>
      </div>
      <div className="w-1/2 hidden md:block">
        <img src={image} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default RecievePayments;
