import React from 'react'



import hero from "../../Assets/viandante/desktop/Viandante-Image-Section.svg"
import Viandante1 from "../../Assets/viandante/desktop/ViandanteImage1.svg"
import Viandante2 from "../../Assets/viandante/desktop/ViandanteImage2.svg"
import Viandante3 from "../../Assets/viandante/desktop/ViandanteImage3.svg"

import BottomForm from '../../Reusable/BottomForm'
import ScrollToTop from '../../Reusable/ScrollToTop'
import { useNavigate } from "react-router-dom"
import Frame4 from "../../Assets/img1.svg";
import Frame5 from "../../Assets/img_2.svg";
import Frame6 from "../../Assets/img3.svg";
import { PopupButton } from 'react-calendly';

import HerImage from "../../Assets/Keyboard_arrow_down.svg";

function Viandante() {

    const navigate = useNavigate()

    return (
        <div className='flex flex-col  '>

            <ScrollToTop />

            <div className='w-full bg-[#6392FF80] py-10 gap-y-5 h-fit  mb-[8%] xmd:mb-[20%] sm:mb-[35%]  -mt-[5.9%] md:-mt-[9%] sm:-mt-[17%]  sm:pt-[18%] flex flex-col pt-[8%]'>
            <div className=' w-[78.5%] lg:w-[95%] px-[40px] flex flex-col sm:w-full md:w-full xmd:w-full justify-center mx-auto'>
                
                <p className='Brevia850 text-5xl md:text-4xl xmd:text-4xl sm:text-3xl text-center text-[#114653] my-5 xl:w-8/12 lg:w-8/12 mx-auto'>Il Viandante: porta più  persone al tuo locale</p>
                <p className=' text-2xl md:text-xl xmd:text-xl sm:text-xl text-center text-[#114653] my-5'>Riempire il locale ora è più facile: i tuoi clienti ti scoprono prima online e poi ti vengono a cercare. Ti riconoscono e vengono subito da te!  </p>
                <div className='pb-10 md:py-14 bg-[#F6F6F4] flex flex-col w-full mx-auto gap-y-2 relative top-28 sm:top-10 md:top-16'>
                    <div className=' mx-auto'>
                        <img src={hero} alt="hero" className='h-[450px] xmd:h-[320px] lg:h-[400px] md:h-[300px] sm:h-[250px] -mt-[10%] xsm:-mt-[25%] sm:-mt-[25%] md:-mt-[20%]' />

                    </div>

            
                    <div className='flex flex-row xsm:flex-col sm:flex-col md:flex-col sm:gap-y-4 my-10'>

                        <div className='flex flex-col w-1/3 sm:w-full xsm:w-full  md:w-[70%] mx-auto px-8 md:px-2 gap-y-2 mb-20'>
                            <p className='text-center pop700 '>Ottimizzazione SEO Sito Web</p>
                            <p className='text-center pop500 m-3'>Inseriamo parole chiave, codice avanzato  e dati approfonditi sul tuo sito per aiutarti ad  essere trovato tra i primi risultati</p>
                            <button className='mx-auto m-3'>
                                    <img src={HerImage} alt="hero" className='' />
                                </button>
                        </div>
                        <div className='flex flex-col w-1/3 sm:w-full xsm:w-full  md:w-[70%] mx-auto px-8 md:px-2 gap-y-2 mb-20'>
                            <p className='text-center pop700 '>Google My Business Avanzato</p>
                            <p className='text-center pop500 m-3'>Miglioramenti automatici importanti sulla tua scheda attività per aumentare anche i risultati da ricerche indirette.</p>
                            <button className='mx-auto m-3'>
                                    <img src={HerImage} alt="hero" className='' />
                                </button>
                        </div>
                        <div className='flex flex-col w-1/3 sm:w-full xsm:w-full  md:w-[70%] mx-auto px-8 md:px-2 gap-y-2 mb-20'>
                            <p className='text-center pop700 '>Analisi della concorrenza locale</p>
                            <p className='text-center pop500 m-3'>Confrontiamo i risultati della tua attività con il posizionamento digitale dei ristoranti e dei locali della tua zona.  </p>
                            <button className='mx-auto m-3'>
                                    <img src={HerImage} alt="hero" className='' />
                                </button>
                        </div>


                    </div>
                </div>
            </div></div>
            <div className='flex flex-col  xmd:w-[90%] w-[80%] md:w-[97%] sm:w-[95%] mx-auto gap-y-8'>
                <p className='Brevia850 text-5xl md:text-4xl xmd:text-4xl sm:text-3xl text-center text-[#114653]'>Raggiungi i tuoi clienti. Attraine di nuovi. </p>
                <p className=' text-2xl md:text-xl xmd:text-xl sm:text-xl text-center text-[#114653] xl:w-9/12 lg:w-8/12 mx-auto'>I tuoi clienti sono su Google e Social Media: raggiungili ora con Restaurants Club. Un Click, 5 minuti e sei online. </p>
               
                <div className='flex flex-row xsm:flex-col sm:flex-col md:flex-col gap-y-3 items-bottom items-end w-[88%] mx-auto justify-between xsm:justify-center sm:justify-center md:justify-center'>
                    <div className='flex flex-col gap-y-2 xsm:w-full sm:w-full  md:w-full'>
                        <p className='text-xl xsm:text-center sm:text-center md:text-center md:text-lg pop700 text-[#00B27A] uppercase'>OTTIMIZZAZIONE SEO SITO WEB</p>
                        <p className='text-2xl xsm:text-center sm:text-center md:text-center md:text-xl Brevia700 italic text-[#114653] md:mx-auto md:my-4 sm:my-4 xsm:my-4 md:w-[70%] xmd:w-[90%] xl:w-[70%] lg:w-[75%]'>Fatti trovare subito su Google e  trasforma i tuoi visitatori in clienti</p>
                    </div>
                    <div className='xsm:mx-auto sm:mx-auto md:mx-auto '>
                    <button onClick={() => navigate("/pricing")}  className='w-72  md:px-2  sm:px-8 h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center  '>
                        <p className='pop600 text-black text-base'>Voglio attirare clienti</p>
                    </button></div>
                </div>
                <div className='mx-auto w-full'>
                    <img src={Viandante1} alt="" className='h-[500px] md:h-[350px] sm:h-[250px] mx-auto ' />
                </div>
                <div className='flex flex-row xsm:flex-col sm:flex-col md:flex-col gap-y-3 items-bottom items-end w-[88%] mx-auto justify-between xsm:justify-center sm:justify-center md:justify-center'>
                    <div className='flex flex-col gap-y-2 xsm:w-full sm:w-full  md:w-full'>
                        <p className='text-xl xsm:text-center sm:text-center md:text-center md:text-lg pop700 text-[#00B27A] uppercase'>GOOGLE MY BUSINESS AVANZATO</p>
                        <p className='text-2xl xsm:text-center sm:text-center md:text-center md:text-xl Brevia700 italic text-[#114653] md:mx-auto md:my-4 sm:my-4 xsm:my-4 md:w-[70%] xmd:w-[90%] xl:w-[70%] lg:w-[75%]'>1/5 dei tuoi visualizzatori su Google  My Business diventa tuo cliente! </p>
                    </div>
                    <div className='xsm:mx-auto sm:mx-auto md:mx-auto '>
                    <button onClick={() => navigate("/pricing")}  className='w-72  md:px-2  sm:px-8 h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center  '>
                        <p className='pop600 text-black text-base'>Voglio attirare clienti</p>
                    </button></div>
                </div>
                <div className='mx-auto w-full'>
                    <img src={Viandante2} alt="" className='h-[500px] md:h-[350px] sm:h-[250px] mx-auto ' />
                </div>
                <div className='flex flex-row xsm:flex-col sm:flex-col md:flex-col gap-y-3 items-bottom items-end w-[88%] mx-auto justify-between xsm:justify-center sm:justify-center md:justify-center'>
                    <div className='flex flex-col gap-y-2 xsm:w-full sm:w-full  md:w-full'>
                        <p className='text-xl xsm:text-center sm:text-center md:text-center md:text-lg pop700 text-[#00B27A] uppercase'>ANALISI CONCORRENZA LOCALE</p>
                        <p className='text-2xl xsm:text-center sm:text-center md:text-center md:text-xl Brevia700 italic text-[#114653] md:mx-auto md:my-4 sm:my-4 xsm:my-4 md:w-[70%] xmd:w-[90%] xl:w-[70%] lg:w-[75%]'>Diventa il numero uno del quartiere:  studia e vinci la concorrenza</p>
                   
                   
                    </div>
                    <div className='xsm:mx-auto sm:mx-auto md:mx-auto '>
                    <button onClick={() => navigate("/pricing")}  className='w-72  md:px-2  sm:px-8 h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center  '>
                        <p className='pop600 text-black text-base'>Voglio attirare clienti</p>
                    </button></div>
                </div>
                <div className='mx-auto w-full'>
                    <img src={Viandante3} alt="" className='h-[500px] md:h-[350px] sm:h-[250px] mx-auto ' />
                </div>
            </div>

            <div className='py-20 bg-[#6392FF80] flex flex-col gap-y-8 mt-16' >
            <div className=' w-[80%] lg:w-[95%] px-[40px] flex flex-col sm:w-full md:w-full xmd:w-full justify-center mx-auto'>
                <p className='Brevia850 text-4xl text-center text-[#114653] my-6'>Non essere più invisibile tra la folla che passa!</p>
                <p className='text-2xl Brevia700 italic text-[#114653] text-center lg:w-[70%] xl:w-[60%] xmd:w-[80%] w-full md:w-full sm:w-full mx-auto mb-6'>Ti scoprono online, ti riconoscono per strada non appena ti vedono e si fermano subito da te: facile così, no?</p>
                <div className='flex flex-row sm:flex-col items-center justify-center sm:gap-y-6'>
                    <div className='flex flex-col w-1/3 md:px-2 sm:w-full xmd:w-full md:w-full px-8 gap-y-2'>
                        <p className='text-center pop700'>Stock Photo e Modelli Grafici ottimizzati</p>
                        <p className='text-center pop500'>Accesso illimitato a Stock Foto e Modelli grafici già pronti per Social, Email e Ads per lanciare attirare traffico locale e turisti</p>

                    </div>
                    <div className='flex flex-col w-1/3 md:px-2 sm:w-full xmd:w-full md:w-full px-8 gap-y-2'>
                        <p className='text-center pop700'>Suggeritore di Testi per descrizioni</p>
                        <p className='text-center pop500'>Scrivi Post per i Social, Newsletter e descrizioni per le tue campagne che attirano l’attenzione con il nostro suggeritore di testi </p>

                    </div>

                    <div className='flex flex-col w-1/3 md:px-2 sm:w-full xmd:w-full md:w-full px-8 gap-y-2'>
                        <p className='text-center pop700'>Posizionamento Google ottimizzato</p>
                        <p className='text-center pop500'>Ottimizziamo per te le parole chiave associate al tuo locale per permetterti di essere tra i primi risultati su Google </p>

                    </div>

                </div>
                <button onClick={() => navigate("/register")}  className='my-10  w-72  md:px-10 sm:px-10 mx-auto h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center'>
                    <p className='pop600 text-black text-base'>Voglio attirare clienti</p>
                </button>
                </div>
            </div>


            <div className='py-20 bg-[#F6F6F4]' >
            <div className='w-[80%] lg:w-[98%]  px-[40px] sm:px-2 sm:w-full sm:flex-col gap-y-6 md:w-full md:px-6 md:flex-col    xsm:flex-col  mx-auto flex flex-row gap-x-9'>

                <div className='w-1/3 md:w-full sm:w-full xmd:w-full xsm:w-full  mx-auto flex flex-col gap-y-5 items-center'>

                <div className=' w-full  flex items-center justify-center  p-6'>
                        <img src={Frame6} className='xsm:w-1/2 sm:w-1/2  md:w-1/2 w-full h-full' alt="" />
                    </div>
                    <p className='Brevia700 not-italic font-bold  text-5xl sm:text-3xl text-center text-[#114653] '>Attrai</p>
                    <p className='pop400 not-italic font-normal text-xl sm:text-lg text-center text-black  mx-auto'>Cattura l’attenzione su internet e fai conoscere la tua attività</p>

                </div>

                <div className=' w-1/3 md:w-full sm:w-full xmd:w-full xsm:w-full  mx-auto flex flex-col gap-y-5 '>
                    <div className=' w-full flex items-center justify-center  p-6'>
                        <img src={Frame5} className=' xsm:w-1/2 sm:w-1/2  md:w-1/2 w-full h-full' alt="" />
                    </div>
                    <p className='Brevia700 not-italic font-bold  text-5xl sm:text-3xl  text-center text-[#114653]   '>Converti </p>
                    <p className='pop400 not-italic font-normal  text-xl sm:text-lg text-center text-black  mx-auto'>Porta nuovi clienti al tuo ristorante e aumenta il tuo fatturato</p>

                </div>

                <div className=' w-1/3 md:w-full sm:w-full xmd:w-full xsm:w-full mx-auto flex flex-col gap-y-5 '>
                    <div className=' w-full  flex items-center justify-center  p-6'>
                        <img src={Frame4} className=' xsm:w-1/2 sm:w-1/2  md:w-1/2w-full h-full' alt="" />
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

export default Viandante