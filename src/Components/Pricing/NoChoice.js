import React from 'react'

function NoChoice() {
    return (
        <div className=' bg-white border-4 sm:border-none border-black w-[61%] xmd:w-[59%] md:w-[57%] sm:w-[95%] sm:mx-auto flex flex-row sm:flex-col sm:gap-y-8 h-[700px] sm:hidden xsm:hidden'>
            <div className='w-1/2 sm:w-full h-full flex flex-col gap-y-16 sm:gap-y-4 sm:border-4 sm:border-black items-center justify-evenly'>
                <div className='gap-y-6 flex flex-col p-4'>
                    <p className='Brevia850 text-5xl xmd:text-3xl md:text-xl sm:text-4xl text-center text-[#FC6371] tracking-wider'>Consigliato <br /> per te</p>
                    <p className='pop500 text-3xl xmd:text-xl md:text-[14px] sm:text-2xl text-center text-black'>Scegli due pacchetti tra:<span className='block pop700'> L’Espresso, A Tavola, Il Viandante</span></p>
                </div>
                <div className='gap-y-6 flex flex-col p-4'>
                    <p className='text-black Brevia700 text-5xl xmd:text-2xl md:text-lg sm:text-3xl sm:text-center md:text-center xmd:text-center'>300,00 €/ <span className='pop500 text-[26px] md:text-[20px]'>mese</span> <span className='pop700  text-[16px]'>+ IVA</span></p>
                    <p className='font-sans text-[16px] sm:text-[14px] xmd:text-[12px] md:text-[12px] text-center text-[#AAAAAA]'>Contratto trimestrale pagamento totale 900,00€ +IVA</p>
                </div>
            </div>
            <div className='w-1/2 sm:w-full h-full flex flex-col items-center '>
                <div className='flex flex-col h-[35%] sm:h-fit sm:py-5 bg-[#FC6371] w-full justify-around'>
                    <p className='Brevia850 text-4xl sm:text-3xl xmd:text-2xl md:text-xl text-center text-white '>Per te in omaggio <br />
                        il primo mese<br />
                        215,00€</p>
                    <p className=' text-lg sm:text-[16px] xmd:text-[16px] md:text-[14px]  text-center text-white'>in credito pubblicitario</p>
                    <p className=' text-lg sm:text-[16px] xmd:text-[16px] md:text-[14px] text-center text-white'>Dal secondo trimestre <span className="font-bold">200,00 €</span> in <br />
                        credito pubblicitario</p>
                </div>
                <div className='bg-[#F6F6F4] flex flex-col h-[65%] w-full justify-around px-5 sm:hidden xsm:hidden'>
                    <p className='text-[#00B27A] Brevia700 text-3xl xmd:text-2xl md:text-xl'>Servizi Extra</p>
                    <p className='text-xl xmd:text-lg md:text-[13px] text-black pop500'>Se scegli<span className='pop700'> Il Viandante</span> insieme a<br /><span className='pop700'> L’Espresso</span> avrai<span className='pop700'> Prenota con Google</span></p>
                    <p className='text-xl xmd:text-lg md:text-[13px] text-black pop500'>Se scegli<span className='pop700'> Il Viandante</span> insieme a<br /><span className='pop700'> A Tavola</span> avrai<span className='pop700'> Pulsante Delivery su Google</span></p>
                    {/* <button className='w-[80%] mx-auto h-16 md:h-14 bg-[#E5E5E5] border-2 border-white text-white pop700 text-xl xmd:text-lg md:text-lg' disabled={true}>
                        Prosegui
                    </button>*/}
                </div>
            </div>
        </div>
    )
}

export default NoChoice