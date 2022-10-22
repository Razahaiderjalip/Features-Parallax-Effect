import React from 'react'
// import { useNavigate } from 'react-router-dom';
import BG from "../../Assets/demoBg.png"
import Countdown from 'react-countdown';
import HerImage from "../../Assets/Hero-Frame-02.svg"
// import Package02 from "../../Assets/Package-02.svg";

import ClockImage from "../../Assets/clock.png";  
import Funzioni from './Funzioni';
import FunzioniMobile from './FunzioniMobile';
import BottomForm from './BottomForm';

import Hscroll from "./HorizontalSlider";
import HscrollMobile from "./HorizontalSliderMobile";


import ScrollToTop from '../../Reusable/ScrollToTop';
import ScrollToButton from '../../Reusable/ScrollToButton';
import './beta.css';

// import { PopupButton } from 'react-calendly';

import Frame4 from "../Home/Img/Frame4.svg";
import Frame5 from "../Home/Img/Frame5.svg";
import Frame6 from "../Home/Img/Frame6.svg";


function Beta() {

    // const navigate = useNavigate();

    const renderer = ({ hours, minutes, seconds, completed, days }) => {
        if (completed) {
            // Render a completed state
            return
        } else {
            // Render a countdown
            return (
                <div className='flex flex-row items-center pop700 text-black text-xl mx-auto w-fit xsm:text-lg sm:text-lg'>

                    <div className='flex flex-col gap-y-4 items-center  mr-1 '>
                        <div className='flex  items-center justify-center bg-white border-[3px] border-black w-[72px] h-[72px] pop700 text-black xsm:w-[58px]  sm:w-[58px] xsm:h-[58px]  sm:h-[58px]'>
                            {days}
                        </div>
                        <p>giorni</p>
                    </div>
                    <div className='flex flex-col items-center  h-[72px] '>
<p>:</p>
</div>
                    <div className='flex flex-col gap-y-4 items-center mx-1 '>
                        <div className='flex items-center justify-center bg-white border-[3px] border-black w-[72px] h-[72px] pop700 text-black xsm:w-[58px]  sm:w-[58px] xsm:h-[58px]  sm:h-[58px]'>
                            {hours}
                        </div>
                        <p>ore</p>
                    </div>
                    <div className='flex flex-col items-center  h-[72px] '>
<p>:</p>
</div>
                    <div className='flex flex-col gap-y-4 items-center mx-1 '>
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


 {/*--------------------------------------------------------- BOX SCROLL --------------------------------------------------------------*/}
            <div style={{
                backgroundImage: `url(${BG})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} className=" -mt-[10%] pt-[6%] pb-7 xsm:-mt-[20%] sm:-mt-[40%] xsm:pt-[20%] sm:pt-[20%] xsm:pb-10 sm:pb-10 md:-mt-[200px] md:pt-[150px] xmd:-mt-[200px] xmd:pt-[150px]">
      <div className=' xsm:hidden sm:hidden md:hidden xmd:hidden'><Hscroll  /></div>

      <div className='lg:hidden xl:hidden mt-5'><HscrollMobile /></div>
            </div>


 {/*--------------------------------------------------------- COUNTDPWN (1) -----------------------------------------------------------*/}
            <div className="displayid"></div>
            <div className=' w-full  bg-[#F6F6F4]' >
            <div className=' w-[78.5%] lg:w-[90%] px-[40px] py-[80px] xsm:flex-col sm:flex-col md:flex-col xmd:flex-col flex flex-row justify-center mx-auto  sm:w-full md:w-full xmd:w-full '>

                <div className='w-[66%] xsm:w-full sm:w-full md:w-full xmd:w-full text-left flex flex-col gap-y-6 '>

                    <p className='Brevia850 normal font-black text-5xl w-[90%] xsm:hidden sm:hidden  md:hidden xmd:hidden  text-[#114653] leading-[65px] sm:flex-col md:flex-col xmd:flex-col'>Prova Restaurants Club per 1 mese a solo 1€ </p>
                    <p className='xsm:mx-auto sm:mx-auto md:mx-auto xmd:mx-auto Brevia850 normal font-black text-2xl w-[90%] text-center text-[#114653] lg:hidden xl:hidden xl:hidden '>Prova Restaurants Club per 1 mese a solo  </p>
                    <p className='xsm:mx-auto sm:mx-auto md:mx-auto xmd:mx-auto Brevia850 normal font-black text-9xl w-[90%] text-center text-[#114653] lg:hidden xl:hidden xl:hidden '> 1€ </p>


                    <p className='pop400 text-base text-[#303030] leading-7 w-[90%] sm:text-center md:text-center xmd:text-center xsm:mx-auto sm:mx-auto md:mx-auto xmd:mx-auto'>
                        Prova in anteprima Restaurants Club, la nostra piattaforma di marketing per la ristorazione.
                        Iscrizioni entro il <span className='pop700 text-base text-[#303030] leading-7'> 16 Ottobre </span> a Mezzanotte.<br></br>
                        Per accedere alla prova, lascia il tuo contatto e verrai ricontattato per una chiamata introduttiva.
                        Scopri tutte le funzioni a un prezzo lancio inimitabile.</p>


                </div>

                <div className='w-1/3 h-max my-auto flex flex-col justify-center xsm:w-full sm:w-full md:w-full xmd:w-full xsm:my-10 sm:my-10 md:my-10 xmd:my-10 xsm:py-10 sm:py-10 md:py-10 xmd:py-10  items-center'>
                    <Countdown daysInHours={true} date={"Thu Oct 16 2022 00:00:00 GMT+0200 (Eastern European Standard Time)"} renderer={renderer} />

                    <div className="flex w-full justify-center">

                    <ScrollToButton toId="contactform">
                        <button className='px-20 sm:px-10 mx-auto my-3 md:px-12 md:w-fit w-96 h-16 border-[3px] bg-[#00B27A] border-black items-center flex justify-center xsm:w-full sm:w-full xsm:my-10 sm:my-10'>

                          

                                <p className='pop600 text-xl text-white'>Voglio Provarlo!</p>

                            

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

{/*---------------------------------------------------------- COS'è RC ------------------------------------------------------------------*/}
            <div id="wirc" className="displayid"></div>
            <div className='w-[78.5%] lg:w-[90%]  px-[40px] sm:flex-col-reverse md:flex-col-reverse xmd:w-[93%] xmd:my-20 xsm:my-20 sm:my-20 md:my-20 xsm:flex-col-reverse  lg:my-10 md:px-8 sm:px-4 flex flex-row justify-center mx-auto gap-x-2  items-center'>

                <div className='w-[58%] sm:w-full md:w-full xmd:w-full  text-left flex flex-col  gap-y-6 '>

                    <p className='Brevia850 normal text-5xl xsm:Brevia700 sm:Brevia700  sm:text-4xl text-[#00B27A] sm:text-center md:text-center xsm:text-center'>Cos’è Restaurants Club</p>
                    <p className='Brevia700 italic text-4xl sm:text-3xl text-[#114653] sm:text-center md:text-center xsm:text-center'>L'unica piattaforma di marketing creata per la ristorazione </p>
                    <p className='pop400 normal text-xl sm:text-lg      text-black sm:text-center md:text-center xsm:text-center'>Con un solo servizio crea in automatico il tuo nuovo Sito e App, raggiungi i tuoi clienti su Social Media e Google e gestisci senza intermediari Delivery e Prenotazioni online.</p>

                    <ScrollToButton toId="contactform">

<button className='px-20 w-96 h-16 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center xsm:w-full  sm:w-full md:w-full xmd:w-full '>

    <p className='pop600 text-xl text-black'>Voglio Provarlo!</p>

</button>

</ScrollToButton>



                </div>

                <div className='w-[40.5%] flex items-center justify-center   sm:w-full md:w-full'>
                    <img src={HerImage} className=' md:max-h-[400px] max-h-[600px] md:mx-auto' alt="" />
                </div>
            </div>

{/*---------------------------------------------------------- 3 IMG ---------------------------------------------------------------------*/}
            <div className="displayid"></div>
            <div className='w-[80%] lg:w-[98%]  px-[40px] sm:px-2 sm:w-full sm:flex-col gap-y-6 md:w-full md:px-6 md:flex-col  xmd:flex-col  xsm:flex-col  mx-auto flex flex-row gap-x-9'>

                <div className='w-1/3 md:w-full sm:w-full xmd:w-full xsm:w-full  mx-auto flex flex-col gap-y-5 items-center'>

                <div className='h-[350px] sm:h-[200px] md:h-[250px] w-full    flex items-center justify-center  p-6'>
                        <img src={Frame6} className='w-full h-full' alt="" />
                    </div>
                    <p className='Brevia700 not-italic font-bold  text-5xl sm:text-3xl text-center text-[#114653] '>Attrai<br /> interessati</p>
                    <p className='pop400    not-italic font-normal text-xl sm:text-lg text-center text-black  mx-auto'>Cattura l’attenzione su internet e<br /> fai conoscere la tua attività</p>

                </div>

                <div className=' w-1/3 md:w-full sm:w-full xmd:w-full xsm:w-full  mx-auto flex flex-col gap-y-5 '>
                    <div className='h-[350px] sm:h-[200px] md:h-[250px] w-full    flex items-center justify-center  p-6'>
                        <img src={Frame5} className='w-full h-full' alt="" />
                    </div>
                    <p className='Brevia700 not-italic font-bold  text-5xl sm:text-3xl  text-center text-[#114653]   '>Converti i <br /> visitatori web </p>
                    <p className='pop400 not-italic font-normal  text-xl sm:text-lg text-center text-black  mx-auto'>Porta nuovi clienti al tuo ristorante e <br />aumenta il tuo fatturato</p>

                </div>

                <div className=' w-1/3 md:w-full sm:w-full xmd:w-full xsm:w-full mx-auto flex flex-col gap-y-5 '>
                    <div className='h-[350px] sm:h-[200px] md:h-[250px] w-full  flex items-center justify-center  p-6'>
                        <img src={Frame4} className='w-full h-full' alt="" />
                    </div>
                    <p className='Brevia700  not-italic font-bold  text-5xl sm:text-3xl  text-center text-[#114653]   '>Fidelizza i <br /> tuoi clienti</p>
                    <p className='pop400     not-italic font-normal text-xl sm:text-lg text-center text-black mx-auto'>Crea una base clienti fedele e<br /> affezionata con cui crescere </p>

                </div>

            </div>

{/*---------------------------------------------------------- FUNZIONI ------------------------------------------------------------------*/}
            <div id="wibp" className="displayid"></div>
            <div className='w-[78.5%] lg:w-[90%]  sm:w-full md:w-full px-[40px]  mx-auto flex flex-col sm:flex-col sm:mb-10 my-24  h-fit relative sm:px-10 xsm:px-10'>
                <p className='Brevia850 normal text-5xl sm:text-3xl md:text-4xl text-[#114653] text-center'>Quali sono le funzioni di Restaurants Club?</p>
                <div className=' xsm:hidden sm:hidden  md:hidden xmd:hidden'><Funzioni /></div>
                <div className='lg:hidden xl:hidden '><FunzioniMobile /></div>
            </div>


{/*--------------------------------------------------------- COUNTDPWN (2) -------------------------------------------------------------*/}
            <div className="displayid"></div>
            <div className="bg-[#FC6371] flex flex-row sm:p-2 h-fit  ">
            <div className='w-[78.5%] lg:w-[90%]  sm:w-full md:w-full px-[40px] sm:px-10 xsm:px-10 sm:my-10 xsm:my-10 mx-auto flex flex-row sm:flex-col sm:mb-10 my-24  h-fit relative '>
                <div className="displayid"></div>
                <div className='w-2/3 md:w-full sm:w-full gap-y-6 justify-evenly  flex flex-col '>


                    <p className='text-white Brevia850 text-6xl leading-[5rem] xmd:text-3xl md:text-3xl sm:text-3xl w-full sm:pr-4'>Cosa stai aspettando?<br></br> Manca poco alla chiusura delle iscrizioni!</p>
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


{/*--------------------------------------------------------- FORM ----------------------------------------------------------------------*/}
            <div id="contactform" className="displayid"></div>
            <BottomForm title={`Compila il form per essere contattato per il programma Beta!`} />
        </>
    )
}

export default Beta
