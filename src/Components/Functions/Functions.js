import React from 'react'
import { useNavigate } from "react-router-dom";
import HerImage from "../../Assets/hero.png"

import Package01 from "../../Assets/Package-01.svg";
import Package02 from "../../Assets/Package-02.svg";
import Package03 from "../../Assets/Package-03.svg";
import AcademyImagae from "../../Assets/Acadmy.png"
import ChefImage from "../../Assets/Chef.png"
import bubble1 from "../../Assets/bubble1.png"
import bubble2 from "../../Assets/bubble2.png"
import bubble3 from "../../Assets/bubble3.png"

import Ivantaggi from './Ivantaggi';
import ScrollToTop from '../../Reusable/ScrollToTop';
import RestaurantsIcon2 from '../../Assets/Rc-Logo-Beta.svg';
import { FaPhoneAlt } from 'react-icons/fa';
import { PopupButton } from 'react-calendly';

function Home() {

    const navigate = useNavigate();
  
    const goToEspresso = () => {
      navigate("/espresso");
    };
  
    const goToTavola = () => {
      navigate("/tavola");
    };
  
    const goToViandante = () => {
      navigate("/viandante");
    };
  
    const goToAcademy = () => {
      navigate("/academy");
    };

    return (

        <>
                <div className="flex flex-col lg:hidden xl:hidden xmd:hidden sticky top-0 bg-white">
    
                    <div className='flex h-max w-full bg-white justify-center items-center mx-auto py-4'>
                     
                        <p className='flex w-full justify-center items-center content-center text-black  text-[0.6em] tracking-wide pop500 uppercase md:pb-6 pb-4'>restano solo 5 posti disponibili per il beta program!</p>
                    
                    </div>
    
                    <div className="flex flex-row z-50 duration-300 transition-all w-full items-center  px-8 justify-evenly  pt-2 pb-8 ">
    
                        <div className=' w-1/3 sm:w-2/3 mx-auto'>
                            <img onClick={() => { navigate("/beta") }} src={RestaurantsIcon2} alt="logo" className='w-full h-full ' />
                        </div>
    
                        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                    </div>
                </div>
    
                <div className="flex flex-col sm:hidden xsm:hidden md:hidden  w-full z-50 mb-12">
                    <div className='h-[50px] w-full bg-[#00B27A] z-50 items-center justify-center flex ' >
                        <p className='text-white text-xl xmd:text-lg   tracking-wide pop500 uppercase'>RESTANO SOLO 5 POSTI DISPONIBILI per il BETA PROGRAM!</p>
                    </div>
                    <div className='flex flex-row items-center justify-evenly z-50 w-full py-1 bg-transparent relative'>
                        <div className=' w-[20%]   mx-auto self-center '>
                            <img onClick={() => { navigate("/beta") }} src={RestaurantsIcon2} alt="logo" className='ml-auto lg:w-[80%] hover:cursor-pointer' />
                        </div>
                        <div className='flex flex-row w-[80%] items-center justify-evenly pt-3 z-50'>
    
                            <p onClick={() => { navigate("/beta") }} className='pop500 hover:cursor-pointer xmd:text-[12px] text-[#00B27A]'>Cos’è Restaurants Club </p> 
                            <p onClick={() => { navigate("/beta") }}  className='pop500 hover:cursor-pointer xmd:text-[12px] text-[#00B27A]'>Cos’è il Programma Beta</p> 
                            <p onClick={() => { navigate("/beta") }}  className='pop500 hover:cursor-pointer xmd:text-[12px] text-[#00B27A]'>Perchè iscrivermi</p> 
    
                            <div>
    
                              <a href="tel:+390500988606">
    
                                <p className='pop700 text-sm  xmd:text-xs flex flex-row items-center gap-x-2 xmd:flex-col text-[#00B27A]'><FaPhoneAlt color="white" /> <span className="Brevia700 ">Contattaci</span>  050 0988606 </p>
                                    
                              </a>
    
                            </div>                        
    
                              <button onClick={() => { navigate("/beta") }}  className='px-6 xmd:px-3 bg-[#DCFFCF] h-10 border-[3px] border-black items-center flex justify-center '>
                               
                                <p className='pop500 text-sm xmd:text-xs'>Iscriviti alla beta</p>
    
                              </button>
    
                            
    
                        </div>
                    </div>
                </div>


        <div className=" w-full flex flex-col gap-y-8">

        <ScrollToTop />

            <div className='flex flex-row justify-center mx-auto gap-x-0 sm:flex-col-reverse'>
                <div className='w-1/2 xmd:w-2/3 md:w-2/3 sm:w-full text-left flex flex-col sm:p-5 p-20 md:p-10 gap-y-6'>

                    <p className='Brevia850 text-6xl sm:text-3xl text-[#00B27A]'>Pacchetto “L’Espresso”</p>
                    <p className='pop700 text-3xl sm:text-xl text-black'>Coinvolgi gli utenti nel Delivery</p>
                    <div className='flex flex-row gap-x-4 items-start w-full'>
                        <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl sm:text-lg text-black w-[90%]'><span className='pop700'>Ricevi più ordini a domicilio</span> direttamente dal TUO sito e dalla tua app: mai più commissioni! Con il Modulo Delivery gestisci gli ordini e il tuo rider.  </p>
                    </div>
                    <div className='flex flex-row gap-x-4 w-full'>
                        <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl sm:text-lg text-black w-[90%]'><span className='pop700'>Stanco di ricevere recensioni negative</span> per lunghi tempi di consegne? L’App Rider aiuta il tuo fattorino a trovare sempre la strada più veloce. </p>

                    </div>
                    <button className='w-[50%] xmd:w-[75%] md:w-[75%] sm:w-[75%] h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center' onClick={goToEspresso}>
                        <p className='pop500 text-black'>Ricevi ordini a domicilio</p>
                    </button>

                    <div className='pop500 text-xmd border-b-2 border-black text-black sm:text-sm xmd:text-sm w-max'>
                                  
                        <PopupButton

                            url="https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club"
                            rootElement={document.getElementById("root")}
                            text="Oppure ricevi un consiglio da un nostro esperto"

                        />

                    </div>

                </div>
                <div className='w-1/3 h-max my-auto justify-center xmd:w-1/3 md:w-1/3 sm:w-full flex items-center'>
                    <img src={Package01} alt="hero" className='h-[550px] xmd:h-[400px] md:h-[350px] sm:h-[300px]' />
                </div>
            </div>


            <div className='flex flex-row justify-center mx-auto gap-x-0 sm:flex-col'>
                <div className='w-1/3 h-max my-auto justify-center xmd:w-1/3 md:w-1/3 sm:w-full flex items-center'>
                    <img src={Package02} alt="hero" className='h-[550px] xmd:h-[400px] md:h-[350px] sm:h-[300px]' />
                </div>
                <div className='w-1/2 xmd:w-2/3 md:w-2/3 sm:w-full text-left flex flex-col sm:p-5 md:p-10 p-20 gap-y-6'>



                    <p className='Brevia850 text-6xl sm:text-3xl text-[#00B27A]' >
                        Pacchetto “A Tavola”
                    </p>

                    <p className='pop700 text-3xl sm:text-xl text-black'>I tuoi tavoli sempre occupati</p>
                    <div className='flex flex-row gap-x-4 w-full'>
                        <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl sm:text-lg text-black w-[90%]'><span className='pop700'>Conosci il tuo cliente tipo</span> e aiutalo a venire al tuo ristorante: con il<span className='pop700'> Modulo di Prenotazioni </span> sul tuo sito è facile per lui e per te. Sempre senza commissioni.</p>
                    </div>
                    <div className='flex flex-row gap-x-4 w-full'>
                        <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl sm:text-lg text-black w-[90%]'><span className='pop700'>Evita le disdette dell’ultimo minuto: </span> grazie al modulo di Notifiche Automatiche, ricorda al tuo cliente la sua prenotazione e<span className='pop700'> chiedi una recensione!</span></p>
                    </div>

                    <button className='w-[50%] xmd:w-[75%] md:w-[75%] sm:w-[75%] h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center' onClick={goToTavola}>
                        <p className='pop500 text-black'>Ottieni più prenotazioni</p>
                    </button>

                    <div className='pop500 text-xmd border-b-2 border-black text-black sm:text-sm xmd:text-sm w-max'>
                                  
                        <PopupButton

                            url="https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club"
                            rootElement={document.getElementById("root")}
                            text="Oppure ricevi un consiglio da un nostro esperto"

                        />

                    </div>
                    
                </div>
            </div>


            <div className='flex flex-row justify-center mx-auto gap-x-0 sm:flex-col-reverse'>
                <div className='w-1/2 xmd:w-2/3 md:w-2/3 sm:w-full text-left flex flex-col sm:p-5 p-20 md:p-10 gap-y-6'>
                    <p className='Brevia850 text-5xl sm:text-2xl text-[#00B27A] w-full'>Pacchetto “Il Viandante”</p>
                    <p className='pop700 text-3xl sm:text-lg text-black'>Porta più persone a conoscere il<br /> tuo locale</p>
                    <div className='flex flex-row gap-x-4 w-full'>
                        <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl sm:text-lg text-black w-[90%]'>Non essere più <span className='pop700'>uno sconosciuto </span>  agli occhi dei passanti: ti scoprono online, <span className='pop700'>ti riconoscono  </span> non appena ti vedono e si fermano da te!</p>
                    </div>
                    <div className='flex flex-row gap-x-4 w-full'>
                        <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl sm:text-lg text-black w-[90%]'>Essere nei <span className='pop700'>primi risultati su Google</span> ti permette di trasformare 1 utente su 4 in cliente. Con il Modulo Google My Business <span className='pop700'>scala le classifiche. </span></p>
                    </div>
                    <button className='w-[50%] sm:w-[75%] h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center' onClick={goToViandante}>
                        <p className='pop500 text-black'>Fatti conoscere</p>
                    </button>

                    <div className='pop500 text-xmd border-b-2 border-black text-black sm:text-sm xmd:text-sm w-max'>
                                  
                        <PopupButton

                            url="https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club"
                            rootElement={document.getElementById("root")}
                            text="Oppure ricevi un consiglio da un nostro esperto"

                        />

                    </div>


                </div>
                <div className='w-1/3 h-max my-auto justify-center xmd:w-1/3 md:w-1/3  sm:w-full flex items-center'>
                    <img src={Package03} alt="hero" className='h-[550px] xmd:h-[400px] md:h-[350px] sm:h-[300px]' />
                </div>
            </div>


            <div className='flex flex-col'>
                <p className='Brevia850 text-6xl md:text-4xl sm:text-2xl text-[#00B27A]  text-center'>La storia del ristorante “Il Canguro”</p>
                <div className='flex flex-row sm:flex-col '>
                    <div className='w-2/3 xmd:w-6/8 md:w-6/8 sm:w-full text-left flex flex-col justify-center items-center sm:gap-y-6 gap-y-12'>
                        <p className='pop500 text-3xl md:text-2xl sm:text-xl w-2/3  text-center text-black'>"Ora è molto più semplice prenotare per i clienti. Le persone riconoscono il mio locale, vedono l'insegna e chiedono subito un tavolo." </p>
                        <p className='pop500 text-xmd sm:text-sm  w-fit lg:ml-auto lg:mr-[10%] text-right text-black'>-Daniele, proprietario de “Il Canguro”</p>
                        <div className='flex flex-row sm:gap-y-2 sm:flex-col items-center gap-x-20'>
                            <div className='flex flex-col items-center gap-y-2'>
                                <p className='text-[#00B27A] Brevia850 text-6xl md:text-4xl'>+ 51 mila</p>
                                <p className='text-black pop500 text-2xl md:text-xl sm:text-xl text-center'>utenti raggiunti tramite <br /> social media</p>
                            </div>
                            <div className='flex flex-col items-center gap-y-2'>
                                <p className='text-[#00B27A] Brevia850 text-6xl md:text-4xl'>+ 48,8%</p>
                                <p className='text-black pop500 text-2xl md:text-xl sm:text-xl text-center'>richieste di indicazioni <br /> stradali su Google</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3 xmd:w-2/5 md:w-2/8 p-20 md:p-0 xmd:p-0 sm:p-5 sm:w-full flex items-center justify-center sm:-order-2'>
                        <img src={ChefImage} alt="hero" className='h-[450px] md:h-[250px] sm:h-[350px]' />
                    </div>
                </div>
            </div>



            <div className=' bg-[#FC6371] py-12 '>
                <div className='flex flex-col items-center justify-center gap-y-8' >
                    <p className='Brevia850 text-6xl md:text-3xl sm:text-3xl text-white  text-center'>E allora? Mettiamo le mani in pasta!</p>

                    <button onClick={() => { navigate("/beta") }} className='w-[25%] sm:w-[50%] h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>
                    
                        <p className='pop500 text-black'>Iscriviti alla Beta</p>

                    </button>

                    <div className='pop500 text-xmd border-b-2 border-black text-black sm:text-sm xmd:text-sm w-max'>
                                  
                        <PopupButton

                            url="https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club"
                            rootElement={document.getElementById("root")}
                            text="Oppure ricevi un consiglio da un nostro esperto"

                        />

                    </div>

                </div>


            </div>



        </div>

        </>
    )
}

export default Home