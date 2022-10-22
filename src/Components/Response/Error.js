import React from 'react';
import { useNavigate } from "react-router-dom";
import ErrorBG from "../../Assets/ErrorBG.svg";
import ScrollToTop from '../../Reusable/ScrollToTop';
import '../../App.css';


const Error = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  return (

    <>

    <ScrollToTop />

    <div className="flex flex-col xsm:h-max sm:h-max md:h-max lg:h-max xl:h-max 2xl:h-max xsm:my-8 sm:my-12 md:my-16 lg:my-20 xl:my-20 2xl:my-8 xsm:pb-0 sm:pb-0 md:pb-0 xsm:justify-evenly sm:justify-evenly md:justify-center lg:justify-center xl:justify-center 2xl:justify-center items-center relative w-full">
        <div className="flex xsm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center justify-center xsm:px-20 sm:px-20 md:px-20 xl:px-20 lg:px-20 2xl:px-20 w-full">
            <img src={ErrorBG} className="xsm:w-[530.55px] sm:w-[530.55px] md:w-[550.55px] lg:w-[485.55px] xl:w-[485.55px] 2xl:w-[485.55px]" alt="Thank You" />
            <div className="flex flex-col justify-center xsm:mt-12 sm:mt-12 md:mt-12">
                <h2 className="text-[#00B27A] text-left font-poppins xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-extrabold mb-8">Oops! La tua registrazione <span className='lg:w-full xl:w-full 2xl:w-full lg:block xl:block 2xl:block lg:mt-4 xl:mt-4 2xl:mt-4'>non è andata a buon fine!</span></h2>
                <p className="text-[#000000] text-left font-poppins xsm:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-bold mb-8">Controlla i tuoi dati e riprova, oppure contattaci!</p>
                <div className='flex xsm:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center'>
                  <button type="button" onClick={goToRegister} className="flex flex-col w-[315px] h-[50px] text-[#000000] bg-[#DCFFCF] border-black border-[2.96px] font-semibold font-poppins text-lg justify-center items-center text-center xsm:mb-3 sm:mb-3 md:mr-3 lg:mr-3 xl:mr-3 2xl:mr-3">Riprova</button>
                  <button type="button" className="flex flex-col w-[315px] h-[50px] text-[#000000] bg-[#FFFFFF] border-black border-[2.96px] font-semibold font-poppins text-lg justify-center items-center text-center md:ml-3 lg:ml-3 xl:ml-3 2xl:ml-3">
                    <a href="tel:+390500988606">
                      <p className='pop500 text-black md:text-[14px]'>Chiama il team di assistenza</p>
                    </a>
                  </button>
                </div>                
            </div>
        </div>
    </div>

    </>

  )
}

export default Error;