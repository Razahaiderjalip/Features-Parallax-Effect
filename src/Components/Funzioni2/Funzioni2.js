import React from 'react'

import BottomForm from '../../Reusable/BottomForm'
import ScrollToTop from '../../Reusable/ScrollToTop'

import { useNavigate } from "react-router-dom"

import HerImage from "../../Assets/Keyboard_arrow.svg"
import Funzioni from '../Beta/Funzioni';
import FunzioniMobile from '../Beta/FunzioniMobile';

import { PopupButton } from 'react-calendly';
import Package01 from "../../Assets/Package-01.svg";
import Package02 from "../../Assets/Package-02.svg";
import Package03 from "../../Assets/Package-03.svg";

import Funzioni1 from "../../Assets/Funzioni1.svg";
import Funzioni2 from "../../Assets/Funzioni2.svg";
import Funzioni3 from "../../Assets/Funzioni3.svg";


function Espresso() {

    const navigate = useNavigate()

    return (
        <div className='flex flex-col  '>

            <ScrollToTop />

            <div className='w-full bg-[#CCFFBB80] py-10 gap-y-5  h-fit  mb-[8%] xmd:mb-[20%] sm:mb-[35%] -mt-[5.9%] md:-mt-[9%] sm:-mt-[17%] sm:pt-[18%] flex flex-col pt-[8%]'>

                <div className=' w-[80%] lg:w-[95%] px-[40px] flex flex-col sm:w-full md:w-full xmd:w-full justify-center mx-auto'>
                    <p className='Brevia850 text-5xl md:text-4xl xmd:text-4xl sm:text-3xl text-center text-[#114653] my-8 mx-auto w-[80%] xsm:w-full sm:w-full  md:w-[90%] '>Tutti gli strumenti digitali per creare la tua base clienti fedele </p>
                    <p className=' text-2xl md:text-xl xmd:text-xl sm:text-xl text-center text-[#114653] mb-8  mx-auto w-[80%] xsm:w-full sm:w-full  md:w-[90%] '>In una sola piattaforma tutto ciò che ti serve per far conoscere il tuo ristorante online e trasformare la tua presenza online in una solida base clienti fedele e affezionata a te!</p>
                  
                  
                    <div className='pb-10 md:py-14 bg-[#F6F6F4] flex flex-col w-full mx-auto gap-y-2 relative top-16'>
                        <div className='px-[40px] sm:px-2 sm:w-full sm:flex-col gap-y-5 md:w-full md:px-6 md:flex-col xsm:flex-col  mx-auto flex flex-row gap-x-8 '>

                            <div className='w-1/3 md:w-full sm:w-full xmd:w-full xsm:w-full  mx-auto flex flex-col gap-y-5 '>

                                <div className='h-[350px] sm:h-[200px] md:h-[250px] w-full    flex items-center justify-center  p-4'>
                                    <img src={Package01} className='w-full h-full' alt="" />
                                </div>
                                <p className='Brevia700  not-italic font-bold  text-4xl sm:text-3xl text-center text-[#114653] '>Pacchetto  <br/> “L’Espresso”</p>
                                <p className='pop400    not-italic font-normal text-lg sm:text-lg text-center text-black  mx-auto'>Dai un boost al tuo Delivery: ricevi ordini a domicilio dal tuo sito.
                                    Sempre senza commissioni.</p>
                                    <button className='mx-auto m-5 ' onClick={() => navigate("/espresso")}>
                                    <img src={HerImage} alt="hero" className='' />
                                </button>

                            </div>

                            <div className=' w-1/3 md:w-full sm:w-full xmd:w-full xsm:w-full  mx-auto flex flex-col gap-y-5 '>
                                <div className='h-[350px] sm:h-[200px] md:h-[250px] w-full    flex items-center justify-center  p-4'>
                                    <img src={Package02} className='w-full h-full' alt="" />
                                </div>
                                <p className='Brevia700   not-italic font-bold  text-4xl sm:text-3xl  text-center text-[#114653]   '>Pacchetto <br/> “A Tavola”</p>
                                <p className='pop400 not-italic font-normal  text-lg sm:text-lg text-center text-black  mx-auto'>Riempi i tuoi tavoli con clienti di valore con il modulo prenotazioni evitando i no-show.</p>
                                <button className='mx-auto m-5' onClick={() => navigate("/tavola")}>
                                    <img src={HerImage} alt="hero" className='' />
                                </button>
                            </div>

                            <div className=' w-1/3 md:w-full sm:w-full xmd:w-full xsm:w-full mx-auto flex flex-col gap-y-5 '>
                                <div className='h-[350px] sm:h-[200px] md:h-[250px] w-full  flex items-center justify-center  p-4'>
                                    <img src={Package03} className='w-full h-full' alt="" />
                                </div>
                                <p className='Brevia700   not-italic font-bold  text-4xl sm:text-3xl  text-center text-[#114653]   '>Pacchetto <br/> “Il Viandante” </p>
                                <p className='pop400     not-italic font-normal text-lg sm:text-lg text-center text-black mx-auto'>Attira turisti e locali al tuo ristorante comparendo ai primi posti nelle ricerche su Google</p>
                                <button className='mx-auto m-5' onClick={() => navigate("/viandante")}>
                                    <img src={HerImage} alt="hero" className='' />
                                </button>
                            </div>

                        </div>


                        
                    </div>
                </div>
            </div>

          
            <div className='w-[80%] lg:w-[90%] sm:w-full md:w-full px-[40px] sm:px-0 mx-auto flex flex-col sm:flex-col gap-y-20 h-fit relative '>


            <div className='flex flex-row justify-center mx-auto sm:flex-col-reverse  xsm:flex-col-reverse  md:flex-col-reverse  xmd:flex-col-reverse '>
                <div className='w-2/3 xmd:w-2/3 md:w-full sm:w-full text-left flex flex-col sm:p-5 md:p-10 gap-y-10 p-5 '>

                    <p className='Brevia850 text-6xl sm:text-5xl sm:text-center xsm:text-center  md:text-center text-[#00B27A]'>Attrai</p>
                    <p className='Brevia700 italic text-3xl sm:text-xl sm:text-center xsm:text-center  md:text-center text-black'>Fai conoscere il tuo ristorante online</p>
                    <div className='flex flex-row gap-x-4 items-start w-full'>
                        <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371] ' />
                        <p className='pop500 text-xl sm:text-lg text-black w-[90%]'><span className='pop700'>Sempre ai primi posti su Google</span> : con un sito web ottimizzato e la scheda Google My Business completa sei sempre il primo risultato nelle ricerche </p>
                    </div>
                    <div className='flex flex-row gap-x-4 w-full'>
                        <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl sm:text-lg text-black w-[90%]'>Gestire i <span className='pop700'>Social Media </span>  non è mai stato così <span className='pop700'>semplice </span>: programma i post, utilizza hashtag e descrizioni consigliate. Non hai foto? Te le diamo noi! </p>

                    </div>
                    <div className='flex flex-row gap-x-4 w-full'>
                        <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl sm:text-lg text-black w-[90%]'> <span className='pop700'>Conosci il tuo cliente </span>: con la funzione <span className='pop700'>“Cliente Tipo” </span>analizziamo il tuo storico clienti e troviamo il tuo cliente “primario”, “secondario” e “potenziale!</p>

                    </div>
                    <button className='w-96 h-12  border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center sm:mx-auto xsm:mx-auto  md:mx-auto sm:w-[80%] xsm:w-[80%] md:w-[80%]' >
                        <p onClick={() => { navigate("/test") }} className='pop700 text-black text-xl '>Guardalo in azione</p>
                    </button>


                    <div className='pop600 text-xl border-b-2 border-black text-black sm:text-sm xmd:text-sm w-max sm:mx-auto xsm:mx-auto  md:mx-auto sm:w-[80%] xsm:w-[80%] md:w-[80%]'>
                                  
                        <PopupButton

                            url="https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club"
                            rootElement={document.getElementById("root")}
                            text="Oppure ricevi un consiglio da un nostro esperto"

                        />

                    </div>

                </div>
                <div className='w-1/3 md:w-[80%] h-max mx-auto  justify-center xmd:w-1/3  sm:w-[80%] xsm:w-[80%] flex items-center  p-5  xmd:w-[80%]'>
                    <img src={Funzioni1} alt="hero" className='h-[550px] xmd:h-[400px] md:h-[350px] sm:h-[300px]' />
                </div>
            </div>


            <div className='flex flex-row justify-center mx-auto gap-x-0 sm:flex-col xsm:flex-col  md:flex-col xmd:flex-col'>
                <div className='w-1/3 md:w-[80%] h-max mx-auto  justify-center  sm:w-[80%] xsm:w-[80%] flex items-center p-5 xmd:w-[80%]'>
                    <img src={Funzioni2} alt="hero" className='h-[550px] xmd:h-[400px] md:h-[350px] sm:h-[300px]' />
                </div>
                <div className='w-2/3 xmd:w-2/3 md:w-full sm:w-full text-left flex flex-col sm:p-5 md:p-10  gap-y-10  p-5 xl:pl-16'>

                    <p className='Brevia850 text-6xl sm:text-5xl sm:text-center xsm:text-center  md:text-center text-[#00B27A]' >Converti </p>

                    <p className='Brevia700 italic  text-3xl sm:text-xl text-black sm:text-center xsm:text-center  md:text-center'>Trasforma tutti i “Mi Piace” e le visualizzazioni in clienti</p>
                    <div className='flex flex-row gap-x-4 w-full '>
                        <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl sm:text-lg text-black w-[90%]'>Crea <span className='pop700'>offerte pazzesche</span> e <span className='pop700'>sconti</span> per attirare ordini a domicilio e prenotazioni: dalla spedizione gratuita, alla bibita o il dessert in omaggio!</p>
                    </div>
                    <div className='flex flex-row gap-x-4 w-full'>
                        <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl sm:text-lg text-black w-[90%]'>Con le Campagne Marketing ottimizzate, trasforma i visitatori del sito o i Like sui social in clienti. Per il budget? C’è il <span className='pop700'> credito pubblicitario</span>incluso</p>
                    </div>

                    <div className='flex flex-row gap-x-4 w-full'>
                        <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl sm:text-lg text-black w-[90%]'>Il telefono squilla? <span className='pop700'>Il tuo assistente virtuale 24/7</span>, il chat-bot,  risponde in automatico alle domande più frequenti dei tuoi clienti a qualsiasi ora.</p>
                    </div>

                    <button className='w-96 h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center sm:mx-auto xsm:mx-auto  md:mx-auto sm:w-[80%] xsm:w-[80%] md:w-[80%]' >
                    <p onClick={() => { navigate("/test") }} className='pop600 text-black text-xl '>Guardalo in azione</p>
                    </button>

                    <div className='pop600 text-xl border-b-2 border-black text-black sm:text-sm xmd:text-sm w-max sm:mx-auto xsm:mx-auto  md:mx-auto sm:w-[80%] xsm:w-[80%] md:w-[80%]'>
                                  
                        <PopupButton

                            url="https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club"
                            rootElement={document.getElementById("root")}
                            text="Oppure ricevi un consiglio da un nostro esperto"

                        />

                    </div>
                    
                </div>
            </div>


            <div className='flex flex-row justify-center mx-auto gap-x-0 sm:flex-col-reverse  xsm:flex-col-reverse md:flex-col-reverse xmd:flex-col-reverse m-10'>
                <div className='w-2/3 xmd:w-2/3 md:w-full sm:w-full text-left flex flex-col sm:p-5  md:p-10 gap-y-10  p-5'>
                    <p className='Brevia850 text-6xl sm:text-5xl sm:text-center xsm:text-center  md:text-center text-[#00B27A]'>Fidelizza</p>
                    <p className='Brevia700 italic  text-3xl sm:text-lg text-black sm:text-center xsm:text-center  md:text-center'>Crea una base clienti fedele e affezionata</p>
                    <div className='flex flex-row gap-x-4 w-full'>
                        <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl sm:text-lg text-black w-[90%]'><span className='pop700'>Premia i tuoi affezionati: </span> con la tessera fedeltà del tuo ristorante, incentiva i tuoi clienti a tornare da te con un sistema a punti dedicato.</p>
                    </div>
                    <div className='flex flex-row gap-x-4 w-full'>
                        <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl sm:text-lg text-black w-[90%]'>Un nuovo menù? Una serata a tema?  <span className='pop700'>Racconta le tue novità</span>con le Newsletter ed imposta le mail  <span className='pop700'>automatiche</span>per le recensioni e i promemoria. </p>
                    </div>

                    <div className='flex flex-row gap-x-4 w-full'>
                        <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl sm:text-lg text-black w-[90%]'>Allergie, preferenze, contatti e nomi: con la  <span className='pop700'>lista clienti</span>aggiorna con facilità le informazioni dei protagonisti della tua attività: i tuoi clienti.</p>
                    </div>
                    <button className='w-96 h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center sm:mx-auto xsm:mx-auto  md:mx-auto sm:w-[80%] xsm:w-[80%] md:w-[80%]' >
                    <p onClick={() => { navigate("/test") }} className='pop600 text-black text-xl '>Guardalo in azione</p>
                    </button>

                    <div className='pop600 text-xl border-b-2 border-black text-black sm:text-sm xmd:text-sm w-max sm:mx-auto xsm:mx-auto  md:mx-auto sm:w-[80%] xsm:w-[80%] md:w-[80%]'>
                                  


                    </div>

                </div>
                <div className='w-1/3 md:w-[80%] h-max mx-auto  justify-center xmd:w-1/3  sm:w-[80%] xsm:w-[80%] flex items-center p-5'>
                    <img src={Funzioni3} alt="hero" className='h-[550px] xmd:h-[400px] md:h-[350px] sm:h-[300px]' />
                </div>
            </div>
              </div>

 

        </div>
    )
}

export default Espresso