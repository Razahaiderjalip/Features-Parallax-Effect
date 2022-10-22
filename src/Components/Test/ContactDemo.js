import React from 'react';
import HubspotContactForm from './HubspotContactFormDemo';
import { useNavigate } from "react-router-dom";
import Check from "../../Assets/Check.svg";
import ScrollToTop from '../../Reusable/ScrollToTop'


function ContactDemo2() {
  
  const navigate = useNavigate()
    return (
      
      <div className='grid grid-cols-2 px-40
      xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xmd:grid-cols-1 lg:grid-cols-2
      xsm:px-4 sm:px-6 md:px-8 xmd:px-10 lg:px-12'>
                  <ScrollToTop />

        <div className='flex flex-col '>

          <div className='flex justify-self-start'>

          <div className='w-full text-left flex flex-col sm:p-5 py-20 xmd:py-10 md:py-5 gap-y-6'>
                    <p className='Brevia850 text-5xl md:text-3xl sm:text-2xl text-[#00B27A]  leading-[60px] w-[80%] xmd:text-center md:text-center sm:text-center xsm:text-center xsm:mx-auto sm:mx-auto md:mx-auto  xmd:mx-auto'>Guarda Restaurants Club in azione!</p>
                  


                    <div className='flex flex-row gap-x-4 w-full xmd:text-center md:text-center sm:text-center xsm:text-center xsm:mx-auto sm:mx-auto md:mx-auto  xmd:mx-auto'>
                        
                        <p className='pop400 text-xl md:text-lg sm:text-lg text-black w-[90%]'>Accedi alla <span className='pop700'> demo interattiva </span> compilando questo modulo e guarda come Restaurants Club può aiutare il tuo ristorante a creare una  <span className='pop700'>solida base clienti </span>  fedele grazie agli strumenti digitali</p>
                    </div>



                    <div className='flex flex-row gap-x-4 w-full xsm:hidden sm:hidden md:hidden xmd:hidden'>
                    <img src={Check}  />
                        <p className='pop400 text-xl md:text-lg sm:text-lg text-black w-[90%]'>Sito web e App per ricevere prenotazioni tavolo e delivery sempre senza commissioni</p>
                    </div>
                    <div className='flex flex-row gap-x-4 w-full xsm:hidden sm:hidden md:hidden xmd:hidden'>
                    <img src={Check}  />
                        <p className='pop400 text-xl md:text-lg sm:text-lg text-black w-[90%]'>Campagne Marketing ottimizzate per i tuoi obiettivi</p>
                    </div>

                    <div className='flex flex-row gap-x-4 w-full xsm:hidden sm:hidden md:hidden xmd:hidden'>
                    <img src={Check}  />
                        <p className='pop400 text-xl md:text-lg sm:text-lg text-black w-[90%]'>Gestione Social Media, Newsletter e molto altro!</p>
                    </div>



                </div>

          </div>


        </div>

        <div className='px-20 py-14  xsm:px-5 sm:px-5  md:px-5 '>

          <div className='px-8 py-6 border-[10px] border-black '>
        
            <HubspotContactForm/>

          </div>

        </div>

      </div>
        
    )
}

export default ContactDemo2