import  PaymentMain from './PaymentsMain'
import paymentVector from "../../assets/payment-hero.svg"
const PaymentsContainer = () => {
  return (
    <div className='bg-white flex justify-between w-full px-5 py-10 md:p-10 rounded-2xl'>
      <PaymentMain/>
      <div className='w-1/2 hidden md:block'>
        <img src={paymentVector} alt="" srcset="" />
      </div>
    </div>
  )
}

export default PaymentsContainer