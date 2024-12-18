import step1 from "../../assets/step1.svg";
import step2 from "../../assets/step2.svg";
import step3 from "../../assets/step3.svg";
import step4 from "../../assets/step4.svg";
import btn1 from "../../assets/apple-store-black.svg";
import btn2 from "../../assets/play-store-black.svg";

const PaymentsMain = () => {
  return (
    <div className="w-full md:w-1/2 space-y-5">
      <div className="space-y-5">
        <h1 className="text-[#111827] text-2xl md:text-3xl font-medium">
          Make payments
        </h1>
        <p className="text-[#525252] text-base md:text-xl font-light">
          Our app is designed to make your life easier and more convenient,
          whether you're shopping online or in-store. Join the Fintech
          revolution and register with PayLeave today. Sign up now and
          experience the future of transactions.
        </p>
        <p></p>
      </div>
      <div>
        <div className="flex gap-3 md:gap-4">
          <img src={step1} alt="" />
          <p className="text-[#525252] text-base md:text-xl font-light">
            Download the app on Playstore/iOS
          </p>
        </div>
        <div className="flex gap-3 md:gap-4">
          <img src={step2} alt="" />
          <p className="text-[#525252] text-base md:text-xl font-light">
            Sign up and add debit card
          </p>
        </div>
        <div className="flex gap-3 md:gap-4">
          <img src={step3} alt="" />
          <p className="text-[#525252] text-base md:text-xl font-light">
            Fund wallet zero charges
          </p>
        </div>
        <div className="flex gap-3 md:gap-4">
          <img src={step4} alt="" />
          <p className="text-[#525252] text-base md:text-xl font-light">
            Scan & make payments.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 ">
        <img src={btn1} alt="apple-store" className="w-40" />
        <img src={btn2} alt="play-store"  className="w-40"/>
      </div>
    </div>
  );
};

export default PaymentsMain;
