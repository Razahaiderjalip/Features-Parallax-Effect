import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './beta.css';

function FAQ() {
    return (
        <>
            <div id="accorditionid" className='mt-10 w-full mx-auto flex flex-col gap-y-4'>
                <Accordion style={{ borderTopWidth: 4, borderBottomWidth: 0, marginBottom: 10, paddingTop: 24 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon  />} aria-controls="panel1a-content" id="funzioni" >
                        <p className="Brevia700 text-4xl sm:text-2xl  text-[#114653] italic">Attrai interessati</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div id="tabella">
                            <table id="funzioni" className=' w-full mt-5  '>
                                <tr className='' >
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-1/5 sm:w-fit">Modulo</th>
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-2/5">Vantaggi</th>
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-2/5">Strumenti</th>
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24  ">SEO</td>
                                    <td className="pop400 text-base text-center sm:text-[14px] leading-6 text-[#000000] h-24 ">Fatti trovare su Google e analizza la concorrenza </td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Scheda Google MyBusiness e Sito Web ottimizzati, analisi della concorrenza</td>
                                </tr>
                                <tr>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Social Media</td>
                                    <td className="pop400 text-base text-center leading-6 text-[#000000] h-24 ">Sii presente sui social per attirare nuovi clienti</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Modelli, immagini di stock, descrizioni suggerite</td>
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Cliente Tipo</td>
                                    <td className="pop400 text-base text-center leading-6 text-[#000000] h-24 ">Conosci i tuoi clienti attuali e scopri quelli potenziali  </td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Visualizza il tuo cliente primario e secondario e potenziale (Età, Sesso, Interessi)</td>
                                </tr>
                            </table>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion style={{ borderTopWidth: 4, borderBottomWidth: 0, marginBottom: 10, paddingTop: 24 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="funzioni" >
                        <p className="Brevia700 text-4xl sm:text-2xl leading-10 text-[#114653] italic">Converti i visitatori online</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div id="tabella">
                            <table id="funzioni" className=' w-full mt-5  '>
                                <tr className='' >
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-1/5">Modulo</th>
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-2/5">Vantaggi</th>
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-2/5">Strumenti</th>
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24  ">Marketing</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Raggiungi nuovi clienti su Google e Social Media</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Campagne Marketing ottimizzate su Facebook e Instagram, portafoglio virtuale</td>
                                </tr>
                                <tr>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">ChatBot</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Converti i visitatori del tuo sito in clienti paganti</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Chat-Bot già configurato che risponde automaticamente alle domande dei clienti</td>
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Offerte</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Convinci gli indecisi con offerte irresistibili </td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Crea offerte percentuali, flat e bundle di prodotti</td>
                                </tr>
                            </table>
                        </div>

                    </AccordionDetails>
                </Accordion>

                <Accordion style={{ borderTopWidth: 4, borderBottomWidth: 0, marginBottom: 10, paddingTop: 24 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="funzioni" >
                        <p className="Brevia700 text-4xl sm:text-2xl leading-10 text-[#114653] italic">Fidelizza i tuoi clienti</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div id="tabella">
                            <table id="funzioni" className=' w-full mt-5 '>
                                <tr className='' >
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-1/5">Modulo</th>
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-2/5">Vantaggi</th>
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-2/5">Strumenti</th>
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24  ">Newsletter</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Mantieni viva la conversazione e falli affezionare a te</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Template grafici, Stock foto, Testi suggeriti, gestione liste mail</td>
                                </tr>
                                <tr>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Lista Clienti</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Scopri nel profondo le abitudini e preferenze dei tuoi clienti</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Lista Clienti con nome cognome, contatti e preferenze alimentari</td>
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Fidelity</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Premia i più fedeli con iniziative uniche </td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Una carta fedeltà digitale per il tuo ristorante</td>
                                </tr>
                            </table>
                        </div>
                    </AccordionDetails>
                </Accordion>


                <Accordion style={{ borderTopWidth: 4, borderBottomWidth: 0, marginBottom: 10, paddingTop: 24 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon  />} aria-controls="panel1a-content" id="funzioni" >
                        <p className="Brevia700 text-4xl sm:text-2xl leading-10 text-[#114653] italic">Funzioni generali</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div id="tabella">
                            <table id="funzioni" className=' w-full mt-5   '>
                                <tr className='' >
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-1/5">Modulo</th>
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-2/5">Vantaggi</th>
                                    <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-24 w-2/5">Strumenti</th>
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24  ">Sito Web e App</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Il tuo ristorante online già pronto per accogliere clienti </td>
                                    <td className="pop400 text-base text-center leading-6 text-[#000000] h-24 ">Procedura d’iscrizione con cui scegli tema del sito e inserisci le informazioni chiave</td>
                                </tr>
                                <tr>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Ristorante</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Tieni aggiornate le informazioni del tuo ristorante ovunque</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Orario di apertura, informazioni del ristorante, Connessione Pagamenti digitali</td>
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Prodotti</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Tieni aggiornato il tuo menù su sito web e app </td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Creazione dei tuoi Menù e gestione schede prodotti</td>
                                </tr>
                                <tr >
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24  ">Supporto</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Hai bisogno di aiuto? Contatta l’assistenza con ticket o chat </td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Modulo Apertura Ticket, Chat con Assistenza</td>
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Temi</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Scegli e modifica il tuo sito già ottimizzato, come piace a te</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Cambia tema, testi e immagini per il tuo sito web</td>
                                </tr>
                                <tr >
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Delivery</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Gestisci gli ordini a domicilio in autonomia</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Accetta i nuovi ordini,  gestisci i tuoi rider, App Rider per ricevere ordini sul telefono</td>
                                </tr>
                                <tr className='bg-[#F6F6F4]'>
                                    <td className="pop600 text-lg sm:text-[16px] text-center leading-6 text-[#000000] h-24 ">Prenotazioni</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Ricevi le prenotazioni e gestisci i tavoli e le sale facilmente</td>
                                    <td className="pop400 text-base text-center sm:text-[14px]  leading-6 text-[#000000] h-24 ">Gestione Tavoli, Lista prenotazioni da accettare o rifiutare</td>
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