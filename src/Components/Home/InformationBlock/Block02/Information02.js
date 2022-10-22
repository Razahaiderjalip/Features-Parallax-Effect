import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import "./Information02.css"

function Information02() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // PARTE EXTRA ===========================================================
    const panelDetails = {
        panel1: <div className='w-[801px] xsm:w-full sm:w-full  md:w-full  xmd:w-full h-[397px] bg-[#3d11ef] mt-16'>

        </div>,
        panel2: <div className='w-[801px] xsm:w-full sm:w-full  md:w-full  xmd:w-full h-[397px] bg-[#975e5e] mt-16'>

        </div>,
        panel3: <div className='w-[801px] xsm:w-full sm:w-full  md:w-full  xmd:w-full h-[397px] bg-[#6ad371] mt-16'>

        </div>,

        panel4: <div className='w-[801px] xsm:w-full sm:w-full  md:w-full  xmd:w-full h-[397px] bg-[#3d11ef] mt-16'>

        </div>,
    };
    const getPanelDetails = panel => panelDetails[panel];
    // =======================================================================

    return (
        <div className='w-full flex flex-row xsm:flex-col sm:flex-col  md:flex-col  xmd:flex-col '>

            <div className='w-2/3 xsm:w-full sm:w-full  md:w-full  xmd:w-full '>
                <div className='w-[801px] xsm:w-full sm:w-full  md:w-full  xmd:w-full h-[397px] bg-[#a2a2a3] mt-16'>
                    {getPanelDetails(expanded)}
                </div>

            </div>


            <div className='w-1/3 xsm:w-full sm:w-full  md:w-full  xmd:w-full '>
                <div id="accordition" className='my-24 gap-y-2 flex flex-col'>

                    <Accordion className='accorditionelement' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

                        <AccordionSummary className='accorditionelement' >

                            <p className="pop700  not-italic font-extrabold leading-9 text-xl text-black " >
                                Aggiorna orari e dati importanti</p>

                        </AccordionSummary>

                        <AccordionDetails>
                            <p className="pop500 not-italic font-normal leading-7 text-base  text-black ">
                                Gestisci le informazioni al pubblico in modo coordinata: modifica orari di apertura,  bio tua attività e contatti una volta sola e si aggiornano subito su Sito, Google e Social
                            </p>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='accorditionelement' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>

                        <AccordionSummary className='accorditionelement' >

                            <p className="pop700  not-italic font-extrabold leading-9 text-xl text-black " >
                                Menù: valorizza la tua cucina</p>

                        </AccordionSummary>

                        <AccordionDetails>
                            <p className="pop500 not-italic font-normal leading-7 text-base  text-black ">Valorizza la tua cucina con un Menù Digitale che ti rappresenta: aggiorna i tuoi piatti e crea diversi menù mettendo foto, prezzo, descrizioni, allergeni, opzioni vegan o spezie.
                            </p>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='accorditionelement' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>

                        <AccordionSummary className='accorditionelement' >

                            <p className="pop700  not-italic font-extrabold leading-9 text-xl text-black " >
                                Delivery e Prenotazioni online</p>

                        </AccordionSummary>

                        <AccordionDetails>
                            <p className="pop500 not-italic font-normal leading-7 text-base  text-black ">
                                Fare Delivery e prendere Prenotazioni online senza commissioni? Si!
                                Non solo: riduci i no-show con i promemoria automatici e gestisci le tue sale con facilità.
                            </p>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='accorditionelement' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>

                        <AccordionSummary className='accorditionelement' >

                            <p className="pop700  not-italic font-extrabold leading-9 text-xl text-black " >
                                Fatti trovare da turisti e locali</p>

                        </AccordionSummary>

                        <AccordionDetails>
                            <p className="pop500 not-italic font-normal leading-7 text-base  text-black ">Appari nelle prime posizione delle ricerche su Google e incontra turisti e locali che cercano la tua cucina: scopri quante persone ti cercano e come in tempo reale!
                            </p>
                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>



        </div>
    )
}

export default Information02