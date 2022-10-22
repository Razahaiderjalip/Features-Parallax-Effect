import React from 'react';
import { useNavigate } from "react-router-dom";
import RestaurantsIcon2 from "../Assets/icon2.png";
import { FaPhoneAlt } from "react-icons/fa";
import { PopupButton } from 'react-calendly';

import Facebook from "../Assets/facebook.svg";
import Instagram from "../Assets/instagram.svg";
import LinkedIn from "../Assets/linkedin.svg";
import  YouTube from "../Assets/youtube.svg";

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

    const goToCookies = () => {
        navigate("/privacypolicy");
    };

    return (

        <div className='flex flex-col items-center py-14 bg-[#00B27A]  h-fit relative'>


<div className='flex flex-row gap-8 mt-3 mb-10 xsm:hidden sm:hidden  lg:hidden xl:hidden '>




<a href="https://www.facebook.com/restaurantsclubitalia" className='flex flex-row gap-2'><img src={Facebook}  /></a>
<a href="https://www.instagram.com/restaurantsclubitalia/ " className='flex flex-row gap-2'><img src={Instagram}  /></a>
<a href="https://www.youtube.com/channel/UC3wwBpKvOFF2-CGTjZzfC1A" className='flex flex-row gap-2'><img src={YouTube}  /></a>
<a href="https://www.linkedin.com/products/aigot-srl-restaurants-club/" className='flex flex-row gap-2'><img src={LinkedIn}  /></a>

</div>

            <div className='flex flex-row xsm:flex-col sm:flex-col    w-[80%] gap-8'>

                <div className='flex flex-col w-1/4 xmd:w-1/3 xsm:w-full sm:w-full gap-3'>

                    <div className='w-[80%] md:w-full'>

                        <img src={RestaurantsIcon2} alt="logo" />

                    </div>

                    <p className='pop700 text-3xl  xmd:text-2xl md:text-[18px] flex flex-row items-center gap-x-2 text-white my-3'> <FaPhoneAlt color="white" size={20} /> 050 0988606 </p>

                    <p className='text-white pop500 text-sm md:text-sm'>Disponibile dal Lunedì al Venerdì</p>
                    <p className='text-white pop500 text-sm md:text-sm'>Dalle ore 10:00 alle ore 19:00</p>
                    <a href="mailto: info@restaurants.club"><p className='text-white pop500 text-sm md:text-sm'>info@restaurants.club</p></a>


                </div>

                <div className='flex flex-col w-1/4  xmd:w-1/3 xsm:w-full sm:w-full  md:w-full gap-3'>

                    <p className='text-white pop700 text-2xl md:text-xl'>Prodotto e Risorse</p>

                    <button onClick={() => navigate("/funzioni")} >
                        <p className='text-white pop500 text-sm md:text-sm text-left'>Il Prodotto</p>
                    </button>

                    <button onClick={() => navigate("/pricing")} >
                        <p className='text-white pop500 text-sm md:text-sm text-left'>Prezzi</p>
                    </button>

                    {/*<p className='text-white pop500 text-lg md:text-sm'>Academy</p>*/}
                    <button onClick={() => navigate("/faq")} >
                        <p className='text-white pop500 text-sm md:text-sm text-left'>FAQ</p></button>




                    <a href={require('../Assets/Documents/ProgrammaPartner2022.pdf')} target="_blank">
                        <p className='text-white pop500 text-sm md:text-sm text-left'>Programma Partner</p>
                    </a>

                    {/*<button onClick={() => navigate("/")} >

                  <p className='text-white pop500 text-lg md:text-sm text-left'>Scopri quanto sei digitale</p></button>*/}

                </div>

                <div className='flex flex-col w-1/4  xmd:w-1/3 xsm:w-full sm:w-full  md:w-full  gap-3'>

                    <p className='text-white pop700 text-2xl  md:text-xl'>Assistenza</p>

                    <a href="tel:+390500988606">

                        <p className='text-white pop500 text-sm md:text-sm'>Parla con l’assistenza</p>

                    </a>


                    <PopupButton
                        url="https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club"
                        rootElement={document.getElementById("root")}
                        text="Richiedi una demo gratuita"
                        className='text-white pop500 text-sm md:text-sm text-left'
                    />


                    <PopupButton
                        url="https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club"
                        rootElement={document.getElementById("root")}
                        text="Richiedi una consulenza gratuita"
                        className='text-white pop500 text-sm md:text-sm text-left'
                    />


                    <button onClick={goToPrivacy} className="flex justify-start"><p className='text-white pop500 text-sm md:text-sm'>Privacy Policy</p></button>
                    <button onClick={goToTerms} className="flex justify-start"><p className='text-white pop500 text-sm md:text-sm'>Terms and Conditions</p></button>
                    <a href={require('../Assets/Documents/CodiceEtico.pdf')} target="_blank"><p className='text-white pop500 text-sm md:text-sm'>Codice Etico</p></a>
                </div>

                <div className='flex flex-col w-1/4 xmd:hidden md:hidden xsm:w-full sm:w-full  md:w-full gap-3'>

                    <p className='text-white pop700 text-2xl xmd:hidden md:text-xl'>Seguici su</p>


                    <a href="https://www.facebook.com/restaurantsclubitalia" className='flex flex-row gap-2'><img src={Facebook}  /><p className='text-white pop500 text-sm md:text-sm xmd:hidden'> Facebook</p></a>
                    <a href="https://www.instagram.com/restaurantsclubitalia/ " className='flex flex-row gap-2'><img src={Instagram}  /><p className='text-white pop500 text-sm  md:text-sm xmd:hidden'>Instagram</p></a>
                    <a href="https://www.youtube.com/channel/UC3wwBpKvOFF2-CGTjZzfC1A" className='flex flex-row gap-2'><img src={YouTube}  /><p className='text-white pop500 text-sm md:text-sm xmd:hidden'>YouTube</p></a>
                    <a href="https://www.linkedin.com/products/aigot-srl-restaurants-club/" className='flex flex-row gap-2'><img src={LinkedIn}  /><p className='text-white pop500 text-sm md:text-sm xmd:hidden'> LinkedIn</p></a>

                </div>

            </div>

            <p className='text-white w-[80%] text-center pop500 text-[12px] my-2 sm:my-3 sm:text-sm sm:p-4 mt-24'>Codice fiscale, P. IVA: 11498080966 - Capitale Sociale: 110.000€ © 2022 AiGot SRL, tutti i diritti riservati</p>

            <p className='text-white w-[80%] text-center text-[12px] pop500 sm:my-3 sm:text-sm sm:p-4'>Restaurants Club è un SaaS di AiGot S.r.l. Sede Legale: Via Visconti di Modrone 38 - 20122 Milano - Sede Operativa: Via Oberdan 14 - 56127 Pisa</p>
        </div>

    )
}

export default Footer
