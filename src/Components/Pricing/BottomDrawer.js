import React from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import GiftImage from "../../Assets/Gift.png"
function BottomDrawer({ open, setOpen, SetAnnual, Annual, isChoosen }) {

    const handleClose = () => setOpen(false);
    return (
        <BottomSheet
            open={open}
            onDismiss={() => setOpen(false)}
        >
            <div className='py-5 flex flex-col gap-y-3 relative'>

                <button onClick={handleClose}  className='m-5'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00B27A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
          
                <p className='Brevia850 text-3xl text-center text-[#FC6371] relative'>{isChoosen.length === 1 ? "1 Pacchetto" : isChoosen.length === 2 ? "2 Pacchetti" : isChoosen.length === 2 ? "3 Pacchetto" :"4 Pacchetti"}</p>
                <div className='flex flex-row w-[95%] mx-auto'>
                    <button onClick={() => SetAnnual(false)} className={`w-1/2 h-10 ${!Annual ? "bg-[#FC6371] text-white" : "bg-white text-black"} border-y-4 border-l-4 border-black pop500 text-[14px] `}>   Paga trimestralmente </button>
                    <button onClick={() => SetAnnual(true)} className={`w-1/2 h-10 ${Annual ? "bg-[#FC6371] text-white" : "bg-white text-black"} border-4 border-black pop500 text-[14px]`}> Paga annualmente</button>
                </div>
                <p className='text-[#FC6371] Brevia700 text-3xl text-center pb-3 border-b-2 border-[#9C9C9C]'>
                    {isChoosen.length === 1 && Annual && "3300,00 €/"}
                    {isChoosen.length === 1 && !Annual && "300,00 €/"}
                    {isChoosen.length === 2 && Annual && "3750,00 €/"}
                    {isChoosen.length === 2 && !Annual && "350,00 €/"}
                    {isChoosen.length === 3 && Annual && "4200,00 €/"}
                    {isChoosen.length === 3 && !Annual && "400,00 €/"}

                    <span className='pop500 text-[26px]  text-black'>{Annual ? "anno" : "mese"}</span>
                    <span className='pop700  text-[16px] text-black'>+ IVA</span></p>
                {Annual ? <p className='font-sans text-[16px] text-center text-[#9C9C9C]'>Potrai rateizzare il tuo pagamento trimestralmente</p> : <p className='font-sans text-[16px] text-center text-[#9C9C9C]'>Contratto trimestrale pagamento totale 1050,00€ +IVA</p>}

                <div className='py-4 flex flex-col gap-y-2 bg-[#00B27A]'>
                    <p className='text-white pop700 text-lg text-center'>Per te in omaggio il primo mese*</p>
                    <p className='text-white pop100 text-lg text-center'>250,00 € in credito pubblicitario</p>
                    <p className='text-white pop400 text-sm text-center '>*Dal secondo trimestre 150,00 € in credito pubblicitario</p>

                </div>
                {isChoosen.length === 1 &&
                    <>
                        <p className='text-black pop700 text-lg text-center px-4'>
                            Scegli "Il Viandante" insieme ad Express per avere
                            la funzione Reserve With Gooogle</p>
                        <div className='flex flex-row justify-evenly w-[95%] mx-auto'>
                           
                            <button className={`w-full h-10 bg-[#DCFFCF] text-black border-4 border-black pop500 text-[14px]`}>Aggiungi "Il Viandante"</button>
                        </div>
                    </>
                }
                {isChoosen.length === 2 &&
                    <div className='flex flex-col gap-y-4 '>
                        <img src={GiftImage} alt="" className='w-[50%] object-contain mx-auto' />
                        <p className='text-[#FC6371] Brevia700 text-2xl text-center'>Congratulazioni!</p>
                        <p className='text-xl md:text-[16px] text-black pop500 text-center'>Hai sbloccato  la funzione <span className='pop700 block'> Reserve With Google!</span> </p>
                        <button onClick={() => SetAnnual(true)} className={`w-[40%] mx-auto h-10 bg-[#DCFFCF] text-black border-4 border-black pop500 text-[14px]`}>Conferma</button>
                    </div>}
                {isChoosen.length === 3 &&
                    <div className='flex flex-col gap-y-4 '>
                        <img src={GiftImage} alt="" className='w-[50%] object-contain mx-auto' />
                        <p className='text-[#FC6371] Brevia700 text-2xl text-center'>Congratulazioni!</p>
                        <p className='text-xl md:text-[16px] text-black pop500 text-center'>Hai sbloccato  la funzione <span className='pop700 block'> Reserve With Google e Delivery Button su GMB!</span> </p>
                        <button onClick={() => SetAnnual(true)} className={`w-[40%] mx-auto h-10 bg-[#DCFFCF] text-black border-4 border-black pop500 text-[14px]`}>Conferma</button>
                    </div>
                }

                {isChoosen.length === 4 &&
                    <div className='flex flex-col gap-y-4 '>
                        
                        <p className='text-[#FC6371] Brevia700 text-2xl text-center'>Che si fa</p>
                        <p className='text-xl md:text-[16px] text-black pop500 text-center'>Hai sbloccato  la funzione <span className='pop700 block'> Reserve With Google e Delivery Button su GMB!</span> </p>
                        <button onClick={() => SetAnnual(true)} className={`w-[40%] mx-auto h-10 bg-[#DCFFCF] text-black border-4 border-black pop500 text-[14px]`}>Conferma</button>
                    </div>
                }
            </div>
        </BottomSheet>
    )
}

export default BottomDrawer