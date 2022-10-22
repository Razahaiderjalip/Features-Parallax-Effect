import React from 'react'
import { FaPhoneAlt } from "react-icons/fa"
import FAQ from './FAQ'
import Image from "../../Assets/PricingImage.png"
import { PopupButton } from 'react-calendly';

function MainFAQ() {

    return (
        <>
            <div className='flex flex-col gap-y-8 mt-14 sm:mt-4 md:mt-4'>
                <p className='text-[#00B27A] Brevia850 text-[50px] xmd:text-[42px] md:text-[40px] sm:text-[35px] text-center my-2 w-[96%] mx-auto'>Domande frequenti su Restaurants Club</p>


                <div className='w-full h-[240px] bg-[#00B27A] flex flex-col items-center justify-evenly mb-10'>
                    <p className='Brevia700 text-3xl sm:text-2xl text-white text-center'>Indeciso su quale piano scegliere? <br />
                        Chiamaci per una consulenza gratuita</p>
                    <a href="tel:+390500988606">
                        <p className='Brevia850 text-4xl sm:text-3xl text-white text-center flex gap-x-2'><span><FaPhoneAlt /></span> + 39 050 0988606</p>
                    </a>
                </div>
                <FAQ />

                <div className='flex flex-row sm:flex-col-reverse  xl:w-[80%] lg:w-[80%] px-[40px] mx-auto mb-20 '>

                    <div className='w-2/3 md:w-2/3 sm:w-full text-left flex flex-col gap-y-6'>

                        <p className='Brevia850 text-4xl md:text-4xl sm:text-2xl xsm:text-2xl sm:text-center xsm:text-center text-[#00B27A] w-full'>Hai bisogno di un consiglio? Parla con un nostro esperto</p>

                        <p className='Brevia700 italic text-3xl md:text-xl sm:text-lg text-black'>Il nostro supporto clienti</p>

                        <div className='flex flex-row gap-x-4 w-full'>
                            <div className='w-5 h-5 md:h-4 md:w-4  md:mt-2 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                            <p className='pop500 text-xl md:text-lg sm:text-lg text-black w-[90%]'><span className='pop700'>Non sai da dove cominciare? </span>Niente paura! Un nostro esperto di marketing studierà per te un piano efficace con cui raggiungere i tuoi obiettivi.</p>
                        </div>

                        <div className='flex flex-row gap-x-4 w-full'>
                            <div className='w-5 h-5 md:h-4 md:w-4  md:mt-2 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                            <p className='pop500 text-xl md:text-lg sm:text-lg text-black w-[90%]'><span className='pop700'>Siamo sempre con te. </span> Il nostro team di assistenza è a tua disposizione per assicurarti di raggiungere i tuoi obiettivi con la piattaforma Restaurants Club.</p>
                        </div>



                        <PopupButton

                            url="https://calendly.com/restaurants_club/assistenza_restaurants_club?month=2022-10"
                            rootElement={document.getElementById("root")}
                            text="Chiama il team di assistenza"
                            className='pop600 text-black text-lg text-center w-[50%] md:w-[95%] sm:mx-auto sm:w-full h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '
                        />




                        <div className='pop600 text-xmd border-b-2 border-black text-black sm:text-sm xmd:text-sm w-max'>

                            <PopupButton

                                url="https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club"
                                rootElement={document.getElementById("root")}
                                text="Oppure ricevi un consiglio da un nostro esperto"

                            />

                        </div>

                    </div>

                    <div className='w-1/3 xsm:w-[80%] sm:w-[80%] xsm:mx-auto sm:mx-auto m-5  flex items-center justify-center'>
                        <img src={Image} alt="hero" className='' />
                    </div>

                </div>

            </div>

        </>
    )
}

export default MainFAQ