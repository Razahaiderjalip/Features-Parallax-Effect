import React from 'react';
import { useNavigate } from "react-router-dom";
import RestaurantsIcon2 from "../Assets/icon2.png";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {

    const navigate = useNavigate();

    const goToContacts = () => {
        navigate("/contacts");
    };

    const goToPrivacy = () => {
        navigate("/privacypolicy");
    };

    const goToTerms = () => {
        navigate("/termsandconditions");
    };

    return (

        <div className='flex flex-col items-center py-10 bg-[#00B27A] h-fit '>

            <div className='flex flex-row w-[78.5%] px-[40px] sm:w-full md:w-full sm:flex-col items-start gap-10'>

                <div className='flex flex-col w-2/3  gap-y-10 sm:w-full '>

                    <div className='w-[50%] xsm:w-full sm:w-full '>

                        <img src={RestaurantsIcon2} alt="logo" />

                    </div>

                    <p className='text-white text-base md:text-[16px] pop400'>

                        Restaurants Club è un SaaS di AiGot S.r.l. <br />
                        Sede Legale: Via Visconti di Modrone 38 - 20122 Milano <br />
                        Sede Operativa: Via Oberdan 14 - 56127 Pisa

                    </p>

                </div>

                <div className='flex flex-col w-1/3 sm:w-full sm:-order-1 md:pl-4 gap-y-5 '>

                    <div className='flex flex-col h-fit'>
                        <a href="tel:+390500988606">



                            <p className='pop600 text-3xl xmd:text-2xl  md:text-[18px] text-white'>Ufficio vendite</p>
                            <p className='pop600 text-3xl  xmd:text-2xl md:text-[18px] flex flex-row items-center gap-x-2 text-white'> <FaPhoneAlt color="white" size={20} /> 050 0988606 </p>
                        </a>
                    </div>

                    <p className='text-white pop400 text-base md:text-sm'>Disponibile dal Lunedì al Venerdì</p>
                    <p className='text-white pop400 text-base md:text-sm'>Dalle ore 10:00 alle ore 19:00</p>
                    <a href="mailto: info@restaurants.club"><p className='text-white pop400 text-base md:text-sm'>info@restaurants.club</p>
                    </a>

                </div>

            </div>
            
            <p className='text-white pop500 text-lg md:text-[12px] mt-12 sm:my-3 sm:text-sm sm:p-4 text-center'>Codice fiscale, P. IVA: 11498080966 - Capitale Sociale: 110.000€ © 2022 AiGot SRL, tutti i diritti riservati  
            <p className='text-white pop500 text-lg md:text-[12px] mt-2 sm:my-3 sm:text-sm sm:p-4 '> <button onClick={goToPrivacy}><p> - Privacy Policy - </p></button>
                    <button onClick={goToTerms}><p> Termini e Condizioni - </p></button>
                    <a href={require('../Assets/Documents/CodiceEtico.pdf')} target="_blank"><p >- Codice Etico - </p></a> </p> </p>
</div>
       

    )
}

export default Footer
