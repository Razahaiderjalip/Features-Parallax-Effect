import React from 'react'

function OfferMobile() {
    return (
        <div className=' bg-white border-none border-black w-full mx-auto  flex-col gap-y-8 h-fit lg:hidden xl:hidden xmd:hidden md:hidden xl:hidden'>
            <div className='w-full h-full flex flex-col gap-y-2 border-4 border-black items-center justify-evenly'>
                <div className='gap-y-4 flex flex-col p-4'>
                    <p className='Brevia850 text-3xl text-center text-[#FC6371] tracking-wider'>Consigliato <br /> per te</p>
                    <p className='pop500 text-xl text-center text-black'>Scegli due pacchetti tra:<span className='block pop700'> L’Espresso, A Tavola, Il Viandante</span></p>
                </div>
                <div className='gap-y-4 flex flex-col p-4'>
                    <p className='text-black Brevia700 text-2xl text-center'>300,00 €/ <span className='pop500 text-[26px] '>mese</span> <span className='pop700  text-[16px]'>+ IVA</span></p>
                    <p className='font-sans text-[14px] text-center text-[#AAAAAA]'>Contratto trimestrale pagamento totale 900,00€ +IVA</p>
                </div>
            </div>
            <div className=':w-full h-full flex flex-col items-center  mt-5'>
                <div className='flex flex-col h-fit py-5 bg-[#FC6371] w-full justify-around'>
                    <p className='Brevia850 text-3xl text-center text-white '>Per te in omaggio <br />
                        il primo mese*<br />
                        215,00€</p>
                    <p className='text-[16px]  text-center text-white'>in credito pubblicitario</p>
                    <p className='text-[16px] text-center text-white'>*Dal secondo trimestre 200,00 € in <br />
                        credito pubblicitario</p>
                </div>
            </div>
        </div>
    )
}

export default OfferMobile