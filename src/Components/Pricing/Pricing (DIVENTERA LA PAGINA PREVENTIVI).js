import React from 'react';
import CheckBox from './CheckBox';
import Image from "../../Assets/PricingImage.png";
import { FaPhoneAlt } from "react-icons/fa";
import FAQ from './FAQ';
import NoChoice from './NoChoice';
import OneChoice from './OneChoice';
import TwoChoices from './TwoChoices';
import ThreeChoices from './ThreeChoices';
import Fab from '@mui/material/Fab';
import { MdOutlineOpenInFull } from 'react-icons/md';
import OfferMobile from './OfferMobile';
import BottomDrawer from './BottomDrawer';
import ScrollToTop from '../../Reusable/ScrollToTop';
import ServiziInclusiModal from './ServiziInclusiModal';
import { useNavigate } from 'react-router-dom';

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

            <div >
                <p className='text-[#00B27A] Brevia850 text-[50px] xmd:text-[42px] md:text-[32px] sm:text-[32px] text-center my-2 w-[80%] xl:w-[50%]  lg:w-[50%]  mx-auto'>Calcola un preventivo! <br></br> Fai crescere la tua attività con un piano su misura per te</p>
                <p className='text-[#114653] Brevia700 text-[36px] xmd:text-[30px] md:text-[28px] sm:text-[23px] italic text-center'>Fino a 1400€ di credito pubblicitario in omaggio all’anno</p>
                <p className='text-[#114653] pop500 text-[24px] xmd:text-[22px] md:text-[20px] sm:text-[23px]  text-center w-[80%] mx-auto' >Seleziona uno o più pacchetti in base ai tuoi obiettivi: paga solo quello che ti serve, quando ti serve davvero.</p>
            </div>

            <div className="  flex flex-row sm:flex-col sm:h-fit w-[78.5%] lg:w-[95%] px-[40px]  sm:w-full  justify-between  xmd:w-[98%] md:w-[98%] mx-auto  h-[700px] my-10 ">

                <div className='flex flex-col h-full sm:gap-y-5 w-[38%] xmd:w-[40%] md:w-[42%] sm:w-[95%] sm:mx-auto justify-between '>


                    <OfferMobile />


                    <div className={`${isChoosen.includes(1) ? "bg-[#00B27A]" : "bg-white"}  border-4 border-black w-full flex flex-col h-[210px] sm:h-fit py-5 xmd:py-3 px-3 `}>
                        <div className="flex flex-row justify-between xsm:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse ">
                            <div>
                                <p className={`${isChoosen.includes(1) ? "text-white" : "text-[#00B27A]"} Brevia700 text-4xl   xmd:text-2xl md:text-lg sm:text-2xl`}>L’Espresso</p></div>

                                <div className='flex flex-row items-center justify-end w-full '>
                                <p className={`${isChoosen.includes(1) ? "text-white" : "text-black"} pop700 text-base  xmd:text-[11px] md:text-[9px] sm:text-[12px]`}>Scegli l’obiettivo</p>
                                <CheckBox id={1} SetChoose={SetChoose} isChoosen={isChoosen} />
                            </div>
                            
                            
                          
                        </div>


                        <div className="flex flex-row mt-5 mb-9 ">
                        <p className={`${isChoosen.includes(1) ? "text-white" : "text-black"} pop500 text-base xmd:text-lg md:text-[10px]  sm:text-lg`}>Coinvolgi gli utenti nel Delivery</p>
                        </div>

                        <div className="flex flex-row justify-between w-full items-end xsm:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse ">
                      

                            

                            <p onClick={() => handleOpen("espresso")} className={`${isChoosen.includes(1) ? "text-white" : "text-black"} hover:cursor-pointer pop700 text-base underline  xmd:text-[12px] md:text-[9px] sm:text-[12px]`}>Scopri i servizi inclusi</p>
                            <p className={`${isChoosen.includes(1) ? "text-white" : "text-black"} Brevia700 text-xl  xmd:text-[12px] md:text-[9px] sm:text-[14px]`}>
                                {isChoosen.length !== 0 && !isChoosen.includes(1) && <span className='pop700  text-[14px] xmd:text-[10px] md:text-[8px] sm:text-[12px] block'>Aggiungi per </span>}
                                {(isChoosen.length === 0 || (isChoosen.length === 1 && isChoosen.includes(1))) && !Annual ?
                                    "300,00 €/"
                                    : (isChoosen.length === 1 && !isChoosen.includes(1)) && !Annual ?
                                        "50,00 €/" :
                                        (isChoosen.length === 2 && isChoosen.includes(1)) && !Annual ? "175,00 €/" :
                                            (isChoosen.length === 2 && !isChoosen.includes(1)) && !Annual ? "50,00 €/" :
                                                isChoosen.length === 3 && !Annual && "133,30 €/"}
                                {(isChoosen.length === 0 || (isChoosen.length === 1 && isChoosen.includes(1))) && Annual ?
                                    "3.300,00 €/"
                                    : (isChoosen.length === 1 && !isChoosen.includes(1)) && Annual ?
                                        "450,00 €/" :
                                        (isChoosen.length === 2 && isChoosen.includes(1)) && Annual ? "1.875,00 €/" :
                                            (isChoosen.length === 2 && !isChoosen.includes(1)) && Annual ? "450,00 €/" :
                                                isChoosen.length === 3 && Annual && "1.400,00 €/"}
                                <span className='pop500  text-[12px]  xmd:text-[9px] md:text-[9px] sm:text-[11px]'>{Annual ? "anno" : "mese"}</span> <span className='pop700  text-[12px] xmd:text-[10px] md:text-[8px] sm:text-[12px]'>+ IVA</span></p>
                        </div>

                    </div>



                    <div className={`${isChoosen.includes(2) ? "bg-[#00B27A]" : "bg-white"}  border-4 border-black w-full flex flex-col h-[210px] sm:h-fit py-5 xmd:py-3 px-3 `}>
                        <div  className="flex flex-row justify-between xsm:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse ">
                        <div className='flex flex-row  w-full '>
                                <p className={`${isChoosen.includes(2) ? "text-white" :  "text-[#00B27A]"} Brevia700 text-4xl  xmd:text-2xl md:text-lg sm:text-2xl`}>Il Viandante</p>
                               
                            </div>

                            <div className='flex flex-row items-center justify-end  w-full '>
                            <p className={`${isChoosen.includes(2) ? "text-white" : "text-black"} pop700 text-base  xmd:text-[11px] md:text-[9px] sm:text-[12px]`}>Scegli l’obiettivo</p>
                                <CheckBox id={2} SetChoose={SetChoose} isChoosen={isChoosen} />
                            </div>
                            
                        </div>




                            
                        <div className="flex flex-row mt-5 mb-9 ">
                        <p className={`${isChoosen.includes(2) ? "text-white" : "text-black"} pop500 text-base xmd:text-lg md:text-[10px]  sm:text-lg`}>Porta più gente a conoscere il tuo locale</p>
                        </div>

                        <div className="flex flex-row justify-between w-full items-end xsm:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse ">

                            <p onClick={() => handleOpen("viandante")} className={`${isChoosen.includes(2) ? "text-white" : "text-black"} hover:cursor-pointer pop700 text-base underline  xmd:text-[12px] md:text-[9px] sm:text-[12px]`}>Scopri i servizi inclusi</p>
                            <p className={`${isChoosen.includes(2) ? "text-white" : "text-black"} Brevia700 text-xl  xmd:text-[12px] md:text-[9px] sm:text-[14px]`}>
                                {isChoosen.length !== 0 && !isChoosen.includes(2) && <span className='pop700  text-[14px] xmd:text-[10px] md:text-[8px] sm:text-[12px] block'>Aggiungi per </span>}
                                {(isChoosen.length === 0 || (isChoosen.length === 1 && isChoosen.includes(2))) && !Annual ?
                                    "300,00 €/"
                                    : (isChoosen.length === 1 && !isChoosen.includes(2)) && !Annual ?
                                        "50,00 €/" :
                                        (isChoosen.length === 2 && isChoosen.includes(2)) && !Annual ? "175,00 €/" :
                                            (isChoosen.length === 2 && !isChoosen.includes(2)) && !Annual ? "50,00 €/" :
                                                isChoosen.length === 3 && !Annual && "133,30 €/"}
                                {(isChoosen.length === 0 || (isChoosen.length === 1 && isChoosen.includes(2))) && Annual ?
                                    "3.300,00 €/"
                                    : (isChoosen.length === 1 && !isChoosen.includes(2)) && Annual ?
                                        "450,00 €/" :
                                        (isChoosen.length === 2 && isChoosen.includes(2)) && Annual ? "1.875,00 €/" :
                                            (isChoosen.length === 2 && !isChoosen.includes(2)) && Annual ? "682,00 €/" :
                                                isChoosen.length === 3 && Annual && "1.400,00 €/"}

                                <span className='pop500  text-[12px]  xmd:text-[9px] md:text-[9px] sm:text-[11px]'>{Annual ? "anno" : "mese"}</span> <span className='pop700  text-[12px] xmd:text-[10px] md:text-[8px] sm:text-[12px]'>+ IVA</span></p>
                        </div>
                    </div>

                    

                    <div className={`${isChoosen.includes(3) ? "bg-[#00B27A]" : "bg-white"}  border-4 border-black w-full flex flex-col h-[210px] sm:h-fit py-5 xmd:py-3 px-3 `}>
                    <div  className="flex flex-row justify-between xsm:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse ">
                        <div className='flex flex-row   w-full '>
                                <p className={`${isChoosen.includes(3) ? "text-white" : "text-[#00B27A]"} Brevia700 text-4xl xmd:text-2xl md:text-lg sm:text-4xl xsm:text-center sm:text-center  md:text-center xsm:mx-auto sm:mx-auto  md:mx-auto `}>A Tavola</p>
                               
                            </div>

                            <div className='flex flex-row items-center justify-end w-full '>
                            <p className={`${isChoosen.includes(3) ? "text-white" : "text-black"} pop700 text-base  xmd:text-[11px] md:text-[9px] sm:text-[12px]`}>Scegli l’obiettivo</p> 
                            <CheckBox id={3} SetChoose={SetChoose} isChoosen={isChoosen} />
                            </div>


                           
                        </div>

                        


                        <div className="flex flex-row mt-5 mb-9  sm:mt-3">
                        <p className={`${isChoosen.includes(3) ? "text-white" : "text-black"} pop500 text-base xmd:text-lg md:text-[10px] xsm:mx-auto sm:mx-auto  md:mx-auto sm:text-lg`}>I tuoi tavoli sempre occupati</p>
                        </div>

                        <div className="flex flex-row justify-between w-full items-end xsm:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse ">


                        <p onClick={() => handleOpen("tavola")} className={`${isChoosen.includes(3) ? "text-white" : "text-black"} hover:cursor-pointer pop700 text-base underline  xmd:text-[12px] md:text-[9px] sm:text-[12px]`}>Scopri i servizi inclusi</p>
                            <p className={`${isChoosen.includes(3) ? "text-white" : "text-black"} Brevia700 text-xl  xmd:text-[12px] md:text-[25px] sm:text-[25px]`}>
                                {isChoosen.length !== 0 && !isChoosen.includes(3) && <span className='pop700  text-[14px] xmd:text-[10px] md:text-[8px] sm:text-[12px] block'>Aggiungi per </span>}
                                {(isChoosen.length === 0 || (isChoosen.length === 1 && isChoosen.includes(3))) && !Annual ?
                                    "300,00 €/"
                                    : (isChoosen.length === 1 && !isChoosen.includes(3)) && !Annual ?
                                        "50,00 €/" :
                                        (isChoosen.length === 2 && isChoosen.includes(3)) && !Annual ? "175,00 €/" :
                                            (isChoosen.length === 2 && !isChoosen.includes(3)) && !Annual ? "50,00 €/" :
                                                isChoosen.length === 3 && !Annual && "133,30 €/"}
                                {(isChoosen.length === 0 || (isChoosen.length === 1 && isChoosen.includes(3))) && Annual ?
                                    "2790,00 €/"
                                    : (isChoosen.length === 1 && !isChoosen.includes(3)) && Annual ?
                                        "450,00 €/" :
                                        (isChoosen.length === 2 && isChoosen.includes(3)) && Annual ? "1,729,00 €/" :
                                            (isChoosen.length === 2 && !isChoosen.includes(3)) && Annual ? "450,00 €/" :
                                                isChoosen.length === 3 && Annual && "1.400,00 €/"}
                                <span className='pop500  text-[12px]  xmd:text-[9px] md:text-[9px] sm:text-[11px]'>{Annual ? "anno" : "mese"}</span> <span className='pop700  text-[12px] xmd:text-[10px] md:text-[8px] sm:text-[12px]'>+ IVA</span></p>
                        </div>
                    </div>

                </div>

                {isChoosen.length !== 0 && !open &&
                    <button onClick={() => setOpen(true)} className="  fixed bottom-0  z-10 m-5 lg:hidden xl:hidden md:hidden xmd:hidden animate__animated animate__rubberBand">
                        <Fab color="sucess" style={{ backgroundColor: "#FC6371" }} >
                            <MdOutlineOpenInFull size={25} color="white" />
                        </Fab>
                    </button>
                }

                <BottomDrawer open={open} setOpen={setOpen} Annual={Annual} SetAnnual={SetAnnual} isChoosen={isChoosen} />



                {isChoosen.length === 0 && <NoChoice />}
                {isChoosen.length === 1 && <OneChoice Annual={Annual} SetAnnual={SetAnnual} isChoosen={isChoosen} onClick={goToRegister} />}
                {isChoosen.length === 2 && <TwoChoices Annual={Annual} SetAnnual={SetAnnual} isChoosen={isChoosen} onClick={goToRegister} />}
                {isChoosen.length === 3 && <ThreeChoices Annual={Annual} SetAnnual={SetAnnual} isChoosen={isChoosen} onClick={goToRegister} />}

            </div>

            <div className='w-full h-[240px] bg-[#00B27A] flex flex-col items-center justify-evenly mb-10'>
                <p className='Brevia700 text-3xl sm:text-2xl text-white text-center'>Indeciso su quale piano scegliere? <br />
                    Chiamaci per una consulenza gratuita</p>
                    <a href="tel:+390500988606">
                <p className='Brevia850 text-4xl sm:text-3xl text-white text-center flex gap-x-2'><span><FaPhoneAlt /></span> + 39 050 0988606</p>
                </a>
                </div>


            <div className='flex flex-row sm:flex-col-reverse sm:h-fit w-[78.5%] lg:w-[95%] px-[40px]  sm:w-full   xmd:w-[98%] md:w-[98%] mx-auto   my-10'>
                <div className='w-1/2 md:w-2/3 sm:w-full text-left flex flex-col sm:p-5 py-20 xmd:py-10 md:py-5 gap-y-6'>
                    <p className='Brevia850 text-5xl md:text-3xl sm:text-2xl text-[#00B27A] w-full'>Hai bisogno di un consiglio? Parla con un nostro esperto</p>
                    <p className='pop700 text-3xl md:text-xl sm:text-lg text-black'>Il nostro supporto clienti</p>
                    <div className='flex flex-row gap-x-4 w-full'>
                        <div className='w-5 h-5 md:h-4 md:w-4  md:mt-2 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl md:text-lg sm:text-lg text-black w-[90%]'><span className='pop700'>Non sai da dove cominciare? </span>Niente paura! Un nostro esperto di marketing studierà per te un piano efficace con cui raggiungere i tuoi obiettivi.</p>
                    </div>
                    <div className='flex flex-row gap-x-4 w-full'>
                        <div className='w-5 h-5 md:h-4 md:w-4  md:mt-2 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
                        <p className='pop500 text-xl md:text-lg sm:text-lg text-black w-[90%]'><span className='pop700'>Siamo sempre con te. </span> Il nostro team di assistenza è a tua disposizione per assicurarti di raggiungere i tuoi obiettivi con la piattaforma Restaurants Club.</p>
                    </div>
                    <button  className='w-[50%] md:w-[75%] sm:w-[75%] h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>
                    <a href="tel:+390500988606"> <p className='pop500 text-black md:text-[14px]'>Chiama il team di assistenza</p>
                    </a></button>
                    <a href="tel:+390500988606">

                     <p className='pop500 text-xmd underline text-black sm:text-sm xmd:text-sm'>Oppure ricevi un consiglio da un nostro esperto</p>

                    </a>
                </div>
                <div className='w-1/2 md:w-1/3 sm:w-full flex items-center justify-center'>
                    <img src={Image} alt="hero" className='h-[650px] md:h-[300px] sm:h-[300px]' />
                </div>
            </div>
            <div className='flex flex-col sm:h-fit w-[78.5%] lg:w-[95%] px-[40px] sm:w-full xmd:w-[98%] md:w-[98%] mx-auto '>
            <p className='text-[#00B27A] Brevia850 text-[50px] xmd:text-[42px] md:text-[40px] sm:text-[35px] text-center my-6'>FAQ</p>
            <FAQ />
</div>

            <ServiziInclusiModal open={Modalopen} handleClose={handleClose} ModalType={ModalType} />

        </div>
    )
}

export default Pricing