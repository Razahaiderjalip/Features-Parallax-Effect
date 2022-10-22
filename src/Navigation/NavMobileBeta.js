import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { BsPersonCircle } from "react-icons/bs"
import RestaurantsIcon1 from "../Assets/RClogoWhite.svg"
import RestaurantsIcon from "../Assets/LogoBlob.svg"

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom"
import Typography from '@mui/material/Typography';

import ScrollToButton from '../Reusable/ScrollToButton';

function NavMobile() {
    const navigate = useNavigate()

    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const [open, setOpen] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick2 = () => {
        navigate("/")
        setOpen2(!open2);
    };


    return (
        <div className="flex flex-col lg:hidden  xl:hidden">

            <div className='h-[70px] w-full bg-[#114653] items-center justify-center ' >

                <p className='flex w-full h-full justify-center items-center text-white sm:text-[0.9rem] md:text-[0.9rem] pop500 uppercase '>Fino a 150€ di credito pubblicitario OMAGGIO</p>

            </div>

            <div className="flex flex-col duration-300 transition-all z-10 w-full items-center  justify-evenly  py-2  ">

                <div className=' w-1/3 sm:w-2/3 mx-auto my-5 xsm:hidden sm:hidden'>
                    <img src={RestaurantsIcon} alt="logo" className='w-full h-full ' onClick={() => {
                            navigate("/")

                        }}/>
                        </div>

  <div className=' w-1/3 sm:w-2/3 mx-auto my-5 md:hidden xmd:hidden'>
                    <img src={RestaurantsIcon1} alt="logo" className='w-full h-full ' onClick={() => {
                            navigate("/")

                        }}/>
                </div>

                <div className='xsm:hidden sm:hidden flex flex-row gap-10 py-2 w-full bg-white '>
                        <div className='flex w-1/3  justify-center '>
                        <ScrollToButton toId="wirc"> <p className='pop600 hover:cursor-pointer text-lg text-[#114653] text-center '>Piattaforma </p> </ScrollToButton>
                        </div>
                        <div className='flex w-1/3  items-center justify-center  '>
                        <ScrollToButton toId="wibp"> <p  className='pop600 hover:cursor-pointer text-lg  text-[#114653] text-center '>Funzioni</p> </ScrollToButton>
                        </div>
                        <div className='flex w-1/3  justify-center '>
                        <ScrollToButton toId="contactform"> <p  className='pop600 hover:cursor-pointer text-lg text-center text-[#114653]'>Contatti</p> </ScrollToButton>
                        </div>
</div>
                {/*<nav>
                    <section className="MOBILE-MENU flex lg:hidden xl:hidden">


                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>

                            <div className='w-full flex flex-row items-center justify-evenly absolute top-0 mt-8 '>

                                <div className=' w-2/3'>
                                    <img src={RestaurantsIcon} alt="logo" className='w-full h-full ' />
                                </div>
                                <div
                                    onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                                >
                                    <svg
                                        className="h-8 w-8 text-gray-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#00B27A"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                            </div>
                            <ul className="w-full md:w-[80%] mx-auto h-full items-center mt-[25%] flex flex-col">

                            <ScrollToButton toId="wirc"> <p className='pop500 hover:cursor-pointer xmd:text-[12px] text-black'>Cos’è Restaurants Club </p> </ScrollToButton>
                        <ScrollToButton toId="wibp"> <p  className='pop500 hover:cursor-pointer xmd:text-[12px] text-black'>Funzioni</p> </ScrollToButton>
                        <ScrollToButton toId="contactform"> <p  className='pop500 hover:cursor-pointer xmd:text-[12px] text-black'>Contatti</p> </ScrollToButton>


                            </ul>
                        </div>
                    </section>


                </nav>*/}
                <style>{`
.hideMenuNav {
display: none;
}
.showMenuNav {
display: block;
position: absolute;
width: 100%;
height: 100vh;
top: 0;
left: 0;
background: white;
z-index: 10;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
}
`}</style>
            </div>
        </div>
    )
}

export default NavMobile
