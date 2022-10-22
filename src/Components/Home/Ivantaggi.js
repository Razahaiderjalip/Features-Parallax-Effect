import React from 'react'
import { useNavigate } from 'react-router-dom';

import ScrollToButton from '../../Reusable/ScrollToButton';
import HerImage from "./Img/Keyboard_arrow_down.svg"

import Surf from "./Img/Surf.svg"
import Surf1 from "./Img/Surf1.svg"
import Pc from "./Img/pc.svg"


function Ivantaggi() {

    const navigate = useNavigate    

    const goToRegister = () => {
        navigate("/register");
    };

    const goToBeta = () => {
        navigate("/beta");
    };

    return (
<div className="py-8 sm:h-fit sm:gap-y-7 sm:py-8 flex flex-col gap-y-5 items-center  bg-[#F6F6F4]  h-fit relative ">

<div className='w-full xl:w-[80%] px-[40px] mx-auto flex flex-row xsm:flex-col sm:flex-col  md:flex-col    gap-x-10 xsm:gap-y-20 sm:gap-y-20 md:gap-y-20 xmd:gap-y-20 pb-[10px] pt-3'>

<div className=' w-1/3 xsm:w-full sm:w-full  md:w-1/2  xmd:w-full  mx-auto flex flex-col  '>
<div className='h-fit xsm:w-1/2 sm:w-1/2  mx-auto flex items-center justify-center w-1/2 m-2'>
                        <img src={Surf} alt="hero" className='h-[60%] xsm:w-[40%] sm:w-[40%] md:w-[40%]' />
                    </div>
<p className='pop700  not-italic font-bold leading-10 text-base text-center text-black  mb-[15px] '>(Ri)prenditi i tuoi clienti </p>
<p className='pop500  not-italic font-normal leading-6 text-sm text-center text-black'>Crea e gestisci la tua base clienti autonomamente con i migliori strumenti: niente più marketplace che ti sottraggono fatturato e contatti </p>

</div>

<div className=' w-1/3 xsm:w-full sm:w-full md:w-1/2    xmd:w-full  mx-auto flex flex-col   '>
<div className='h-fit xsm:w-1/2 sm:w-1/2 mx-auto  flex items-center justify-center w-1/2 m-2'>
                        <img src={Pc} alt="hero" className='h-[60%] xsm:w-[40%] sm:w-[40%] md:w-[40%]' />
                    </div>
<p className='pop700  not-italic font-bold leading-10 text-base text-center text-black  mb-[15px] '>Digitalizzati in modo efficace </p>
<p className='pop500  not-italic font-normal leading-6 text-sm text-center text-black'>Avere un sito o un’app non basta: per essere efficace online bisogna usare i giusti strumenti di marketing digitale </p>

</div>

<div className=' w-1/3 xsm:w-full sm:w-full md:w-1/2  xmd:w-full  mx-auto flex flex-col '>
<div className='h-fit xsm:w-1/2 sm:w-1/2 mx-auto  flex items-center justify-center w-1/2 m-2 '>
                        <img src={Surf1} alt="hero" className='h-[60%] xsm:w-[40%] sm:w-[40%] md:w-[40%] ' />
                    </div>
<p className='pop700  not-italic font-bold leading-10 text-base text-center text-black  mb-[15px]   '>Stai sempre sulla cresta dell’onda </p>
<p className='pop500  not-italic font-normal leading-6 text-sm text-center text-black'>Nulla è lasciato al caso quando si tratta della tua cucina: la stessa cura è fondamentale per trasmettere il valore del tuo ristorante </p>

</div>


</div>

<div className=' w-[78.5%] px-[40px] mx-auto flex flex-row gap-x-3 pb-[24px] '>
 
<div className=' w-[77px] mx-auto flex'>

                            <ScrollToButton toId="wibx" className=''>

                               

                                <img src={HerImage} alt="hero" className='' />

                            

                            </ScrollToButton>
</div>
</div>

        </div>
    )
}

export default Ivantaggi