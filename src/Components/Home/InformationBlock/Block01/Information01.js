import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Information01.css"

function Information01() {
    const [expanded, setExpanded] = React.useState('panel1');

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
        
         <div className='w-1/3 xsm:w-full sm:w-full  md:w-full  xmd:w-full '>
            <div id="accordition" className='my-24 gap-y-2 flex flex-col'>

                <Accordion className='accorditionelement' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

                    <AccordionSummary className='accorditionelement' >

                        <p className="pop700  not-italic font-extrabold leading-9 text-xl text-black " >
                        Aggiungi le informazioni chiave</p>

                    </AccordionSummary>

                    <AccordionDetails>
                        <p className="pop500 not-italic font-normal leading-7 text-base  text-black ">
                        Metti in evidenza ciò che conta: descrivi brevemente la tua attività, controlla gli orari di apertura e inserisci i servizi che offri come tavoli all’aperto, asporto o Wi-Fi
                        </p>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='accorditionelement' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>

                    <AccordionSummary className='accorditionelement' >

                        <p className="pop700  not-italic font-extrabold leading-9 text-xl text-black " >
                        Connetti Social Media e Google</p>

                    </AccordionSummary>

                    <AccordionDetails>
                        <p className="pop500 not-italic font-normal leading-7 text-base  text-black ">
                        I tuoi clienti sono su Google e Social Media: raggiuli ora con Restaurants Club. Connetti la tua scheda GoogleMyBusiness e Social e inizia a sfruttare a pieno la loro potenza.
                        </p>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='accorditionelement' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>

                    <AccordionSummary className='accorditionelement' >

                        <p className="pop700  not-italic font-extrabold leading-9 text-xl text-black " >
                        Dai un’identità al tuo sito</p>

                    </AccordionSummary>

                    <AccordionDetails>
                        <p className="pop500 not-italic font-normal leading-7 text-base  text-black ">
                        Seleziona un tema Grafico per il tuo sito che valorizzi al meglio l’ambiente e i piatti della tua cucina. I nostri temi sono ottimizzati per la SEO e per un veloce caricamento del sito.
                        </p>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='accorditionelement' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>

                    <AccordionSummary className='accorditionelement' >

                        <p className="pop700  not-italic font-extrabold leading-9 text-xl text-black " >
                        Sito e App pronti e ottimizzati </p>

                    </AccordionSummary>

                    <AccordionDetails>
                        <p className="pop500 not-italic font-normal leading-7 text-base  text-black ">
                        Ottieni in automatico il tuo sito web, pronto sul dominio che hai scelto, e la tua App. Mostra il tuo Menù, Recensioni e Foto ed inizia a ricevere prenotazioni e ordini online!
                        </p>
                    </AccordionDetails>
                </Accordion>

            </div>
            </div>

        
            <div className='w-2/3 xsm:w-full sm:w-full  md:w-full  xmd:w-full '>
            <div className='w-[801px] xsm:w-full sm:w-full  md:w-full  xmd:w-full h-[397px] bg-[#a2a2a3] mt-16'>
            {getPanelDetails(expanded)}
    </div>
           
                        </div>
        </div>
    )
}

export default Information01