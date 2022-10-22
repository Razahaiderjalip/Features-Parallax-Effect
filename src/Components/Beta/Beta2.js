import React from 'react'
// import { useNavigate } from 'react-router-dom';
import BG from "../../Assets/demoBg.png"
import Countdown from 'react-countdown';
import HerImage from "../../Assets/Hero-Frame-02.svg"
import Package02 from "../../Assets/Package-02.svg";

import ClockImage from "../../Assets/clock.png";
import TwoPapers from './TwoPapers';
import BottomForm from './BottomForm';

import DemoImage1 from "../../Assets/DemoImage1.svg"
import DemoImage2 from "../../Assets/DemoImage2.svg"
import DemoImage3 from "../../Assets/DemoImage3.svg"


import ScrollToTop from '../../Reusable/ScrollToTop';
import ScrollToButton from '../../Reusable/ScrollToButton';
import './beta.css';
// import NavBarBeta from '../../Navigation/NavBarBeta';


import Hscroll from "./HorizontalSlider";
import HscrollMobile from "./HorizontalSliderMobile";
import Funzioni from './Funzioni';
import FunzioniMobile from './FunzioniMobile';


function Beta() {

    // const navigate = useNavigate();

    const renderer = ({ hours, minutes, seconds, completed, days }) => {
        if (completed) {
            // Render a completed state
            return
        } else {
            // Render a countdown
            return (
                <div className='flex flex-row items-center pop700 text-white text-xl mx-auto w-fit '>

                    <div className='flex flex-col gap-y-4 items-center  mr-1 '>
                        <div className='flex  items-center justify-center bg-white border-[3px] border-black w-[72px] h-[72px] pop700 text-black xsm:w-[58px]  sm:w-[58px] xsm:h-[58px]  sm:h-[58px]'>
                            {days}
                        </div>
                        <p>giorni</p>
                    </div>
                    <div className='flex flex-col items-center  h-[72px] '>
                        <p>:</p>
                    </div>
                    <div className='flex flex-col gap-y-4 items-center mx-1'>
                        <div className='flex items-center justify-center bg-white border-[3px] border-black w-[72px] h-[72px] pop700 text-black xsm:w-[58px]  sm:w-[58px] xsm:h-[58px]  sm:h-[58px]'>
                            {hours}
                        </div>
                        <p>ore</p>
                    </div>
                    <div className='flex flex-col items-center  h-[72px] '>
                        <p>:</p>
                    </div>
                    <div className='flex flex-col gap-y-4 items-center mx-1'>
                        <div className='flex items-center justify-center bg-white border-[3px] border-black w-[72px] h-[72px]  pop700 text-black xsm:w-[58px]  sm:w-[58px] xsm:h-[58px]  sm:h-[58px]'>
                            {minutes}
                        </div>
                        <p>minuti</p>
                    </div>
                    <div className='flex flex-col items-center  h-[72px]'>
                        <p>:</p>
                    </div>
                    <div className='flex flex-col gap-y-4 items-center ml-1 xsm:ml-0  sm:ml-0 '>
                        <div className='flex items-center justify-center bg-white border-[3px] border-black w-[72px] h-[72px] pop700 text-black xsm:w-[58px]  sm:w-[58px] xsm:h-[58px]  sm:h-[58px]'>
                            {seconds}
                        </div>
                        <p>secondi</p>
                    </div>
                </div>
            )
        }
    };

    return (

        <>
            {/*--------------------------------------------------------- HEADER ------------------------------------------------------------------*/}
            <ScrollToTop />
            {/*--------------------------------------------------------- 1 € --------------------------------------------------------------*/}
            <div style={{
                backgroundImage: `url(${BG})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} className="-mt-[10%] pt-[6%] pb-7 xsm:-mt-[20%] sm:-mt-[40%] xsm:pt-[20%] sm:pt-[20%] xsm:pb-10 sm:pb-10 md:-mt-[200px] md:pt-[150px] xmd:-mt-[200px] xmd:pt-[150px]">
                <div className='mt-20 w-[67%] lg:w-[90%] sm:w-full items-center md:w-full px-[40px] sm:px-2 mx-auto flex flex-row sm:flex-col sm:mb-10 md:mb-10 md:flex-col gap-x-[18px] mb-[100px] h-fit relative'>
                    <div className="flex flex-col gap-y-6 w-2/3 sm:w-full md:w-full md:p-4 md:mb-8 p-10 sm:p-4 sm:mb-8">
                        <p className='text-white Brevia850 text-left text-6xl sm:text-2xl md:text-center md:text-4xl sm:text-center z-10 '>Prova Restaurants Club per 1 mese a solo</p>
                        <p className='text-white pop400  text-left text-xl sm:text-xl pop400 w-4/5 sm:hidden xsm:hidden md:hidden leading-10'>
                            Prova in anteprima Restaurants Club, la nostra piattaforma di marketing per la ristorazione.
                            Iscrizioni entro il 16 Ottobre a Mezzanotte.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-12  w-1/3 sm:w-full md:w-full lg:w-[40%] ">
                        <div className="p-5  " >
                        <p className='Brevia850 text-[230px] text-[#FFFFFF] leading-[0px] my-20 sm:text-center text-center xmd:text-center'>1€</p>
                        </div>
                        <p className='text-white pop400  text-center text-[14px] pop400  lg:hidden xl:hidden '>
                            Prova in anteprima Restaurants Club, la nostra piattaforma di marketing per la ristorazione.
                            Iscrizioni entro il 16 Ottobre a Mezzanotte.
                        </p>
                        <Countdown daysInHours={true} date={"Thu Oct 16 2022 00:00:00 GMT+0200 (Eastern European Standard Time)"} renderer={renderer} />
                        <div className="flex w-full justify-center  ">
                        <ScrollToButton toId="contactform">
                            <button className='px-20 sm:px-10 mx-auto lg:w-full xsm:w-80 sm:w-80 w-96 h-16 border-[3px] bg-[#00B27A] border-black items-center flex justify-center'>
                              
                                    <p className='pop600 text-xl text-white'>Voglio provarlo!</p>
                               
                            </button>
                            </ScrollToButton>
                        </div>
                    </div>
                </div>
            </div>
            {/*--------------------------------------------------------- POSTI --------------------------------------------------------------------*/}
            <div className="displayid"></div>
            <div className="bg-[#FC6371] flex flex-row  w-full py-20 ">

            <div className=' w-[78.5%] lg:w-[95%] px-[40px] flex flex-row sm:flex-col md:flex-col xmd:flex-col sm:w-full md:w-full xmd:w-full justify-center mx-auto  '>

                    <div className='flex flex-col my-[47px] w-[30%]  sm:w-full md:w-full xmd:w-full lg:w-full'>
                    <p className='Brevia850 text-[230px] text-[#FFFFFF] leading-[0px] my-20 sm:text-center md:text-center xmd:text-center'>30</p>
                    <p className='Brevia700 text-5xl text-[#FFFFFF] ml-3 m-10 italic sm:text-center xsm:text-4xl xsm:ml-0 xsm:w-full sm:text-4xl sm:ml-0 sm:w-full md:text-center xmd:text-center'>posti totali</p>
                    <p className='pop500 text-lg text-[#FFFFFF] sm:text-center md:text-center xmd:text-center'>Affrettati! I primi 10 iscritti riceveranno 150€ di credito per la pubblicità online, i secondi 10 riceveranno 100€ e per gli ultimi 10 posti daremo 50€ di credito. Che aspetti?</p>
                    </div>

                    <div  className='flex flex-col my-[40px] w-[90%] sm:hidden xsm:hidden md:hidden xmd:w-full'>
                    <div  className='flex flex-col w-[95%] lg:w-full mx-auto lg:mx-0 xl:mx-0 lg:ml-10 xl:ml-10 '>
                    <div  className='flex flex-row mb-10 relative '>

                    <div className=' w-1/3 h-[379px] flex flex-col  bg-[#FFFFFF] border-4 border-[#114653]' >
                    <div className=' w-full  flex flex-row ' >
                    <p className='Brevia700 text-5xl  text-[#114653] italic text-center my-12'>1°-10° iscritto</p>
                    </div>
                    <div className='w-full h-[181px] flex flex-col bg-[#114653] py-8 px-5' >

                    <p className='Brevia700 text-5xl lg:text-4xl text-[#FFFFFF] text-center italic'>150€</p>
                    <p className='Brevia700 text-2xl lg:text-lg xl:text-lg text-[#FFFFFF] text-center italic'>in omaggio in credito marketing</p>

                    </div>
                    </div>

                    <div className=' w-1/3 h-[324px] flex flex-col bg-[#FFFFFF] border-4 border-l-0 border-[#114653] mt-[55px]' >
                    <div className=' w-[273px] h-[171px] flex flex-row ' >
                    <p className='Brevia700 text-5xl  text-[#114653] italic text-center my-10'>11°-19° iscritto</p>
                    </div>
                    <div className=' w-[285px] h-[156px] flex flex-col mx-auto bg-[#114653] py-4 px-5' >
                    <p className='Brevia700 text-5xl lg:text-4xl text-[#FFFFFF] text-center italic'>100€</p>
                    <p className='Brevia700 text-2xl lg:text-lg xl:text-lg text-[#FFFFFF] text-center italic'>in omaggio in credito marketing</p>
                    </div>
                    </div>

                    <div className=' w-1/3 h-[279px] flex flex-col  bg-[#FFFFFF] border-4 border-l-0 border-[#114653] mt-[100px]' >
                    <div className=' w-[273px] h-[147px] flex flex-row  ' >
                    <p className='Brevia700 text-5xl  text-[#114653] italic text-center my-8 '>19°-30° iscritto</p>
                    </div>
                    <div className=' w-full h-[124px] flex flex-col  bg-[#114653] py-2 px-5' >
                    <p className='Brevia700 text-5xl lg:text-4xl text-[#FFFFFF] text-center italic'>50€</p>
                    <p className='Brevia700 text-2xl lg:text-lg  xl:text-lg text-[#FFFFFF] text-center italic'>in omaggio in credito marketing</p>
                    </div>
                    </div>

                    </div>




                        <ScrollToButton toId="contactform">

                            <button className='px-10 sm:px-10 w-96 h-16 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>

                                <p className='pop600 text-xl text-black'>Non perdere l'occasione!</p>

                            </button>

                        </ScrollToButton>





                    </div>
                    </div>

                    <div  className='flex flex-col my-[47px] w-[70%] sm:w-full md:w-full lg:hidden xl:hidden xmd:hidden '>
                    <div  className='flex flex-col w-[95%] mx-auto'>
                    <div  className='flex flex-col gap-y-10  mb-20 '>

                    <div className=' w-full flex flex-col  bg-[#FFFFFF] border-4 border-[#114653]' >
                    <div className=' w-full  flex flex-row py-6 px-3 ' >
                    <p className='Brevia700 text-3xl text-[#114653] italic '>1°-10° iscritto</p>
                    </div>
                    <div className='w-full flex flex-col bg-[#114653] py-6 px-3' >

                    <p className='Brevia700 text-3xl text-[#FFFFFF]  italic'>150€</p>
                    <p className='Brevia700 text-xs text-[#FFFFFF]  italic'>in omaggio in credito marketing</p>

                    </div>
                    </div>
                    <div className=' w-full  flex flex-col bg-[#FFFFFF] border-4  border-[#114653] ' >
                    <div className=' w-full flex flex-row py-6 px-3' >
                    <p className='Brevia700 text-3xl text-[#114653] italic text-center'>11°-19° iscritto</p>
                    </div>
                    <div className=' w-full  flex flex-col  bg-[#114653] py-6 px-3' >
                    <p className='Brevia700 text-3xl text-[#FFFFFF]  italic'>100€</p>
                    <p className='Brevia700 text-xs text-[#FFFFFF]  italic'>in omaggio in credito marketing</p>
                    </div>
                    </div>
                    <div className=' w-full flex flex-col  bg-[#FFFFFF] border-4  border-[#114653] ' >
                    <div className=' w-full flex flex-row py-6 px-3 ' >
                    <p className='Brevia700 text-3xl text-[#114653] italic '>19°-30° iscritto</p>
                    </div>
                    <div className=' w-full flex flex-col  bg-[#114653] py-6 px-3 ' >
                    <p className='Brevia700 text-3xl text-[#FFFFFF]  italic'>50€</p>
                    <p className='Brevia700 text-xs text-[#FFFFFF]  italic'>in omaggio in credito marketing</p>
                    </div>
                    </div>
                    </div>




                        <ScrollToButton toId="contactform">

                            <button className='px-20 sm:px-10 w-full h-16 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>

                                <p className='pop600 text-xl text-black'>Non perdere l'occasione!</p>

                            </button>

                        </ScrollToButton>





                    </div>
                    </div>

            </div>
            </div>

            {/*--------------------------------------------------------- RC --------------------------------------------------------------*/}
            <div id="wirc" className="displayid"></div>
            <div className=' w-[78.5%] xmd:w-[90%] sm:w-full md:w-full px-[40px] py-10 pb-5 sm:flex-col-reverse md:flex-col-reverse md:px-8  sm:px-4 flex flex-row justify-center mx-auto gap-x-2 bg-white items-center'>
                <div className='w-[58%] sm:w-full md:w-full  text-left flex flex-col  gap-y-6 '>
                    <p className='Brevia850 normal text-5xl sm:text-4xl  text-[#00B27A] sm:text-center md:text-center xsm:text-center'>Cos’è Restaurants Club</p>
                    <p className='Brevia700 italic text-4xl  sm:text-3xl   text-[#114653] sm:text-center md:text-center xsm:text-center'>L'unica piattaforma di marketing creata per la ristorazione </p>
                    <p className='pop400 normal text-xl sm:text-lg     text-black sm:text-center md:text-center xsm:text-center'>Con un solo servizio crea in automatico il tuo nuovo Sito e App, raggiungi i tuoi clienti su Social Media e Google e gestisci senza intermediari Delivery e Prenotazioni online.</p>
                    <ScrollToButton toId="contactform">
                        <button className='px-20 sm:px-10 sm:mx-auto md:mx-auto xsm:mx-auto xmd:mx-auto w-96 h-16 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center xsm:w-full  sm:w-full md:w-full xmd:w-full'>
                            <p className='pop600 text-black  sm:text-lg text-xl'>Voglio provarlo!</p></button>
                        </ScrollToButton>
                </div>
                <div className='w-[40.5%] flex items-center justify-center   sm:w-full md:w-full'>
                    <img src={HerImage} className=' md:max-h-[400px] max-h-[600px] md:mx-auto' alt="" />
                </div>
            </div>


            <div className=' w-[78.5%] lg:w-[90%] xmd:w-[90%] sm:w-full md:w-full px-[40px]  py-5 pb-24 sm:flex-col-reverse md:flex-col-reverse md:px-8  sm:px-4 flex flex-row-reverse justify-center mx-auto gap-x-2 bg-white items-center'>
                <div className='w-[58%] sm:w-full md:w-full  text-left flex flex-col  gap-y-6 '>
                    <p className='Brevia850 normal text-5xl sm:text-4xl  text-[#00B27A] sm:text-center md:text-center xsm:text-center'>Cos’è l'accesso anticipato</p>
                    <p className='Brevia700 italic text-4xl  sm:text-3xl    text-[#114653] sm:text-center md:text-center xsm:text-center'>Iscrizioni entro il 16 Ottobre</p>
                    <p className='pop400 normal text-xl sm:text-lg     text-black sm:text-center md:text-center xsm:text-center'>Un mese in cui testare le funzionalità di Restaurants Club a solo 1€ in anteprima . Disponibile per tutti i ristoranti in Italia dal 17 di Ottobre, a pagamento. Tu provalo a 1€!</p>

                        <ScrollToButton toId="contactform">
                        <button className='px-20 sm:px-10 sm:mx-auto md:mx-auto xsm:mx-auto xmd:mx-auto w-96 h-16 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center xsm:w-full  sm:w-full md:w-full xmd:w-full'>
                            <p className='pop600 text-black  sm:text-lg text-xl'>Voglio provarlo!</p></button>
                        </ScrollToButton>

                </div>
                <div className='w-[40.5%] flex items-center justify-center   sm:w-full md:w-full'>
                    <img src={Package02} className=' md:max-h-[400px] max-h-[600px] md:mx-auto' alt="" />
                </div>
            </div>
            {/*--------------------------------------------------------- SCROLL --------------------------------------------------------------*/}

            <div
                style={{ backgroundImage: `url(${BG})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                className="  pt-[6%] pb-7 ">
                <div className=' xsm:hidden sm:hidden md:hidden xmd:hidden'><Hscroll  /></div>

                <div className='lg:hidden xl:hidden'><HscrollMobile /></div>
            </div>
            {/*---------------------------------------------------------- FUNZIONI ------------------------------------------------------------------*/}
            <div id="wibp" className="displayid"></div>
            <div className='w-[78.5%] lg:w-[90%] sm:w-full md:w-full px-[40px] sm:px-0 mx-auto flex flex-col sm:flex-col sm:mb-10 my-24  h-fit relative'>
                <p className='Brevia850 normal text-5xl sm:text-3xl md:text-4xl text-[#114653] text-center'>Quali sono le funzioni di Restaurants Club?</p>
                <div className='xsm:hidden sm:hidden  md:hidden xmd:hidden'><Funzioni /></div>
                <div className='lg:hidden xl:hidden '><FunzioniMobile /></div>
            </div>

            {/*--------------------------------------------------------- Vantaggi --------------------------------------------------------------*/}
            <div className=' w-[78.5%] lg:w-[90%] sm:w-full md:w-full px-[40px]  mx-auto flex flex-row  pb-[40px] pt-3  xmd:w-[90%]'>
                <div className="py-7 sm:h-fit sm:gap-y-7 sm:py-8 flex flex-col gap-y-5 items-center bg-white xsm:mx-auto sm:mx-auto w-full ">
                    <p className='text-[#FC6371] Brevia850 text-5xl xmd:text-4xl md:text-4xl sm:text-3xl text-center'>I vantaggi dell'accesso anticipato</p>
                    <p className='text-black w-[60%] pop700 text-2xl text-center xmd:text-lg md:text-lg sm:text-sm sm:pop700 sm:text-center'>Come funziona l'accesso anticipato e perché è un'occasione che non puoi perdere</p>
                    <div className='grid grid-cols-3 xmd:gap-x-2 md:gap-x-2 gap-x-10 sm:flex sm:flex-col sm:gap-y-3 justify-evenly items-center w-full px-10 py-10 xmd:px-5 md:px-5'>

                        <div className='flex flex-col  sm:w-[97%] md:w-[100%] xmd:w-[100%]   items-center justify-center gap-y-6 sm:gap-y-2 md:gap-y-2 ' >
                            <img src={DemoImage1} alt="hero" className='h-[300px] sm:h-[150px] xmd:h-[200px] md:h-[150px] w-[90%] ' />
                            <p className='Brevia700 text-4xl text-[#114653]'>Iscriviti</p>
                            <p className='pop500 text-base text-center text-[#114653] sm:hidden xsm:hidden md:hidden xmd:hidden'>Iscriviti con il modulo che trovi a<br /> fondo pagina o chiamandoci</p>
                            <p className='pop500 text-base text-center text-[#114653] xmd:hidden lg:hidden xl:hidden'>Iscriviti con il modulo che trovi a fondo pagina o chiamandoci</p>
                        </div>

                        <div className='flex flex-col  sm:w-[97%] md:w-[100%] xmd:w-[100%]   items-center justify-center gap-y-6 sm:gap-y-2 md:gap-y-2 ' >
                            <img src={DemoImage2} alt="hero" className='h-[300px] sm:h-[150px] xmd:h-[200px] md:h-[150px] w-[90%] ' />
                            <p className='Brevia700 text-4xl text-[#114653]'>Esplora </p>
                            <p className='pop500 text-base text-center text-[#114653] sm:hidden xsm:hidden md:hidden'>Esplora le funzionalità che ti offre<br /> Restaurants Club per un mese</p>
                            <p className='pop500 text-base text-center text-[#114653] xmd:hidden lg:hidden xl:hidden'>Esplora le funzionalità che ti offre Restaurants Club per un mese</p>
                        </div>
                        <div className='flex flex-col  sm:w-[97%] md:w-[100%] xmd:w-[100%]  items-center justify-center gap-y-6 sm:gap-y-2 md:gap-y-2 ' >
                            <img src={DemoImage3} alt="hero" className='h-[300px] sm:h-[150px] xmd:h-[200px] md:h-[150px] w-[90%]' />
                            <p className='Brevia700 text-4xl text-[#114653]'>Dicci la tua </p>
                            <p className='pop500 text-base text-center text-[#114653] sm:hidden xsm:hidden md:hidden'>Dicci cosa ne pensi, dove si può migliorare e cosa invece hai amato</p>
                            <p className='pop500 text-base text-center text-[#114653] xmd:hidden lg:hidden xl:hidden'>Dicci cosa ne pensi, dove si può migliorare e cosa invece hai amato</p>
                        </div>
                    </div>
                    <div className="flex w-full justify-center">
                        <ScrollToButton toId="contactform">
                            <button className='px-20 sm:px-10 w-96 h-16 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center sm:w-full xsm:w-full md:w-full '>
                                <p className='pop600 text-black text-lg text-center'>Voglio provarlo!</p>
                            </button>
                        </ScrollToButton>
                    </div>
                </div>
            </div>

            {/*--------------------------------------------------------- Scontrino --------------------------------------------------------------*/}
            <div className='mx-auto'>
                <TwoPapers />
            </div>
            {/*--------------------------------------------------------- COUNTDPWN (2) -------------------------------------------------------------*/}
            <div className="displayid"></div>
            <div className="bg-[#FC6371] flex flex-row sm:p-2 h-fit  ">
            <div className='w-[78.5%] lg:w-[90%] sm:w-full md:w-full px-[40px] sm:px-10 xsm:px-10 sm:my-10 xsm:my-10 mx-auto flex flex-row sm:flex-col sm:mb-10 my-24  h-fit relative '>
                <div className="displayid"></div>
                <div className='w-2/3 md:w-full sm:w-full gap-y-6 justify-evenly  flex flex-col '>


                    <p className='text-white Brevia850 text-6xl leading-[5rem] xmd:text-3xl md:text-3xl sm:text-3xl w-full sm:pr-4'>Cosa stai aspettando? <br></br>Manca poco alla chiusura delle iscrizioni!</p>
                    <div className='w-fit'>
                        <Countdown daysInHours={true} date={"Thu Oct 16 2022 00:00:00 GMT+0200 (Eastern European Standard Time)"} renderer={renderer} />
                    </div>

                    <div className="flex w-full justify-start">

                    <ScrollToButton toId="contactform">

<button className='px-20 sm:px-10 xsm:w-full sm:w-full w-96 h-16 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>

    <p className='pop600 text-xl text-black'>Voglio Provarlo!</p>

</button>

</ScrollToButton>

                    </div>



                </div>

                <div className='w-1/3 max-h-[550px] flex items-center justify-center sm:hidden xsm:hidden md:hidden xmd:hidden'>


                    <img src={ClockImage} alt="" className='h-full lg:h-[80%] xl:h-[80%]' />
                </div>
                </div>
            </div>
            {/*--------------------------------------------------------- Form --------------------------------------------------------------*/}
            <div id='contactform' ></div>
            <BottomForm title={`Compila il form per essere contattato per l'ingresso anticipato!`} />
        </>
    )
}

export default Beta
