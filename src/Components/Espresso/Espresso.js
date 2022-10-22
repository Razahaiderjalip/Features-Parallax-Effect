import React from 'react'


import hero from "../../Assets/espresso/desktop/Espresso-Image-Section.svg"
import Delivery1 from "../../Assets/espresso/desktop/Delivery1.svg"
import Delivery2 from "../../Assets/espresso/desktop/Delivery2.svg"
import Delivery3 from "../../Assets/espresso/desktop/Delivery3.svg"

import heroMobile from "../../Assets/espresso/mobile/heroMobile.svg"
import Delivery1Mobile from "../../Assets/espresso/mobile/delivery1Mobile.svg"
import Delivery2Mobile from "../../Assets/espresso/mobile/delivery2Mobile.svg"

import HerImage from "../../Assets/Keyboard_arrow_down.svg"

import BottomForm from '../../Reusable/BottomForm'
import ScrollToTop from '../../Reusable/ScrollToTop'

import { useNavigate } from "react-router-dom"

import Frame4 from "../../Assets/img1.svg";
import Frame5 from "../../Assets/img_2.svg";
import Frame6 from "../../Assets/img3.svg";


import { PopupButton } from 'react-calendly';


function Espresso() {

    const navigate = useNavigate()

    return (
        <div className='flex flex-col  '>

            <ScrollToTop />

            <div className='w-full bg-[#CCFFBB80] py-10 gap-y-5  h-fit  mb-[8%] xmd:mb-[20%] sm:mb-[35%] -mt-[5.9%] md:-mt-[9%] sm:-mt-[17%] sm:pt-[18%] flex flex-col pt-[8%]'>

                <div className=' w-[78.5%] lg:w-[95%] px-[40px] flex flex-col sm:w-full md:w-full xmd:w-full justify-center mx-auto'>
                    <p className='Brevia850 text-5xl md:text-4xl xmd:text-4xl sm:text-3xl text-center text-[#114653] my-5 xl:w-8/12 lg:w-8/12 mx-auto'>L’Espresso: coinvolgi gli  utenti nel Delivery</p>
                    <p className=' text-2xl md:text-xl xmd:text-xl sm:text-xl text-center text-[#114653] mb-6 xl:w-8/12 lg:w-8/12 mx-auto'>Fare Delivery senza intermediari e inutili commissioni? Sembra un  sogno ad occhi aperti. Comincia ora con il pacchetto l’Espresso!</p>
                    <div className='pb-10 md:pb-5 md:mb-5 md:py-14 bg-[#F6F6F4] flex flex-col w-full mx-auto gap-y-2 relative top-28 md:top-16'>

                        <div className='mx-auto xsm:hidden sm:hidden md:hidden '>

                            <img src={hero} alt="hero" className='h-[500px] md:h-[400px] sm:h-[250px] -mt-[10%]' />

                        </div>

                        <div className='mx-auto  xmd:hidden lg:hidden xl:hidden'>

                            <img src={heroMobile} alt="hero" className='h-[500px] md:h-[400px] sm:h-[250px] --mt-[10%] xsm:-mt-[25%] sm:-mt-[25%] md:-mt-[20%]' />

                        </div>

                        <div className='flex flex-row xsm:flex-col sm:flex-col md:flex-col sm:gap-y-4 my-10 '>

                            <div className='flex flex-col w-1/3 sm:w-full xsm:w-full  md:w-[70%] mx-auto px-8 md:px-2 gap-y-2 mb-20'>
                                <p className='text-center pop700 '>Menù E-Commerce Online</p>
                                <p className='text-center pop500 m-3'>I tuoi piatti disponibili su sito e app, facili da ordinare con un click: sempre facile per te da aggiornare quando fai cambi menù!</p>

                                <button className='mx-auto m-3 '>
                                    <img src={HerImage} alt="hero" className='' />
                                </button>

                            </div>
                            <div className='flex flex-col w-1/3 sm:w-full xsm:w-full  mx-auto md:w-[70%] px-8 md:px-2 gap-y-2 mb-20'>
                                <p className='text-center pop700 '>L’App per i tuoi Rider</p>
                                <p className='text-center pop500 m-3'>Un app per i tuoi rider su cui ricevere ordinazioni e trovare la strada più veloce: basta recensioni negative per piatti freddi!</p>
                                <button className='mx-auto m-3'>
                                    <img src={HerImage} alt="hero" className='' />
                                </button>
                            </div>
                            <div className='flex flex-col w-1/3  sm:w-full xsm:w-full  mx-auto md:w-[70%] px-8 md:px-2 gap-y-2 mb-20'>
                                <p className='text-center pop700 '>Pannello Gestione Delivery</p>
                                <p className='text-center pop500 m-3'>Tieni sotto controllo le richieste d'ordine e le lavorazioni: un pannello di gestione intuitivo, per concentrarci su ciò che conta</p>
                                <button className='mx-auto m-3 '>
                                    <img src={HerImage} alt="hero" className='' />
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col xmd:w-[90%] w-[80%] md:w-[97%] sm:w-[95%] mx-auto gap-y-8'>
                <p className='Brevia850 text-5xl md:text-4xl xmd:text-4xl sm:text-3xl text-center text-[#114653]'>Elimina gli intermediari, gestisci TU il Delivery</p>
                <p className=' text-2xl md:text-xl xmd:text-xl sm:text-xl text-center text-[#114653] xl:w-9/12 lg:w-8/12 mx-auto'>Le consegne a domicilio sono la tua forza ma sei stanco di pagare commissioni?  Comincia adesso a gestire tu il Delivery in autonomia</p>
                
                <div className='flex flex-row xsm:flex-col sm:flex-col md:flex-col gap-y-3 items-bottom items-end w-[88%] mx-auto justify-between xsm:justify-center sm:justify-center md:justify-center '>
                    <div className='flex flex-col gap-y-2 xsm:w-full sm:w-full  md:w-full '>
                        <p className='text-xl xsm:text-center sm:text-center md:text-center md:text-lg pop700 text-[#00B27A] uppercase'>Menù E-Commerce Online</p>
                        <p className='text-2xl xsm:text-center sm:text-center md:text-center md:text-xl Brevia700 italic text-[#114653] md:mx-auto md:my-4 sm:my-4 xsm:my-4 md:w-[70%] xmd:w-[90%] xl:w-[60%] lg:w-[70%]'>Digitalizza il tuo menù e permetti ai tuoi clienti di ordinare online!</p>
                    </div>
                    <div className='xsm:mx-auto sm:mx-auto md:mx-auto '>
                    <button onClick={() => navigate("/pricing")} className=' w-72 md:px-2 sm:px-8 h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>
                        <p className='pop600 text-black text-base'>Dai un Boost al Delivery</p>
                    </button>
                    </div>
                </div>


                <div className='mx-auto xsm:hidden sm:hidden md:hidden w-full flex items-center justify-center'>
                    <img src={Delivery3} alt="" className='h-[500px] md:h-[350px] sm:h-[250px]  ml-[5%] ' />
                </div>

                <div className='mx-auto xmd:hidden lg:hidden xl:hidden w-full flex items-center justify-center'>
                    <img src={Delivery1Mobile} alt="" className='h-[500px] md:h-[350px] sm:h-[250px]  ml-[5%] ' />
                </div>

                <div className='flex flex-row xsm:flex-col sm:flex-col md:flex-col gap-y-3 items-bottom items-end w-[88%] mx-auto justify-between xsm:justify-center sm:justify-center md:justify-center '>
                    <div className='flex flex-col gap-y-2 xsm:w-full sm:w-full  md:w-full'>
                        <p className='text-xl xsm:text-center sm:text-center md:text-center md:text-lg pop700 text-[#00B27A] uppercase'>L’App per i tuoi Rider</p>
                        <p className='text-2xl xsm:text-center sm:text-center md:text-center md:text-xl Brevia700 italic text-[#114653] md:mx-auto md:my-4 sm:my-4 xsm:my-4 md:w-[70%] xmd:w-[90%] xl:w-[70%] lg:w-[75%]'>Stanco di recensioni negative?  Rendi i tuoi rider i tuoi alleati numero 1.</p>
                    </div>

                    <div className='xsm:mx-auto sm:mx-auto md:mx-auto '>
                    <button onClick={() => navigate("/pricing")} className=' w-72  md:px-2  sm:px-8 h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>
                        <p className='pop600 text-black text-base'>Dai un Boost al Delivery</p>
                    </button>
                    </div>
                </div>
                <div className='mx-auto xsm:hidden sm:hidden md:hidden w-full flex items-center justify-center'>
                    <img src={Delivery1} alt="" className='h-[500px] md:h-[350px] sm:h-[250px] ml-[5%]  ' />
                </div>

                <div className='mx-auto xmd:hidden lg:hidden xl:hidden w-full flex items-center justify-center'>
                    <img src={Delivery2Mobile} alt="" className='h-[500px] md:h-[350px] sm:h-[250px]  ml-[5%] ' />
                </div>

                <div className='flex flex-row xsm:flex-col sm:flex-col md:flex-col gap-y-3 items-bottom items-end w-[88%] mx-auto justify-between xsm:justify-center sm:justify-center md:justify-center '>
                    <div className='flex flex-col gap-y-2'>
                        <p className='text-xl xsm:text-center sm:text-center md:text-center md:text-lg pop700 text-[#00B27A] uppercase'>Pannello Gestione Delivery</p>
                        <p className='text-2xl xsm:text-center sm:text-center md:text-center md:text-xl Brevia700 italic text-[#114653] md:mx-auto md:my-4 sm:my-4 xsm:my-4 md:w-[70%] xmd:w-[90%] xl:w-[60%] lg:w-[70%]'>In una sola schermata rider, sconti, nuovi ordini e storico: facile no?</p>
                    </div>


                    <div className='xsm:mx-auto sm:mx-auto md:mx-auto '>
                    <button onClick={() => navigate("/pricing")} className=' w-72 h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>
                        <p className='pop600 text-black text-base'>Dai un Boost al Delivery</p>
                    </button>
                    </div>
                </div>
                <div className='mx-auto w-full flex items-center justify-center'>
                    <img src={Delivery2} alt="" className='h-[500px] md:h-[350px] sm:h-[250px]  ml-[5%]' />
                </div>
            </div>

            <div className='py-20 bg-[#CCFFBB80] flex flex-col gap-y-8 mt-16' >
                <div className=' w-[80%] lg:w-[95%] px-[40px] flex flex-col sm:w-full md:w-full xmd:w-full justify-center mx-auto'>
                    <p className='Brevia850 text-4xl text-center mx-auto text-[#00B17A] my-10 lg:w-[70%] xl:w-[60%] xmd:w-[80%]'>Crea Campagne Ads efficaci e dai un boost al tuo Delivery</p>
                    <p className='text-2xl Brevia700 italic text-[#114653] text-center mb-9'>Con gli Strumenti Marketing ottimizzati è facile!</p>
                    <div className='flex flex-row sm:flex-col sm:gap-y-6'>
                        <div className='flex flex-col w-1/3 md:px-2 sm:w-full px-8 gap-y-2'>
                            <p className='text-center pop700'>Stock Photo e Modelli Grafici ottimizzati</p>
                            <p className='text-center pop500'>Accesso illimitato a Stock Foto e Modelli  grafici già pronti per Social, Email e Ads per lanciare il tuo delivery</p>

                        </div>
                        <div className='flex flex-col w-1/3 md:px-2 sm:w-full px-8 gap-y-2'>
                            <p className='text-center pop700'>Suggeritore di Testi per descrizioni</p>
                            <p className='text-center pop500'>Scrivi Post per i Social, Newsletter e descrizioni per le tue campagne che attirano l’attenzione con il nostro suggeritore di testi </p>

                        </div>
                        <div className='flex flex-col w-1/3 md:px-2 sm:w-full px-8 gap-y-2'>
                            <p className='text-center pop700'>Modulo Sconti e Offerte per il Delivery</p>
                            <p className='text-center pop500'>Crea offerte pazzesche per attirare ordini a domicilio: dalla spedizione gratuita, alla bibita in omaggio, un incentivo all’ordine!</p>

                        </div>


                    </div>
                    <button onClick={() => navigate("/pricing")} className='my-10  w-72  mx-auto h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>
                        <p className='pop600 text-black text-base'>Voglio migliorare il delivery!</p>
                    </button>
                </div>
            </div>





            <div className='py-20 bg-[#F6F6F4]' >
                <div className='w-[80%] lg:w-[98%]  px-[40px] sm:px-2 sm:w-full sm:flex-col gap-y-6 md:w-full md:px-6 md:flex-col    xsm:flex-col  mx-auto flex flex-row gap-x-9'>

                    <div className='w-1/3 md:w-full sm:w-full xmd:w-full xsm:w-full  mx-auto flex flex-col gap-y-5 items-center'>

                        <div className=' w-full flex items-center justify-center  p-6'>
                            <img src={Frame6} className='xsm:w-1/2 sm:w-1/2  md:w-1/2 w-full h-full' alt="" />
                        </div>
                        <p className='Brevia700 not-italic font-bold  text-5xl sm:text-3xl text-center text-[#114653] '>Attrai</p>
                        <p className='pop400    not-italic font-normal text-xl sm:text-lg text-center text-black  mx-auto'>Cattura l’attenzione su internet e fai conoscere la tua attività</p>

                    </div>

                    <div className=' w-1/3 md:w-full sm:w-full xmd:w-full xsm:w-full  mx-auto flex flex-col gap-y-5 '>
                        <div className=' w-full  flex items-center justify-center  p-6'>
                            <img src={Frame5} className='xsm:w-1/2 sm:w-1/2  md:w-1/2 w-full h-full' alt="" />
                        </div>
                        <p className='Brevia700 not-italic font-bold  text-5xl sm:text-3xl  text-center text-[#114653]   '>Converti </p>
                        <p className='pop400 not-italic font-normal  text-xl sm:text-lg text-center text-black  mx-auto'>Porta nuovi clienti al tuo ristorante e aumenta il tuo fatturato</p>

                    </div>

                    <div className=' w-1/3 md:w-full sm:w-full xmd:w-full xsm:w-full mx-auto flex flex-col gap-y-5 '>
                        <div className='w-full flex items-center justify-center  p-6'>
                            <img src={Frame4} className='xsm:w-1/2 sm:w-1/2  md:w-1/2 w-full h-full' alt="" />
                        </div>
                        <p className='Brevia700  not-italic font-bold  text-5xl sm:text-3xl  text-center text-[#114653]   '>Fidelizza </p>
                        <p className='pop400     not-italic font-normal text-xl sm:text-lg text-center text-black mx-auto'>Crea una base clienti fedele e affezionata con cui crescere</p>

                    </div>

                </div>
                <div className=' my-10'>
                    <div className=' mx-auto my-5 w-72 h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center pop600 text-lg text-black'>

                        <PopupButton
                            url="https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club"
                            rootElement={document.getElementById("root")}
                            text="Fai un Tour"
                        />

                    </div>

                    <div className='mx-auto pop600 text-lg border-b-2 border-black text-black sm:text-sm xmd:text-sm w-max'>

                        <PopupButton

                            url="https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club"
                            rootElement={document.getElementById("root")}
                            text="Oppure ricevi un consiglio da un nostro esperto"

                        />

                    </div>
                </div>
            </div>


            <BottomForm title={`Hai ancora dubbi?  Chiedi un parere a un nostro esperto!`} />

        </div>
    )
}

export default Espresso