import React from 'react';
import HubspotContactForm from './HubspotContactForm';
import { FaPhoneAlt } from "react-icons/fa"
import { createTheme } from '@mui/system';

import { PopupButton } from 'react-calendly';
import Check from "../../Assets/Check.svg";
import ScrollToTop from '../../Reusable/ScrollToTop'
const theme = createTheme({
  text: {
    green: '#00B27A',

  },

},
);

function Contact() {

  return (
    <>

      <ScrollToTop />

      <div className='w-full py-10 bg-[#00B27A] flex flex-col items-center justify-evenly my-5'>

        <a href="tel:+390500988606">
          <p className='Brevia850 text-4xl sm:text-3xl text-white text-center flex gap-x-2'><span><FaPhoneAlt /></span> + 39 050 0988606</p>
        </a>
      </div>

      <div className='grid grid-cols-2 px-40
      xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xmd:grid-cols-1 lg:grid-cols-2
      xsm:px-4 sm:px-6 md:px-8 xmd:px-10 lg:px-12'>


        <div className='flex flex-col '>




          <div className='flex justify-self-start'>

            <div className='w-full text-left flex flex-col sm:p-5 py-20 xmd:py-10 md:py-5 gap-y-6'>
              <h1 className='Brevia850 text-5xl md:text-3xl sm:text-2xl text-[#00B27A] w-full leading-[60px] xmd:text-center md:text-center sm:text-center xsm:text-center'>Contattaci per scoprire come Restaurants Club può aiutare il tuo ristorante!</h1>
              <h2 className='Brevia700 italic text-2xl md:text-xl sm:text-lg text-black w-[75%] xmd:text-center md:text-center sm:text-center xsm:text-center xsm:mx-auto sm:mx-auto  md:mx-auto xmd:mx-auto'>Siamo felici di rispondere alle tue domande e di farti conoscere Restaurants Club</h2>
              <div className='flex flex-row gap-x-4 w-full xsm:hidden sm:hidden md:hidden xmd:hidden'>
                <img src={Check} />
                <p className='pop400 text-xl md:text-lg sm:text-lg text-black w-[90%]'>Sito web e App per ricevere prenotazioni tavolo e delivery sempre senza commissioni</p>
              </div>
              <div className='flex flex-row gap-x-4 w-full xsm:hidden sm:hidden md:hidden xmd:hidden'>
                <img src={Check} />
                <p className='pop400 text-xl md:text-lg sm:text-lg text-black w-[90%]'>Campagne Marketing ottimizzate per i tuoi obiettivi</p>
              </div>

              <div className='flex flex-row gap-x-4 w-full xsm:hidden sm:hidden md:hidden xmd:hidden'>
                <img src={Check} />
                <p className='pop400 text-xl md:text-lg sm:text-lg text-black w-[90%]'>Gestione Social Media, Newsletter e molto altro!</p>
              </div>

              <div className='flex flex-row gap-x-4 w-full xsm:hidden sm:hidden md:hidden xmd:hidden'>

                <p className='pop400 text-xl md:text-lg sm:text-lg text-black w-[90%] '>Per questioni tecniche e richieste generali, contatta <span className='pop700'>l’assistenza tramite la Dashboard </span> se sei già nostro cliente oppure chiama il <span className='pop700'>050 0988606</span></p>
              </div>

              <h2 className='Brevia700 italic text-2xl md:text-xl sm:text-lg text-black w-[75%] xsm:hidden sm:hidden md:hidden xmd:hidden'>Se vuoi scoprire di più sul prodotto, prenota una chiamata introduttiva qui.</h2>


              <PopupButton
                className='w-[50%] md:w-[75%] sm:w-[75%] h-14 border-[3px] xmd:hidden border-black items-center flex justify-center pop600 text-lg xsm:hidden sm:hidden md:hidden '
                url="https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club"
                rootElement={document.getElementById("root")}
                text="Prenota una Chiamata"

              />


            </div>

          </div>


        </div>

        <div className='px-20 py-10  xsm:px-5 sm:px-5  md:px-5 '>

          <div className='px-8 py-6 border-[10px] border-black '>

            <HubspotContactForm />

          </div>

        </div>
        <div className='lg:hidden xl:hidden mb-14'>
          <h2 className='xsm:mx-auto sm:mx-auto md:mx-auto  xmd:mx-auto my-2 Brevia700 italic text-2xl md:text-xl sm:text-lg text-black w-[75%] md:text-center xmd:text-center sm:text-center xsm:text-center'>Se vuoi scoprire di più sul prodotto, prenota una chiamata introduttiva qui.</h2>


          <PopupButton
            className='xsm:mx-auto sm:mx-auto  md:mx-auto  xmd:mx-auto my-5 w-[50%] md:w-[75%] sm:w-[75%] h-14 border-[3px]  border-black items-center flex justify-center pop600 text-lg '
            url="https://calendly.com/restaurants_club/tour_guidato_piattaforma_restaurants_club"
            rootElement={document.getElementById("root")}
            text="Prenota una Chiamata"

          />
        </div>

      </div>
    </>
  )
}

export default Contact