import React from "react";
import { useRef, useEffect, useState } from 'react';

import { useNavigate } from "react-router-dom";
import HerImage from "../../Assets/hero.png";
import Ivantaggi from "./Ivantaggi";
import { PopupButton } from "react-calendly";
import ScrollToTop from "../../Reusable/ScrollToTop";

import Image2 from "./Img/Keyboard_arrow.svg";
import ImageIg1 from "./Img/Ig7.png";
import ImageIg2 from "./Img/Ig2.png";
import ImageIg3 from "./Img/Ig1.png";

import Frame1 from "./Img/Frame1.svg";
import Frame2 from "./Img/Frame2.svg";
import Frame3 from "./Img/Frame3.svg";

import Funzioni from "../Beta/Funzioni";
import FunzioniMobile from "../Beta/FunzioniMobile";

import Frame4 from "../../Assets/img1.svg";
import Frame5 from "../../Assets/converti.svg";
import Frame6 from "../../Assets/img3.svg";

import Form from "./Form";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ScrollToButton from "../../Reusable/ScrollToButton";
import { useInView } from "react-intersection-observer";
import { alignProperty } from "@mui/material/styles/cssUtils";

function Home() {
  
  const { ref: myref, inView: myElementIsVisible } = useInView();
  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();
  const { ref, inView, entry } = useInView();
  const navigate = useNavigate();
  
  return (
    <div className=' w-full flex flex-col gap-y-8'>
      <ScrollToTop />
     
      <div className=' flex flex-col '>
        {/*------------------------------------------------------ (1) ----------------------------------------------------------------*/}
        <div
          className='w-[80%] px-[40px] mx-auto xsm:w-full sm:w-full  md:w-full  xmd:w-full items-center   
                flex flex-row sm:flex-col xsm:flex-col  sm:mb-10  mb-[60px] gap-x-12  h-fit relative '
        >
          <div
            className='w-1/2  sm:w-full xsm:w-full md:w-full  xmd:w-full
                                   text-left flex flex-col 
                                   sm:p-5 xmd:p-10 md:p-5 gap-y-[40px] xsm:gap-y-[20px] sm:gap-y-[20px] mx-auto  
                                   items-left justify-center'
          >
            <p className='Brevia850 text-5xl font-black not-italic leading-[60px] xmd:text-3xl md:text-3xl sm:text-3xl xsm:text-3xl  sm:text-center xsm:text-center text-[#00B27A]'>
              Raggiungi i tuoi clienti. Attraine di nuovi.{" "}
            </p>

            <p className='pop500 text-lg xmd:text-lg sm:text-xmd text-black sm:text-center xsm:text-center '>
              La piattaforma per la ristorazione che ti aiuta a creare
              e gestire una solida base clienti online{" "}
            </p>

            <div className='flex flex-row w-[71%] sm:flex-col xsm:flex-col md:flex-col sm:w-full xsm:w-full md:w-full gap-y-3   gap-x-[15px] xsm:mx-auto sm:mx-auto  '>
              <ScrollToButton>
                <button
                  onClick={() => navigate("/pretest")}
                  className='w-[254px] h-[52px] border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center pop500 text-black xsm:mx-auto sm:mx-auto'
                >
                  <p className='pop600 text-black text-lg text-center'>
                    Vedi la demo
                  </p>
                </button>
              </ScrollToButton>
              <ScrollToButton toId='wibp'>
                <button className='w-[254px] h-[52px] border-[3px] bg-[#ffffff] border-black items-center flex justify-center pop500 text-black xsm:mx-auto sm:mx-auto'>
                  <p className='pop600 text-black text-lg text-center'>
                    Scopri tutte le Funzioni
                  </p>
                </button>
              </ScrollToButton>
            </div>
          </div>

          <div className='h-fit xsm:w-full sm:w-full p-3 m-10 flex items-center justify-center w-1/2 '>
            <img
              src={HerImage}
              alt='hero'
              className='h-full xl:w-[95%] lg:w-[95%] '
            />
          </div>
        </div>

        {/*------------------------------------------------------ (2) ---------------------------------------------------------------------*/}
        <Ivantaggi />

        {/* (SCROLL) ---------------------------- DEVE SCROLLARE COME SU https://ramp.com/ ---------------------------------------------------------------------------------------------------------------- */}

        <div id='wibx' className={"flex flex-col " + `${myElementIsVisible ? "alignProperty" : ''}` + `${magicSectionIsVisible ? " last" : ''}`}>
          <div className=' w-full flex justify-center bg-[#FFFFFF] xsm:h-fit sm:h-fit  md:h-fit  xmd:h-fit  sm:pb-14  md:pb-14  xmd:pb-14'>
            <div className=' w-[78.5%] px-[40px] xsm:w-full sm:w-full  md:w-full  flex flex-col justify-center mx-auto '>
              <div className='w-full flex flex-row xsm:flex-col sm:flex-col  md:flex-col    '>
                <div className='w-1/3 xsm:mx-auto sm:mx-auto  md:mx-auto sm:pt-16   md:pt-16  xmd:pt-16'>
                  <div data-aos="fade-right" data-aos-duration="3000" className='sticky-picture w-full flex items-center justify-center'>
                    <img src={Frame6} className='onep' />
                    <img src={Frame5} className='twop' />
                    <img src={Frame4} className='threep' />
                  </div>
                </div>

                <div className='w-2/3 xsm:w-full sm:w-full  md:w-full  xmd:w-full p-16 px-20 sm:p-0'>
                  <div className='' data-aos="fade-left" data-aos-duration="3000">
                
                    <div className="inner-scroll-div" >
                    <p className='Brevia700 text-4xl text-black xsm:text-center sm:text-center md:text-center'>
                      Attrai
                    </p>
                    <div className='flex flex-col gap-x-4 w-full my-4'>
                      <p className='pop400 text-base text-black w-full xsm:text-center sm:text-center md:text-center'>
                        Cattura l’attenzione su internet e fai
                        conoscere la tua attività. Stai sempre ai{" "}
                        <span className='pop700'> primi posti</span>{" "}
                        su Google: con un{" "}
                        <span className='pop700'>sito web </span>{" "}
                        ottimizzato e la scheda{" "}
                        <span className='pop700'>
                          Google MyBusiness{" "}
                        </span>{" "}
                        completa fatti trovare da locali e turisti.
                      </p>
                    </div>
                    

                    <div className=' md:flex md:justify-center  xsm:flex xsm:justify-center  sm:flex sm:justify-center'>
                      <PopupButton
                        url='https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club'
                        rootElement={document.getElementById("root")}
                        text='Fai un Tour del prodotto'
                        className='pop400 text-xl text-black xsm:text-center sm:text-center md:text-center xmd:text-center'
                      />{" "}
                      <ArrowForwardIcon className='m-2' />{" "}
                    </div>
                    </div>
                    <div ref={myref} className="inner-scroll-div">
                    <p className='Brevia700 text-4xl text-white xsm:text-center sm:text-center md:text-center'>
                      Converti
                    </p>
                    <div className='flex flex-col gap-x-4 w-full my-4'>
                      <p className='pop400 text-base  text-white w-full xsm:text-center sm:text-center md:text-center md:w-[70%]  md:mx-auto'>
                        Trasforma tutti i “Mi Piace” sui social media
                        e le visualizzazioni del tuo sito in clienti
                        con le Campagne Marketing ottimizzate. Per il
                        budget marketing? C’è il{" "}
                        <span className='pop700'>
                          {" "}
                          credito pubblicitario
                        </span>{" "}
                        incluso!
                      </p>
                    </div>

                    <div className='flex flex-row md:flex md:justify-center  xsm:flex xsm:justify-center  sm:flex sm:justify-center'>
                      <PopupButton
                        url='https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club'
                        rootElement={document.getElementById("root")}
                        text='Fai un Tour del prodotto'
                        className='pop400 text-xl text-white xsm:text-center sm:text-center md:text-center  '
                      />{" "}
                      <svg
                        className='m-3'
                        width='18'
                        height='18'
                        viewBox='0 0 11 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5.33333 0L4.39333 0.915905L8.11333 4.54705H0V5.8462H8.11333L4.39333 9.47735L5.33333 10.3933L10.6667 5.19663L5.33333 0Z'
                          fill='white'
                        />
                      </svg>
                    </div>
                    </div>
                    <div ref={magicSectionRef} className="inner-scroll-div">
                    <p className='Brevia700 text-4xl text-black xsm:text-center sm:text-center md:text-center'>
                      Fidelizza
                    </p>
                    <div className='flex flex-col gap-x-4 w-full my-4'>
                      <p className='pop400 text-base md:text-lg sm:text-lg text-black w-full xsm:text-center sm:text-center md:text-center'>
                        Crea una base{" "}
                        <span className='pop700'>
                          clienti fedele e affezionata{" "}
                        </span>
                        con cui crescere: invita i tuoi clienti a
                        tornare da te co{" "}
                        <span className='pop700'>Newsletter</span>{" "}
                        personalizzate, inviti ad eventi e promozioni
                        speciali con la tua{" "}
                        <span className='pop700'>carta Fedeltà.</span>
                      </p>
                    </div>

                    <div className=' md:flex md:justify-center  xsm:flex xsm:justify-center  sm:flex sm:justify-center'>
                      <PopupButton
                        url='https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club'
                        rootElement={document.getElementById("root")}
                        text='Fai un Tour del prodotto'
                        className='pop400 text-xl text-black xsm:text-center sm:text-center md:text-center '
                      />{" "}
                      <ArrowForwardIcon className='m-2' />
                    </div>
                    </div>
                    
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className=' w-full flex justify-center bg-[#114653] h-[550px] xsm:h-fit sm:h-fit  md:h-fit  xmd:h-fit  sm:pb-14  md:pb-14  xmd:pb-14 '>
            <div className=' w-[78.5%] px-[40px] xsm:w-full sm:w-full  md:w-full flex flex-col justify-center mx-auto '>
              <div className='w-full flex flex-row xsm:flex-col sm:flex-col  md:flex-col   '>
                <div className='w-1/3 xsm:mx-auto sm:mx-auto  md:mx-auto    sm:pt-16   md:pt-16  xmd:pt-16 '>
                  <div data-aos="fade-right" data-aos-duration="3000" className=' w-full flex items-center justify-center'>
                    <img src={Frame5} className='' />
                  </div>
                </div>

                <div className='w-2/3 xsm:w-full sm:w-full  md:w-full  xmd:w-full p-16 px-20  sm:p-0   md:p-0 '>
                  <div data-aos="fade-left" data-aos-duration="3000" className=''>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=' w-full flex justify-center bg-[#F5F5F5] h-[550px] xsm:h-fit sm:h-fit  md:h-fit  xmd:h-fit   sm:pb-14  md:pb-14  xmd:pb-14 '>
            <div className=' w-[78.5%] px-[40px] xsm:w-full sm:w-full  md:w-full  flex flex-col justify-center mx-auto '>
              <div className='w-full flex flex-row xsm:flex-col sm:flex-col  md:flex-col  '>
                <div className='w-1/3 xsm:mx-auto sm:mx-auto  md:mx-auto sm:pb-10  md:pb-10  xmd:pb-10 sm:pt-16   md:pt-16  xmd:pt-16'>
                  <div data-aos="fade-right" data-aos-duration="3000" className=' w-full  flex items-center justify-center'>
                    <img src={Frame4} className='' />
                  </div>
                </div>

                <div className='w-2/3 xsm:w-full sm:w-full  md:w-full  xmd:w-full p-16 px-20  sm:p-0  md:sm:p-0 xmd:sm:p-0 sm:px-0 md:sm:px-0 xmd:sm:px-0'>
                  <div data-aos="fade-left" data-aos-duration="3000" className=''>
                   
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/*-----------------------------------------------(Funzioni)---------------------------------*/}

        <div id='wibp' className='displayid'></div>
        <div className='w-[78.5%] lg:w-[90%]  sm:w-full md:w-full px-[40px]  mx-auto flex flex-col sm:flex-col sm:mb-10 my-24  h-fit relative sm:px-10 xsm:px-10'>
          <p className='Brevia850 normal text-5xl sm:text-3xl md:text-4xl text-[#114653] text-center'>
            Quali sono le funzioni di Restaurants Club?
          </p>
          <div className=' xsm:hidden sm:hidden  md:hidden xmd:hidden'>
            <Funzioni />
          </div>
          <div className='lg:hidden xl:hidden '>
            <FunzioniMobile />
          </div>
        </div>

        {/*-----------------------------------------------(MENU LATERALE - Mancano le immagini )---------------------------------*/}

        {/*} <div className='w-[78.5%] xsm:w-full sm:w-full  md:w-full  xmd:w-full px-[40px] pb-16 flex flex-col justify-center mx-auto gap-x-0  bg-[#ffffff] h-fit relative'>

                    <div className='w-full flex flex-col mt-24 '>
                        <p className='Brevia850 text-6xl xsm:text-3xl sm:text-3xl md:text-3xl xmd:text-3xl text-center text-black'>Ottieni Sito Web, App e Dominio con una procedura d’iscrizione da 5 minuti</p>
                    </div>

                 
                       
                            <Block01 />
                    


                </div>

                <div className='w-[78.5%] xsm:w-full sm:w-full  md:w-full  xmd:w-full px-[40px] pb-16 flex flex-col justify-center mx-auto gap-x-0  bg-[#ffffff] h-fit relative'>

                    <div className='w-full flex flex-col mt-24 '>
                        <p className='Brevia850 text-6xl xsm:text-3xl sm:text-3xl md:text-3xl xmd:text-3xl text-center text-black'>Gestisci orari di apertura, aggiorna il tuo Menù e ricevi prenotazioni ed ordini</p>
                    </div>

                 
                       
                            <Block02 />
                    


                </div>
                <div className='w-[78.5%] xsm:w-full sm:w-full  md:w-full  xmd:w-full px-[40px] pb-16 flex flex-col justify-center mx-auto gap-x-0  bg-[#ffffff] h-fit relative'>

                    <div className='w-full flex flex-col mt-24 '>
                        <p className='Brevia850 text-6xl xsm:text-3xl sm:text-3xl md:text-3xl xmd:text-3xl text-center text-black'>I tuoi Clienti sono su Google e Social: raggiungili e costruisci una base fedele</p>
                    </div>

                 
                       
                            <Block03 />
                    


                </div>*/}

        {/*--------------------------------------------------(LA storia del tuo ristorante ) ----------------------*/}

        <div className=' w-[78.5%] xsm:w-full sm:w-full  md:w-full  xmd:w-full  px-[40px] mx-auto flex flex-col   h-fit relative pt-9 pb-20'>
          <div className='w-full xsm:w-full sm:w-full  md:w-full  xmd:w-full mx-auto pb-6 '>
            <p className='Brevia850 text-5xl xsm:text-4xl sm:text-4xl md:text-4xl xmd:text-4xl text-[#00B27A] text-center font-black '>
              La storia del ristorante “Il Canguro”
            </p>
          </div>

          <div className='flex flex-row sm:flex-col my-2'>
            <div className=' '>
              <div className='flex flex-col items-center w-8/12 xsm:w-full sm:w-full  md:w-full  xmd:w-full mx-auto  pb-6 '>
                <p className='pop500 text-xl text-center text-black font-medium leading-9'>
                  "Ora è molto più semplice prenotare per i clienti.
                  Le persone riconoscono il mio locale, vedono
                  l'insegna e chiedono subito un tavolo."{" "}
                </p>
              </div>

              <div className='flex flex-col items-center w-8/12 mx-auto '>
                <p className='pop500 text-lg italic text-center text-black font-medium leading-9'>
                  -Daniele, proprietario de “Il Canguro”
                </p>
              </div>

              <div className='w-full flex flex-row xsm:flex-col sm:flex-col gap-x-[20px] md:gap-x-[10px] '>
                <div className='w-1/3 xsm:w-full sm:w-full md:w-full xmd:w-full flex flex-col items-center gap-y-2 '>
                  <div className=' w-full flex items-center justify-center'>
                    <img
                      src={ImageIg1}
                      className='pt-20 pb-10'
                      alt=''
                    />
                  </div>
                  <p className='text-[#00B27A] Brevia850 text-6xl md:text-3xl'>
                    + 51 mila
                  </p>
                  <p className='text-black pop500 text-base  text-center mt-5 w-[83%] md:w-[90%]'>
                    utenti raggiunti tramite social media in meno di
                    due mesi
                  </p>
                </div>
                <div className='w-1/3 xsm:w-full sm:w-full md:w-full xmd:w-full flex flex-col items-center gap-y-2 '>
                  <div className=' w-full flex items-center justify-center'>
                    <img
                      src={ImageIg2}
                      className='pt-20 pb-10'
                      alt=''
                    />
                  </div>
                  <p className='text-[#00B27A] Brevia850 text-6xl md:text-3xl'>
                    + 48,8%
                  </p>
                  <p className='text-black pop500 text-base  text-center mt-5 w-[83%] md:w-[90%]'>
                    richieste di indicazioni stradali su Google in
                    meno di due mesi
                  </p>
                </div>
                <div className='w-1/3 xsm:w-full sm:w-full md:w-full xmd:w-full flex flex-col items-center gap-y-2 '>
                  <div className=' w-full flex items-center justify-center'>
                    <img
                      src={ImageIg3}
                      className='pt-20 pb-10'
                      alt=''
                    />
                  </div>
                  <p className='text-[#00B27A] Brevia850 text-6xl md:text-3xl'>
                    820
                  </p>
                  <p className='text-black pop500 text-base  text-center mt-5  w-[83%] md:w-[90%]'>
                    potenziali clienti hanno visitato le pagine social
                    in meno di due mesi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*--------------------------------------------------(FORUM)---------------------------------------------------------*/}
        <div className='w-full relative bg-gradient-to-r from-[#85E1AE] to-[#00B27A]'>
          <Form
            title={`Hai ancora dubbi?  Chiedi un parere a un nostro esperto!`}
          />
        </div>

        {/*------------------------------------------------(3 immagine)----------------------------------------------*/}

        <div className='py-7 sm:h-fit sm:gap-y-7 sm:py-8 flex flex-col gap-y-5 items-center h-fit relative '>
          <div className=' w-[78.5%] px-[40px] mx-auto flex flex-row xsm:flex-col sm:flex-col  md:flex-col  xsm:w-full sm:w-full  md:w-full  xmd:w-full xmd:gap-x-2 gap-x-20 pb-[40px] pt-3'>
            <div className=' w-1/3 xsm:w-full sm:w-full  md:w-full mx-auto flex flex-col '>
              <div className='h-[250px] my-8 w-full flex items-center justify-center'>
                <img src={Frame1} className='py-20' alt='' />
              </div>
              <p className='Brevia850  not-italic font-bold  text-3xl text-center text-[#114653]  mb-[15px] '>
                Pacchetto <br></br> “L’Espresso”
              </p>
              <p className='pop500  not-italic font-normal  text-base text-center text-black w-[91%] mx-auto'>
                Dai un boost al tuo Delivery: ricevi ordini a
                domicilio dal tuo sito. Sempre senza commissioni.{" "}
              </p>
              <button
                onClick={() => navigate("/espresso")}
                className='mx-auto my-8'
              >
                <img src={Image2} alt='' />
              </button>
            </div>

            <div className=' w-1/3 xsm:w-full sm:w-full  md:w-full mx-auto flex flex-col '>
              <div className=' w-full h-[250px] my-8  flex items-center justify-center'>
                <img src={Frame2} className='py-20' alt='' />
              </div>
              <p className='Brevia850  not-italic font-bold  text-3xl  text-center text-[#114653]  mb-[15px] '>
                Pacchetto <br></br>“A Tavola”{" "}
              </p>
              <p className='pop500  not-italic font-normal text-base text-center text-black w-[91%] mx-auto'>
                Riempi i tuoi tavoli con clienti di valore con il
                modulo prenotazioni evitando i no-show.
              </p>
              <button
                onClick={() => navigate("/tavola")}
                className='mx-auto my-8'
              >
                <img src={Image2} alt='' />
              </button>
            </div>

            <div className=' w-1/3 xsm:w-full sm:w-full  md:w-full mx-auto flex flex-col '>
              <div className=' w-full h-[250px] my-8 flex items-center justify-center'>
                <img src={Frame3} className='py-20' alt='' />
              </div>
              <p className='Brevia850  not-italic font-bold  text-3xl  text-center text-[#114653]  mb-[15px]  '>
                Pacchetto <br></br> “Il Viandante”{" "}
              </p>
              <p className='pop500  not-italic font-normal text-base text-center text-black w-[91%] mx-auto'>
                Attira turisti e locali al tuo ristorante comparendo
                ai primi posti nelle ricerche su Google.{" "}
              </p>
              <button
                onClick={() => navigate("/viandante")}
                className='mx-auto my-8'
              >
                <img src={Image2} alt='' />
              </button>
            </div>
          </div>
        </div>

        {/*----------------------------------------------(FINE - mettiamo le mani in pasta) ----------------------------------*/}

        <div className=' bg-[#FC6371] py-12 '>
          <div className='flex flex-col items-center justify-center gap-y-8'>
            <p className='Brevia850 text-5xl md:text-3xl sm:text-3xl text-white  text-center'>
              E allora? Mettiamo le mani in pasta!
            </p>

            <PopupButton
              url='https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club'
              rootElement={document.getElementById("root")}
              text='Fai un Tour del prodotto'
              className='w-[25%] sm:w-[50%] h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center pop500 text-black'
            />

            <button
              className='pop500 text-xmd border-b-2 border-white text-white sm:text-sm xmd:text-sm w-max'
              onClick={() => navigate("/contact")}
            >
              Oppure ricevi un consiglio da un nostro esperto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
