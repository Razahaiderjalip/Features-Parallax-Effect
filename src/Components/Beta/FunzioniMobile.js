import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './beta.css';

function FAQ() {
    return (
        <>
            <div className='mt-10 w-full mx-auto flex flex-col gap-y-4'>
                <Accordion style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10, paddingTop: 24 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon  />} aria-controls="panel1a-content" id="funzioni" >
                        <p className="Brevia700 text-4xl sm:text-2xl  text-[#114653] italic">Attrai interessati</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div id="tabella">
                            <table id="funzioni" className=' w-full mt-5  '>
                                <tr className='' >
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-1/5 sm:w-fit">Modulo</th>
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-2/5">Vantaggi</th>
                                   
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24  ">SEO</td>
                                    <td className="pop400 text-base text-center sm:text-[14px] leading-6 text-[#000000] h-24 ">Fatti trovare su Google e analizza la concorrenza </td>
                                    
                                </tr>
                                <tr>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Social Media</td>
                                    <td className="pop400 text-base text-center leading-6 text-[#000000] h-24 ">Sii presente sui social per attirare nuovi clienti</td>
                                    
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Cliente Tipo</td>
                                    <td className="pop400 text-base text-center leading-6 text-[#000000] h-24 ">Conosci i tuoi clienti attuali e scopri quelli potenziali  </td>
                                    
                                </tr>
                            </table>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10, paddingTop: 24 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="funzioni" >
                        <p className="Brevia700 text-4xl sm:text-2xl leading-10 text-[#114653] italic">Converti i visitatori online</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div id="tabella">
                            <table id="funzioni" className=' w-full mt-5  '>
                                <tr className='' >
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-1/5">Modulo</th>
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-2/5">Vantaggi</th>
        
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24  ">Marketing</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Raggiungi nuovi clienti su Google e Social Media</td>
                                   
                                </tr>
                                <tr>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">ChatBot</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Converti i visitatori del tuo sito in clienti paganti</td>
                                    
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Offerte</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Convinci gli indecisi con offerte irresistibili </td>

                                </tr>
                            </table>
                        </div>

                    </AccordionDetails>
                </Accordion>

                <Accordion style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10, paddingTop: 24 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="funzioni" >
                        <p className="Brevia700 text-4xl sm:text-2xl leading-10 text-[#114653] italic">Fidelizza i tuoi clienti</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div id="tabella">
                            <table id="funzioni" className=' w-full mt-5 '>
                                <tr className='' >
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-1/5">Modulo</th>
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-2/5">Vantaggi</th>
                                  
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24  ">Newsletter</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Mantieni viva la conversazione e falli affezionare a te</td>
                                   
                                </tr>
                                <tr>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Lista Clienti</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Scopri nel profondo le abitudini e preferenze dei tuoi clienti</td>
                                    
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Fidelity</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Premia i più fedeli con iniziative uniche </td>
                                    
                                </tr>
                            </table>
                        </div>
                    </AccordionDetails>
                </Accordion>


                <Accordion style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10, paddingTop: 24 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon  />} aria-controls="panel1a-content" id="funzioni" >
                        <p className="Brevia700 text-4xl sm:text-2xl leading-10 text-[#114653] italic">Funzioni generali</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div id="tabella">
                            <table id="funzioni" className=' w-full mt-5   '>
                                <tr className='' >
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-1/5">Modulo</th>
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-2/5">Vantaggi</th>
                               
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24  ">Sito Web e App</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Il tuo ristorante online già pronto per accogliere clienti </td>
                                  
                                </tr>
                                <tr>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Ristorante</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Tieni aggiornate le informazioni del tuo ristorante ovunque</td>
                                   
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Prodotti</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Tieni aggiornato il tuo menù su sito web e app </td>
                                    
                                </tr>
                                <tr >
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24  ">Supporto</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Hai bisogno di aiuto? Contatta l’assistenza con ticket o chat </td>
                                   
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Temi</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Scegli e modifica il tuo sito già ottimizzato, come piace a te</td>
                                    
                                </tr>
                                <tr >
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Delivery</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Gestisci gli ordini a domicilio in autonomia</td>
                                    
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Prenotazioni</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Ricevi le prenotazioni e gestisci i tavoli e le sale facilmente</td>
                                   
                                </tr>

                            </table>
                        </div>
                    </AccordionDetails>
                </Accordion>

            </div>

        </>
    )
}

export default FAQ