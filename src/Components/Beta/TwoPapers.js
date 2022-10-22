import React from 'react';
import { useNavigate } from 'react-router-dom';

function TwoPapers() {

    const navigate = useNavigate();

    return (
        <div className='w-[78.5%] px-[40px] md:w-full md:px-2 sm:w-full sm:px-2 mx-auto flex flex-row my-8 sm:flex-col'>

            <div className='  borderimg1  h-fit min-w-[50%] sm:w-full flex  flex-col items-center justify-evenly gap-y-9 py-[5%] bg-transparent   '>

                <div className="flex flex-col  ">

                    <p className='text-[#00B27A] Brevia850 text-4xl text-center xmd:text-2xl md:text-2xl sm:text-2xl'>Cosa ottieni tu*</p>
                    <p className='text-black Brevia700 text-xl italic text-center xmd:text-xl md:text-xl sm:text-xl'>*sì, davvero tutto gratis.</p>

                </div>


                <div className='flex flex-row w-[90%] sm:w-full md:w-full  gap-x-2'>

                    <div className='  h-3 min-w-[12px] mt-3 rounded-full bg-[#FC6371] ' />
                    <p className='text-black text-xl xmd:text-xl md:text-xl sm:text-xl'>Un nuovo <span className='font-semibold'>Sito Web</span>  e<span className='font-semibold'> App:</span>  già ottimizzato per ricevere ordini e prenotazioni. <span className='font-semibold'>Dominio</span> e <span className='font-semibold'>Hosting</span>  incluso.</p>

                </div>

                <div className='flex flex-row w-[90%] sm:w-full md:w-full gap-x-2'>

                    <div className=' h-3 min-w-[12px] mt-3 rounded-full bg-[#FC6371] ' />
                    <p className='text-black text-xl xmd:text-xl md:text-xl sm:text-xl'><span className='font-semibold'>Supporto dedicato</span>  da parte di un nostro <br /> <span className='font-semibold'> Esperto di Marketing:</span>  ti consiglierà nell’utilizzo della piattaforma.</p>

                </div>

                <div className='flex flex-row w-[90%] sm:w-full md:w-full  gap-x-2'>

                    <div className='  h-3 min-w-[12px] mt-3 rounded-full bg-[#FC6371] ' />
                    <p className='text-black text-xl xmd:text-xl md:text-xl sm:text-xl'>Accesso ai moduli di gestione  <span className='font-semibold'>Delivery</span>  e<span className='font-semibold'> Prenotazione Tavolo</span> , con cui ricevere e gestire ordinazioni online.</p>

                </div>

                <div className='flex flex-row w-[90%] sm:w-full md:w-full  gap-x-2'>

                    <div className='  h-3 min-w-[12px] mt-3 rounded-full bg-[#FC6371] ' />
                    <p className='text-black text-xl xmd:text-xl md:text-xl sm:text-xl'>Accesso ai moduli di creazione e gestione <span className='font-semibold'> Newsletter, Social Media e Scontistica </span> con template ottimizzati.</p>

                </div>

                <div className='flex flex-row w-[90%] sm:w-full md:w-full  gap-x-2'>

                    <div className=' h-3 min-w-[12px] mt-3 rounded-full bg-[#FC6371] ' />
                    <p className='text-black text-xl  xmd:text-xl md:text-xl sm:text-xl'>Fino a <span className='font-semibold'>150€</span> di <span className='font-semibold'>credito pubblicitario</span> e accesso illimitato a tutte le <span className='font-semibold'>funzionalità.</span>  </p>

                </div>

            </div>


            <div className=' borderimg1 sm:w-full   min-w-[50%] flex  flex-col items-center justify-evenly gap-y-9 py-10   '>

                <div className="flex flex-col   justify-start ">

                    <p className='text-[#00B27A] Brevia850 text-4xl text-center xmd:text-2xl md:text-2xl sm:text-2xl'>Cosa otteniamo noi</p>

                </div>

                <div className='flex flex-row w-[90%] sm:w-full md:w-full  gap-x-2'>

                    <div className=' h-3 min-w-[12px] mt-3 rounded-full bg-[#FC6371] ' />
                    <p className='text-black text-xl xmd:text-xl md:text-xl sm:text-xl'>Con il tuo utilizzo e i tuoi <span className='font-semibold'>feedback</span> , capiremo come possiamo <span className='font-semibold'>  migliorare</span> le funzioni della piattaforma.</p>

                </div>

                <div className='flex flex-row w-[90%] sm:w-full  md:w-full gap-x-2'>

                    <div className='  h-3 min-w-[12px] mt-3  rounded-full bg-[#FC6371] ' />
                    <p className='text-black text-xl xmd:text-xl md:text-xl sm:text-xl'> Ci potrai suggerire <span className='font-semibold'>nuove funzionalità,</span>  raccontandoci di cosa hai bisogno: tu  <span className='font-semibold'> chiedi, </span>  noi ci occupiamo di renderlo <span className='font-semibold'> reale </span>!</p>

                </div>

                <div className='flex flex-row w-[90%] sm:w-full items-start  md:w-full  gap-x-2'>

                    <div className='  h-3 min-w-[12px] mt-3 rounded-full bg-[#FC6371] ' />
                    <p className='text-black text-xl xmd:text-xl md:text-xl sm:text-xl'>Ci piacerebbe <span className='font-semibold'>raccontare i risultati </span>  che ottieni con un mese di utilizzo della piattaforma: siam certi saranno <span className='font-semibold'>incredibili</span> ;)</p>

                </div>

                <div className='flex flex-row w-[90%] sm:w-full  md:w-full gap-x-2'>

                    <div className=' h-3 min-w-[12px] mt-3 rounded-full bg-[#FC6371] ' />
                    <p className='text-black text-xl xmd:text-xl md:text-xl sm:text-xl'>Prova, prova: tutto pronto? Come in ogni debutto, le <span className='font-semibold'>prove generali </span> sono più importanti della prima! A Ottobre 2022 saremo disponibili per tutti, e vorremmo sia tutto perfetto!</p>

                </div>

            </div>

        </div>

    )
}

export default TwoPapers
