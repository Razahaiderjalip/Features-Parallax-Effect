import React from 'react';
import RestaurantsIcon3 from "../Assets/RestaurantsClubLogoBeta.svg";
import ScrollToButton from '../Reusable/ScrollToButton';
import NavMobileBeta from './NavMobileBeta';

function NavBarBeta() {

    return (
        <>

<NavMobileBeta />

            <div className="flex flex-col xsm:hidden sm:hidden md:hidden xmd:hidden  w-full z-50">
                <div className='h-[50px] w-full bg-white z-50 items-center justify-center flex ' >
                    <p className='text-black text-xl xmd:text-lg   tracking-wide pop500 uppercase'>Fino a 150€ di credito pubblicitario OMAGGIO</p>
                </div>
                <div className=' w-[71%] px-[40px] flex flex-row items-center justify-evenly z-50 mx-auto py-1 h-28 bg-transparent relative'>
                    <div className=' w-[35%]   mx-auto self-center '>
                        <img src={RestaurantsIcon3} alt="logo" className='ml-auto lg:w-[80%] hover:cursor-pointer ' />
                    </div>
                    <div className='flex flex-row w-[80%] items-center justify-evenly pt-3 z-50'>

                        <ScrollToButton toId="wirc"> <p className='pop500 hover:cursor-pointer xmd:text-[12px] text-white'>Cos’è Restaurants Club </p> </ScrollToButton>
                        <ScrollToButton toId="wibp"> <p  className='pop500 hover:cursor-pointer xmd:text-[12px] text-white'>Funzioni</p> </ScrollToButton>
                        <ScrollToButton toId="contactform"> <p  className='pop500 hover:cursor-pointer xmd:text-[12px] text-white'>Contatti</p> </ScrollToButton>


                        <ScrollToButton toId="contactform">

                            <button  className='px-6 xmd:px-3 bg-white h-10 border-[3px] border-black items-center flex justify-center '>

                                <p className='pop600 text-sm xmd:text-xs'>Prova il servizio</p>

                            </button>

                        </ScrollToButton>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBarBeta
