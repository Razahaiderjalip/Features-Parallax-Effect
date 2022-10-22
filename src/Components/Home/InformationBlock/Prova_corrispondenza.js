import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';



function Prova() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    React.useEffect(() => {
        document.addEventListener("click", e => {
            var elem = document.getElementById();
            const panel1 = document.getElementById("panel1")
            const panel2 = document.getElementById("panel2")
            const panel3 = document.getElementById("panel3")
            const panel4 = document.getElementById("panel4")
            if ( elem === panel1) {
                setNavBg(false)
            } 
            if ( elem === panel2) {
                setNavBg(false)
            }else {
                setNavBg(true)
            }
        })
    }, [])


    const [navBg, setNavBg] = React.useState(true);



    return (



        <>

<div id="accordition" className='my-24 gap-y-2 flex flex-col'>

<Accordion id='panel1' className='accorditionelement' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

    <AccordionSummary className='accorditionelement' >

        <p className="pop700  not-italic font-extrabold leading-9 text-xl text-black " >
            Aggiungi le informazioni chiave</p>

    </AccordionSummary>

    <AccordionDetails>
        <p className="pop500 not-italic font-normal leading-7 text-base  text-black ">
        I tuoi clienti sono su Google e Social Media: raggiuli ora con Restaurants Club. Un Click, 5 minuti e sei online. 
Restaurants Club. Un Click, 5 minuti e sei online. 
        </p>
    </AccordionDetails>
</Accordion>

<Accordion id='panel2' className='accorditionelement' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>

    <AccordionSummary className='accorditionelement' >

        <p className="pop700  not-italic font-extrabold leading-9 text-xl text-black " >
            Connetti Social Media e Google</p>

    </AccordionSummary>

    <AccordionDetails>
        <p className="pop500 not-italic font-normal leading-7 text-base  text-black ">
            Certamente! Tutto il sito e le raccolte di dati dal sito che creeremo per il tuo ristorante sarà compliant alla normativa. Il sito generato viene creato in modo automatizzato con una cookie policy e privacy policy a norma di legge.
        </p>
    </AccordionDetails>
</Accordion>

<Accordion id='panel3' className='accorditionelement' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>

    <AccordionSummary className='accorditionelement' >

        <p className="pop700  not-italic font-extrabold leading-9 text-xl text-black " >
            Dai un’identità al tuo sito</p>

    </AccordionSummary>

    <AccordionDetails>
        <p className="pop500 not-italic font-normal leading-7 text-base  text-black ">
            Certamente! Tutto il sito e le raccolte di dati dal sito che creeremo per il tuo ristorante sarà compliant alla normativa. Il sito generato viene creato in modo automatizzato con una cookie policy e privacy policy a norma di legge.
        </p>
    </AccordionDetails>
</Accordion>

<Accordion id='panel4' className='accorditionelement' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>

    <AccordionSummary className='accorditionelement' >

        <p className="pop700  not-italic font-extrabold leading-9 text-xl text-black " >
            Sito e App pronti e ottimizzati </p>

    </AccordionSummary>

    <AccordionDetails>
        <p className="pop500 not-italic font-normal leading-7 text-base  text-black ">
            Certamente! Tutto il sito e le raccolte di dati dal sito che creeremo per il tuo ristorante sarà compliant alla normativa. Il sito generato viene creato in modo automatizzato con una cookie policy e privacy policy a norma di legge.
        </p>
    </AccordionDetails>
</Accordion>

</div>

            {navBg === true ?
                <>
                <div className='w-2/3 xsm:w-full sm:w-full  md:w-full  xmd:w-full'>
                            <div className='w-[801px] xsm:w-full sm:w-full  md:w-full  xmd:w-full h-[397px] bg-[#D9D9D9] mt-16'>

                            </div>
</div>
                </>
                :
                <>
                <div className='w-2/3 xsm:w-full sm:w-full  md:w-full  xmd:w-full'>
                            <div className='w-[801px] xsm:w-full sm:w-full  md:w-full  xmd:w-full h-[397px] bg-[#ae1c1c] mt-16'>

                            </div>
</div>
                </>
            }
        </>


    )
}

export default Prova


