import React from 'react'
import GiftImage from "../../Assets/Gift.png"
import { useNavigate } from "react-router-dom"
function TwoChoices({ SetAnnual, Annual, isChoosen, onClick }) {
    const navigate = useNavigate()
    return (
        <div className=' bg-white border-4 border-black w-[61%] xmd:w-[59%] md:w-[57%] flex flex-row h-[700px] sm:hidden xsm:hidden'>
            <div className='w-1/2 h-full flex flex-col gap-y-16 md:gap-y-10 xmd:gap-y-10 items-center justify-between pb-10 pt-4 '>
                <div className='flex flex-row w-[95%] mx-auto'>
                    <button onClick={() => SetAnnual(false)} className={`w-1/2 h-14 md:h-12 ${!Annual ? "bg-[#FC6371] text-white" : "bg-white text-black"} border-y-4 border-l-4 border-black pop500 md:text-[10px] xmd:text-[14px]`}>   Paga trimestralmente </button>
                    <button onClick={() => SetAnnual(true)} className={`w-1/2 h-14 md:h-12 ${Annual ? "bg-[#FC6371] text-white" : "bg-white text-black"} border-4 border-black pop500 md:text-[10px] xmd:text-[14px]`}> Paga annualmente</button>
                </div>
                <p className='Brevia850 text-5xl xmd:text-4xl md:text-3xl text-center text-[#FC6371] '>2 Pacchetti</p>
                <p className='pop500 text-3xl xmd:text-2xl md:text-xl text-center text-black'>Obiettivi scelto <span className='block pop700'> {isChoosen.includes(1) && isChoosen.includes(2) ? "L’Espresso e Il Viandante" : isChoosen.includes(1) && isChoosen.includes(3) ? "L’Espresso e A Tavola" : isChoosen.includes(2) && isChoosen.includes(3) ? "Il Viandante e A Tavola" : null}</span></p>
                {Annual && <p className='pop700 text-5xl xmd:text-4xl md:text-3xl text-center text-[#AAAAAA] line-through'>4200 €</p>}
                <p className='text-[#FC6371] Brevia700 text-5xl xmd:text-3xl md:text-3xl md:text-center xmd:text-center'>{Annual ? "3750,00€/" : "350,00 €/"} <span className='pop500 text-[26px] md:text-[20px] text-black'>{Annual ? "anno" : "mese"}</span> <span className='pop700  text-[16px] text-black'>+ IVA</span></p>
                {Annual ? <p className='font-sans text-xl xmd:text-lg md:text-lg  text-center text-black'>Potrai rateizzare il tuo pagamento <br />trimestralmente</p> : <p className='font-sans text-md text-center text-[#AAAAAA]'>Contratto trimestrale pagamento totale 1050,00€ +IVA</p>}

            </div>
            <div className='w-1/2 h-full flex flex-col items-center '>
                <div className='flex flex-col h-[35%] bg-[#FC6371] w-full justify-around'>

                    <p className='Brevia850 text-3xl xmd:text-2xl md:text-xl text-center text-white w-full'>

                        Per te in omaggio 400,00€ <br />

                        in credito pubblicitario <br />

                        il primo mese

                    </p>

                    <p className=' text-xl xmd:text-[16px] md:text-[16px] text-center text-white'>Dal secondo trimestre <span className="font-bold">

                        200,00 €</span> in <br />
                        credito pubblicitario ogni trimestre</p>
                </div>
                <div className='bg-[#F6F6F4] flex flex-col h-[65%] w-full justify-evenly px-5'>
                    {isChoosen.includes(1) && isChoosen.includes(3) ?
                        <div className='flex flex-col gap-y-7'>

                            <p className='text-[#00B27A] Brevia700 text-3xl xmd:text-2xl md:text-x '>Servizi Extra</p>
                            <p className='text-xl xmd:text-[16px] md:text-[16px]  text-black pop500'>Se scegli
                                <span className='pop700'> Il Viandante</span>insieme a<br />
                                <span className='pop700'>L’Espresso e A Tavola</span>
                                avrai
                                <span className='pop700'>Prenota con Google e Pulsante Delivery su Google!</span>
                            </p>
                        </div>
                        :

                        <div className='flex flex-col gap-y-4 '>
                            <p className='text-[#00B27A] Brevia700 text-4xl xmd:text-2xl md:text-lg text-center'>Congratulazioni!</p>
                            <p className='text-xl md:text-[16px]  text-black pop500 text-center'>Hai sbloccato {isChoosen.includes(1) && isChoosen.includes(2) && <span className='pop700'> Pulsante Delivery su Google! </span>} {isChoosen.includes(2) && isChoosen.includes(3) && <span className='pop700'> prenota con Google! </span>} </p>
                            <img src={GiftImage} alt="" className='w-[30%] md:w-[80%] xmd:w-[60%]  object-contain mx-auto' />
                        </div>




                    }
                    {/* <button onClick={() => navigate("/register")} className='w-[80%] mx-auto h-16 md:h-12 bg-[#DCFFCF] border-2 border-black text-black pop700 text-xl md:text-lg' >
                        Prosegui
                    </button>*/}
                </div>
            </div>
        </div>
    )
}

export default TwoChoices