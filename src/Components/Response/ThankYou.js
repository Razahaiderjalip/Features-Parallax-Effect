import React from 'react';
import { useNavigate } from "react-router-dom";
import ThankYouBg from "../../Assets/ThankYouBg.svg";
import ScrollToTop from '../../Reusable/ScrollToTop';
import '../../App.css';

const ThankYou = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
    <ScrollToTop />
    <div className="flex flex-col xsm:h-max sm:h-max md:h-max lg:h-max xl:h-max 2xl:h-max xsm:my-8 sm:my-12 md:my-16 lg:my-20 xl:my-20 2xl:my-8 xsm:pb-0 sm:pb-0 md:pb-0 xsm:justify-evenly sm:justify-evenly md:justify-center lg:justify-center xl:justify-center 2xl:justify-center items-center relative w-full">
        <div className="flex xsm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center justify-between xsm:px-20 sm:px-20 md:px-20 xl:px-20 lg:px-20 2xl:px-20 w-full">
            <img src={ThankYouBg} className="xsm:w-[385.55px] sm:w-[385.55px] md:w-[385.55px] lg:w-[485.55px] xl:w-[485.55px] 2xl:w-[485.55px]" alt="Thank You" />
            <div className="flex flex-col justify-center xsm:mt-12 sm:mt-12 md:mt-12">
                <h2 className="text-[#00B27A] text-left font-poppins xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-extrabold mb-8">Grazie per esserti <br/> <span className='w-full block mt-4'>registrato!</span></h2>
                <p className="text-[#000000] text-left font-poppins xsm:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-bold mb-8">A breve riceverai un’e-mail di conferma e potrai accedere alla <span className='lg:w-full xl:w-full 2xl:w-full lg:block xl:block 2xl:block lg:mt-1 xl:mt-1 2xl:mt-1'>piattaforma.</span></p>
                <button type="button" onClick={goToLogin} className="flex flex-col w-[295px] h-[50px] text-[#000000] bg-[#DCFFCF] border-black border-[2.96px] font-semibold font-poppins text-lg justify-center items-center text-center">Torna al Login</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ThankYou;