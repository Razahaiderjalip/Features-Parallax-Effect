import React from 'react';
import './TabPricing.css';
import ScrollToTop from '../../Reusable/ScrollToTop';

import { useNavigate } from 'react-router-dom';

import TabCheck from '../../Assets/TabCheck.svg';
import Meno from '../../Assets/meno.svg';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Pricing() {

    const navigate = useNavigate;

    const goToRegister = () => {
        navigate("/register");
    };

    const [isChoosen, SetChoose] = React.useState([])
    const [Annual, SetAnnual] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [ModalType, SetModalType] = React.useState("")

    const [Modalopen, setModalOpen] = React.useState(false);
    const handleOpen = (Modaltype) => {
        SetModalType(Modaltype)
        setModalOpen(true)
    }
    const handleClose = () => setModalOpen(false);
    return (
        <div className='gap-y-8 mt-14 sm:mt-4 md:mt-4'>

            <ScrollToTop />

            <div className="w-[78.5%] xsm:w-full sm:w-full  md:w-full  px-[40px] mx-auto flex flex-col gap-y-5" >

                <p className='text-[#114653] Brevia850 text-5xl xsm:text-4xl sm:text-4xl  text-center my-2 mx-auto'>Lorem Ipsum dolor sit amet</p>
                <p className='text-[#000000] Brevia700 text-4xl xsm:text-3xl sm:text-3xl italic text-center w-[60%] xsm:w-full sm:w-full  md:w-full  leading-[50px] mx-auto'>Lorem Ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum</p>
                <p className='text-[#000000] pop400 text-2xl xsm:text-xl sm:text-xl text-center w-[70%] xsm:w-full sm:w-full  md:w-full  mx-auto' >Riempire il locale ora è più facile: i tuoi clienti ti scoprono prima online e poi ti vengono a cercare. Ti riconoscono e vengono subito da te! </p>

            </div>


            <div className='w-full  bg-[#00B27A] flex flex-col items-center py-5 my-5 mt-10'>


                <p className='pop700 text-2xl xsm:text-xl sm:text-xl text-white text-center '>In regalo, fino a 1400€ di credito per la tua pubblicità sui social</p>

            </div>


            <div className="flex flex-row w-[78.5%] px-[40px] justify-between mx-auto my-10 xsm:hidden sm:hidden md:hidden xmd:w-full ">

                <div className='flex flex-row gap-x-5 items-end '>

                    <div>
                        <div className="bg-white border-4 border-black flex flex-col  gap-5 p-10 ">

                            <p className="text-black Brevia700 text-4xl text-center">1 Pacchetto</p>

                            <p className="text-black pop500 text-2xl text-center" >a scelta tra L’Espresso, Il Viandante e ATavola</p>

                            <p className="text-black Brevia700 text-4xl text-center"> 300,00/<span className='pop400  text-base '>mese</span> <span className='pop700  text-base'>+ IVA</span></p>

                        </div>
                        <div className="bg-[#FC6371]  flex flex-col  p-4"><p className="text-white pop500 text-xl text-center   mx-auto" >Fino a 750,00€ di credito pubblicitario in regalo</p></div>
                    </div>

                    <div>
                        <div className="bg-[#114653] py-2 "><p className="text-white Brevia700 text-base text-center " >Consigliato per te</p></div>
                        <div className="bg-white border-4 border-t-0 border-black flex flex-col  gap-5 p-10 pt-16">

                            <p className="text-black Brevia700 text-4xl text-center">2 Pacchetti</p>

                            <p className="text-black pop500 text-2xl text-center" >a scelta tra L’Espresso, Il Viandante e ATavola</p>

                            <p className="text-black Brevia700 text-4xl text-center"> 350,00/<span className='pop400  text-base '>mese</span> <span className='pop700  text-base'>+ IVA</span></p>

                        </div>
                        <div className="bg-[#FC6371]  flex flex-col p-4"><p className="text-white pop500 text-xl  text-center   mx-auto" >Fino a 1000,00€ di credito pubblicitario in regalo</p></div>
                    </div>

                    <div>
                        <div className="bg-white border-4 border-black flex flex-col  gap-5 p-10">


                            <p className="text-black Brevia700 text-4xl text-center">3 Pacchetti</p>

                            <p className="text-black pop500 text-2xl text-center" >a scelta tra L’Espresso, Il Viandante e ATavola</p>

                            <p className="text-black Brevia700 text-4xl text-center"> 400,00/<span className='pop400  text-base '>mese</span> <span className='pop700  text-base'>+ IVA</span></p>

                        </div>
                        <div className="bg-[#FC6371]  flex flex-col p-4 "><p className="text-white pop500 text-xl  text-center mx-auto" >Fino a 1400,00€ di credito pubblicitario in regalo</p></div>
                    </div>

                </div>

            </div>


            <div className="flex flex-col px-[40px] mx-auto my-10 xmd:hidden lg:hidden xl:hidden">



                <div className="border-4 border-[#114653] flex flex-col">

                <div className=' m-5 '>

                    <p className="text-black Brevia700 text-3xl text-left">1 Pacchetto</p>

                    <p className="text-black pop500 text-base text-left my-3" >a scelta tra L’Espresso, Il Viandante e ATavola</p>

                    <p className="text-black Brevia700 text-2xl text-left"> 300,00/<span className='pop400  text-sm '>mese</span> <span className='pop700  text-sm'>+ IVA</span></p>
</div>

                    <div className="bg-[#FC6371]  flex flex-col  p-4"><p className="text-white pop500 text-xl text-center   mx-auto" >Fino a 750,00€ di credito pubblicitario in regalo</p></div>

                </div>



            </div>

            <div className='flex flex-row sm:flex-col-reverse sm:h-fit w-[78.5%] lg:w-[95%] px-[40px]  sm:w-full  xmd:w-[98%] md:w-[98%] mx-auto   my-10  '>
                <div className='w-1/2 md:w-2/3 sm:w-full text-left flex flex-col sm:p-5 py-20 xmd:py-10 md:py-5 gap-y-6'>
                    <p className='Brevia850 text-6xl xsm:text-4xl sm:text-4xl xsm:text-center sm:text-center text-[#00B27A] w-full'>Il nostro Jolly</p>
                    <p className='Brevia700 text-4xl xsm:text-3xl sm:text-3xl xsm:text-center sm:text-center italic  text-[#114653]'>Se scegli 2 pacchetti, tra cui Il Viandante, ottieni un regalo.</p>
                    <div className='flex flex-row gap-x-4 w-full'>

                        <p className='pop400 text-lg xsm:text-center sm:text-center  text-black w-[90%] xsm:mx-auto sm:mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos</p>
                    </div>

                    <button className='w-[50%] xsm:w-full sm:w-full md:w-[70%] px-8 py-3 border-4 bg-[#DCFFCF] border-black items-center flex justify-center pop600 text-black text-xl xsm:text-lg sm:text-lg'>
                        <p >Simula un preventivo</p>
                    </button>

                </div>
                <div className='w-1/2 md:w-1/3 sm:w-full flex items-center justify-center bg-[#D9D9D9]'>
                    <img />
                </div>
            </div>

            <div >
                <p className='text-[#114653] Brevia850 text-[50px] xmd:text-[42px] md:text-[32px] sm:text-[32px] text-center my-2 w-[80%] xl:w-[50%]  lg:w-[50%]  mx-auto'>Quali sono le differenze fra i pacchetti?</p>
                <p className='text-[#000000] Brevia700 text-[36px] xmd:text-[30px] md:text-[28px] sm:text-[23px] italic text-center'>Paga solo ciò di cui hai bisogno e scegli il piano su misura per te</p>

            </div>

            <div className="flex flex-row w-[78.5%] px-[40px] mx-auto my-10 xsm:hidden sm:hidden md:hidden ">
                <div id="pricing">
                    <table id="pricing" className=' w-full mt-5  '>
                        <tr className='' >
                            <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-62 w-[214px] border-b-8 border-white"></th>
                            <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-62 w-[304px] bg-[#E5FFDD] border-b-8 border-[#114653] ">L’Espresso</th>
                            <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-62 w-[304px] bg-[#B1C8FF] border-b-8 border-[#114653]">Il Viandante</th>
                            <th className="Brevia700 text-center text-2xl sm:text-lg text-[#114653] h-62 w-[304px] bg-[#FFDDE5] border-b-8 border-[#114653]">A Tavola</th>

                        </tr>
                        <tr className=''>
                            <td className="h-24 border-b-2 border-[#11465300]"><p className="pop500 text-lg leading-6 text-left text-[#000000] ">Sito Web</p></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                        </tr>
                        <tr>
                            <td className="h-24 border-b-2 border-[#11465300]"><p className="pop500 text-lg leading-6 text-left text-[#000000] ">Dashboard</p></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                        </tr>
                        <tr className=''>
                            <td className="h-24 border-b-2 border-[#11465300]"><p className="pop500 text-lg leading-6 text-left text-[#000000] ">Ristorante</p></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                        </tr>

                        <tr className=''>
                            <td className="h-24 border-b-2 border-[#11465300]"><p className="pop500 text-lg leading-6 text-left text-[#000000] ">Prodotti</p></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={Meno} className='w-5 h-5 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={Meno} className='w-5 h-5 mx-auto' alt="" /></div></td>
                        </tr>
                        <tr>
                            <td className="h-24 border-b-2 border-[#11465300]"><p className="pop500 text-lg leading-6 text-left text-[#000000] ">Delivery</p></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={Meno} className='w-5 h-5 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={Meno} className='w-5 h-5 mx-auto' alt="" /></div></td>
                        </tr>
                        <tr className=''>
                            <td className="h-24 border-b-2 border-[#11465300]"><p className="pop500 text-lg leading-6 text-left text-[#000000] ">Prenotazioni</p></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={Meno} className='w-5 h-5 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={Meno} className='w-5 h-5 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                        </tr>
                        <tr className=''>
                            <td className="h-24 border-b-2 border-[#11465300]"><p className="pop500 text-lg leading-6 text-left text-[#000000] ">SEO</p></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                        </tr>
                        <tr className=''>
                            <td className="h-24 border-b-2 border-[#11465300]"><p className="pop500 text-lg leading-6 text-left text-[#000000] ">Social Media*</p></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                        </tr>
                        <tr className=''>
                            <td className="h-24 border-b-2 border-[#11465300]"><p className="pop500 text-lg leading-6 text-left text-[#000000] ">Cliente Tipo</p></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                        </tr>

                        <tr className=''>
                            <td className="h-24 border-b-2 border-[#11465300]"><p className="pop500 text-lg leading-6 text-left text-[#000000] ">Marketing*</p></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                        </tr>
                        <tr>
                            <td className="h-24 border-b-2 border-[#11465300]"><p className="pop500 text-lg leading-6 text-left text-[#000000] ">Newsletter*</p></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                        </tr>
                        <tr className=''>
                            <td className="h-24 border-b-2 border-[#11465300]"><p className="pop500 text-lg leading-6 text-left text-[#000000] ">Clienti</p></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                        </tr>
                        <tr className=''>
                            <td className="h-24 border-b-2 border-[#11465300]"><p className="pop500 text-lg leading-6 text-left text-[#000000] ">Temi</p></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                        </tr>
                        <tr className=''>
                            <td className="h-24 border-b-2 border-[#11465300]"><p className="pop500 text-lg leading-6 text-left text-[#000000] ">Supporto</p></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                            <td className="border-b-[1px] border-[#D9D9D9]"><div className=''><img src={TabCheck} className='w-6 h-6 mx-auto' alt="" /></div></td>
                        </tr>
                    </table>

                    <p className="text-black pop500 text-base my-7" >*I modelli per la creazione delle immagini e delle mail, così come i testi suggeriti da inserire all’interno, variano a seconda del pacchetto scelto, per favorire il raggiungimento degli obiettivi del pacchetto (Delivery, visite al locale o prenotazioni)</p>

                </div>

            </div>


            <div className="flex flex-col px-[40px] mx-auto my-10 xmd:hidden lg:hidden xl:hidden">



                <div className="border-4 border-black flex flex-col py-9 px-5 h-[500px] -mb-[475px]">



                    <div className=' mt-16 mb-2'>
                        <p className="text-black pop500 text-sm text-center" >Coinvolgi gli utenti nel Delivery</p>

                        <p className="text-black pop700 text-sm ">Servizi specifici inclusi </p>
                    </div>

                    <div className=' flex flex-col gap-y-2 my-3'>


                        <div className='flex flex-row  '><img src={TabCheck} className='w-5 h-5 mx-2' alt="" /><p className="text-black pop400 text-sm " >Sito web</p></div>
                        <div className='flex flex-row '><img src={TabCheck} className='w-5 h-5 mx-2' alt="" /><p className="text-black pop400 text-sm " >Pannello gestione delivery</p></div>
                        <div className='flex flex-row '><img src={TabCheck} className='w-5 h-5 mx-2' alt="" /><p className="text-black pop400 text-sm " >Mail Automatiche</p></div>
                        <div className='flex flex-row '><img src={TabCheck} className='w-5 h-5 mx-2' alt="" /> <p className="text-black pop400 text-sm " >Pannello gestione rider</p></div>
                        <div className='flex flex-row '><img src={TabCheck} className='w-5 h-5 mx-2' alt="" /><p className="text-black pop400 text-sm " >Rider App</p></div>
                        <div className='flex flex-row '><img src={TabCheck} className='w-5 h-5 mx-2' alt="" /><p className="text-black pop400 text-sm " >Contenuti e template per il delivery</p></div>
                        <div className='flex flex-row'><img src={TabCheck} className='w-5 h-5 mx-2' alt="" /> <p className="text-black pop400 text-sm " >Campagne Marketing per il delivery</p></div>
                        <div className='flex flex-row '><img src={TabCheck} className='w-5 h-5 mx-2' alt="" /><p className="text-black pop400 text-sm " >Testi suggeriti per il delivery</p></div>
                    </div>

                    <Accordion id="" className='shadow-none' style={{ borderTopWidth: 0, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 0 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"  id="">
                        <p className="text-xl pop700">Scopri altri servizi</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-24">
                    boh

                        </Typography>
                    </AccordionDetails>
                </Accordion>

                </div>


                <div className="bg-[#E5FFDD]  flex flex-col p-4 mb-[450px]">
                    <p className="text-[#114653] Brevia700 text-2xl text-center">L’Espresso</p>
                </div>



            </div>


        </div>
    )
}

export default Pricing