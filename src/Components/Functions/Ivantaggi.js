import React from 'react'
import { useNavigate } from 'react-router-dom';
import Advantage01 from "../../Assets/Advantage-01.svg";
import Advantage02 from "../../Assets/Advantage-02.svg";
import Advantage03 from "../../Assets/Advantage-03.svg";
import { PopupButton } from 'react-calendly';


function Ivantaggi() {

    const navigate = useNavigate    

    const goToRegister = () => {
        navigate("/register");
    };

    const goToBeta = () => {
        navigate("/beta");
    };

    return (
        <div className="py-7 sm:h-fit sm:gap-y-7 sm:py-8 flex flex-col gap-y-5 items-center  bg-[#F6F6F4] ">
            <p className='text-[#FC6371] Brevia850 text-6xl xmd:text-4xl md:text-4xl sm:text-3xl'>I vantaggi</p>
            <p className='text-black pop500 text-xl xmd:text-lg md:text-lg sm:text-xmd sm:pop700 sm:text-center'>Fai crescere la tua attività grazie agli Strumenti di <br /> Marketing della piattaforma Restaurants Club.</p>


            <div className='grid grid-cols-3 sm:flex sm:flex-col sm:gap-y-3 justify-evenly items-center w-full px-10 xmd:px-5 md:px-5'>
                <div className='flex flex-col sm:w-[95%] items-center justify-center gap-y-6 sm:gap-y-2 md:gap-y-2 '>
                    <img src={Advantage01} alt="hero" className='h-[300px] xmd:h-[150px] sm:h-[200px] md:h-[150px] w-fit ' />
                    <p className='Brevia700 text-4xl xmd:text-3xl text-[#114653]'>Attrai</p>
                    <p className='pop500 text-xl md:text-md text-center text-[#114653]'>Cattura l’attenzione su internet e fai<br /> conoscere la tua attività</p>
                </div>
                <div className='flex flex-col  sm:w-[95%] items-center justify-center gap-y-6 sm:gap-y-2 md:gap-y-2 ' >
                    <img src={Advantage02} alt="hero" className='h-[300px] sm:h-[150px] xmd:h-[200px] md:h-[150px] w-fit ' />
                    <p className='Brevia700 text-4xl text-[#114653]'>Converti</p>
                    <p className='pop500 text-xl text-center text-[#114653]'>Porta nuovi clienti al tuo ristorante <br /> e aumenta il tuo fatturato</p>
                </div>
                <div className='flex flex-col sm:w-[95%] items-center justify-center gap-y-6 sm:gap-y-2 md:gap-y-2 '>
                    <img src={Advantage03} alt="hero" className='h-[300px] sm:h-[150px]  xmd:h-[200px] md:h-[150px] w-fit ' />
                    <p className='Brevia700 text-4xl text-[#114653]'>Fidelizza</p>
                    <p className='pop500 text-xl text-center text-[#114653]'>Crea una base clienti fedele e<br /> affezionata con cui crescere</p>
                </div>
            </div>


            <div className='w-[20%] xmd:w-[40%] md:w-[50%] sm:w-[75%] h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center pop500 text-black'>
                                  
                <PopupButton
                    url="https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club"
                    rootElement={document.getElementById("root")}
                    text="Fai un Tour"
                />

            </div>

            <div className='pop500 text-xmd border-b-2 border-black text-black sm:text-sm xmd:text-sm w-max'>
                        
                <PopupButton

                    url="https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club"
                    rootElement={document.getElementById("root")}
                    text="Oppure ricevi un consiglio da un nostro esperto"

                />

            </div>

        </div>
    )
}

export default Ivantaggi