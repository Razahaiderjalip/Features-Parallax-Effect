import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { BsPersonCircle } from "react-icons/bs"
import RestaurantsIcon from "../Assets/icon.png"

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom"
import Typography from '@mui/material/Typography';
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
        <div className="flex flex-col lg:hidden xl:hidden xmd:hidden xl:hidden">

            <div className='h-[50px] w-full bg-[#114653] items-center justify-center flex ' >

                <p className='flex w-full h-full justify-center items-center text-white sm:text-[0.9rem] md:text-[0.9rem] pop500 uppercase px-2'>fino a 500€ di credito pubblicitario omaggio</p>

            </div>

            <div className="flex flex-row duration-300 transition-all z-10 w-full items-center px-8 justify-evenly  py-2 ">
                <button
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <GiHamburgerMenu size={30} color="#00B27A" />
                </button>

                <div className=' w-1/3 sm:w-2/3 mx-auto '>
                    <img src={RestaurantsIcon} alt="logo" className='w-full h-full ' onClick={() => {
                            navigate("/")

                        }}/>
                </div>
                <BsPersonCircle onClick={() => {
                            navigate("/login")

                        }} size={30} color="#00B27A" />

                <nav>
                    <section className="MOBILE-MENU flex lg:hidden xl:hidden">


                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>

                            <div className='w-full flex flex-row items-center justify-evenly absolute top-0 mt-8 '>
                            
                                <BsPersonCircle size={30} color="#00B27A" />
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
                                <List
                                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"

                                >
                                    <ListItemButton onClick={handleClick2}>
                                        <ListItemText
                                            disableTypography
                                            primary={<Typography type="body2" style={{ fontWeight: "800", fontSize: 18 }}>Il prodotto</Typography>}
                                        />

                                        {open2 ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open2} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>

                                        <ListItemButton onClick={() => {
                                                setIsNavOpen((prev) => !prev)
                                                navigate("/Funzioni")
                                            }} sx={{ pl: 4 }}>

                                                <ListItemText primary="Confronta i Piani" />
                                            </ListItemButton>
                                            <ListItemButton onClick={() => {
                                                setIsNavOpen((prev) => !prev)
                                                navigate("/espresso")
                                            }} sx={{ pl: 4 }}>

                                                <ListItemText primary="Pacchetto L’Espresso" />
                                            </ListItemButton>
                                            <ListItemButton onClick={() => {
                                                setIsNavOpen((prev) => !prev)
                                                navigate("/tavola")
                                            }} sx={{ pl: 4 }}>

                                                <ListItemText primary="Pacchetto A Tavola" />
                                            </ListItemButton>
                                            <ListItemButton onClick={() => {
                                                setIsNavOpen((prev) => !prev)
                                                navigate("/viandante")
                                            }} sx={{ pl: 4 }}>


                                                <ListItemText primary="Pacchetto A Viandante" />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                    <Divider style={{ width: "90%", marginLeft: "auto", marginRight: "auto", borderWidth: 1 }} />

                                    <ListItemButton onClick={() => {
                                        setIsNavOpen((prev) => !prev)
                                        navigate("/pricing")
                                    }}>
                                        <ListItemText
                                            disableTypography
                                            primary={<Typography type="body2" style={{ fontWeight: "800", fontSize: 18 }}>Prezzi</Typography>}
                                        />

                                    </ListItemButton>
                                    <Divider style={{ width: "90%", marginLeft: "auto", marginRight: "auto", borderWidth: 1 }} />

                                    <ListItemButton onClick={handleClick}>
                                        <ListItemText
                                            disableTypography
                                            primary={<Typography type="body2" style={{ fontWeight: "800", fontSize: 18 }}>Risorse</Typography>}
                                        />

                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>

                                            <ListItemButton onClick={() => {
                                                setIsNavOpen((prev) => !prev)
                                                navigate("/faq")
                                            }} sx={{ pl: 4 }}>
                                                <ListItemText primary="FAQ" />
                                            </ListItemButton>

                                            <ListItemButton sx={{ pl: 4 }} >
                                                <a href={require('../Assets/Documents/ProgrammaPartner2022.pdf')}>
                                                <ListItemText primary="Programma Partner" />
                                                </a>
                                            </ListItemButton>

                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemText primary="Parla con noi :+39 050 0988606" />
                                            </ListItemButton>

                                            
                                        </List>
                                    </Collapse>
                                    <Divider style={{ width: "90%", marginLeft: "auto", marginRight: "auto", borderWidth: 1 }} />
                                </List>
                            </ul>
                        </div>
                    </section>


                </nav>
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