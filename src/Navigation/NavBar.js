import React from "react";
import "./NavBar.css";
import RestaurantsIcon from "../Assets/NavLogo5.svg";
import NavIcon1 from "../Assets/NavIcon1.png";
import NavIcon2 from "../Assets/NavIcon2.png";
import NavIcon3 from "../Assets/NavIcon3.png";
import NavIcon4 from "../Assets/blob.svg";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { NavLink, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NavMobile from "./NavMobile";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";

function NavBar() {
  React.useEffect(() => {
    document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 20) {
        setNavBg(false);
      } else {
        setNavBg(true);
      }
    });
  }, []);

  const navigate = useNavigate();
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);

    if (anchorEl2) setAnchorEl2(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);

    if (anchorEl) setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [navBg, setNavBg] = React.useState(true);

  return (
    <>
      <NavMobile />

      <div className='h-[50px] w-full bg-[#114653] items-center justify-center flex z-10   sm:hidden xsm:hidden md:hidden  relative'>
        <p className='flex w-full justify-center items-center h-full text-white text-2xl xmd:text-lg tracking-wide pop500 uppercase'>
          fino a 1400€ di credito pubblicitario omaggio
        </p>
      </div>

      {navBg === true ? (
        <>
          <div className='flex flex-col sm:hidden xsm:hidden md:hidden z-20 top-0 bg-white -mt-[1px] '>
            <div className=' w-[78.5%] lg:w-[90%] my-2 xmd:w-[98%] px-[40px] flex flex-row bg-transparnet items-center  justify-evenly relative mx-auto '>
              <div className='lg:w-[30%] mx-auto mr-10'>
                <img
                  onClick={() => {
                    navigate("/");
                  }}
                  src={RestaurantsIcon}
                  alt='logo'
                  className='hover:cursor-pointer '
                />
              </div>

              <div className='flex flex-row w-full lg:w-[50%] gap-x-10 lg:gap-x-5 xmd:gap-x-10 m-6  '>
                <NavLink
                  to='/funzioni'
                  onClick={() => {
                    setAnchorEl(null);
                  }}
                  onMouseEnter={(e) => handleClick(e)}
                  onClose={handleClose}
                  className={({ isActive }) =>
                    `pop500 hover:cursor-pointer hover:underline hover:underline-offset-8 ${
                      isActive && "link--active"
                    }`
                  }
                >
                  Il prodotto
                  <ExpandMore
                    size='large'
                    onMouseEnter={(e) => handleClick(e)}
                    className={`${
                      open && "rotate-180 "
                    } transition-all duration-1000`}
                  />
                </NavLink>

                <div
                  onMouseLeave={(e) => handleClose(e)}
                  className={`w-full p-6 xmd:px-2  shadow-lg  gap-4 ${
                    !open ? "h-0 opacity-0" : "h-fit "
                  } transition-all grid grid-cols-2 duration-300 overflow-hidden  absolute top-0 mt-[5%] left-0 z-10 bg-white  `}
                >
                  <div
                    className={`w-full xmd:h-[150px] lg:h-[150px] border-4 border-black flex flex-col justify-evenly p-5 xmd:px-2 ${
                      !open && "hidden"
                    } `}
                  >
                    <div className='flex flex-row gap-x-3'>
                      <img
                        src={NavIcon4}
                        alt=''
                        className='h-[30px] xmd:h-[20px]'
                      />
                      <NavLink
                        onClick={() => {
                          navigate("/funzioni");
                          handleClose();
                        }}
                        className={({ isActive }) =>
                          `text-[#00B17A] Brevia700 text-xl xmd:text-[16px] hover:cursor-pointer hover:underline ${
                            isActive && "link--active"
                          }`
                        }
                      >
                        Confronta i piani
                      </NavLink>
                    </div>
                    <p className='pop500 xmd:text-[14px] w-3/4 my-5 xmd:my-2 lg:my-2'>
                      Scopri le funzioni principali di Restaurants
                      Club e scegli il piano su misura per te
                    </p>
                    <p
                      onClick={() => {
                        navigate("/funzioni");
                        handleClose();
                      }}
                      className='pop700 xmd:text-[14px] underline hover:cursor-pointer'
                    >
                      Vedi tutte le funzioni
                    </p>
                  </div>
                  <div
                    className={`w-full xmd:h-[150px] lg:h-[150px] border-4 border-black flex flex-col justify-evenly p-5 xmd:px-2 ${
                      !open && "hidden"
                    } `}
                  >
                    <div className='flex flex-row gap-x-3'>
                      <img
                        src={NavIcon1}
                        alt=''
                        className='h-[30px] xmd:h-[20px]'
                      />
                      <p
                        onClick={() => {
                          navigate("/espresso");
                          handleClose();
                        }}
                        className='text-[#00B17A] Brevia700 text-xl xmd:text-[16px] hover:cursor-pointer hover:underline'
                      >
                        Pacchetto L’Espresso
                      </p>
                    </div>
                    <p className='pop500 xmd:text-[14px] w-3/4 my-5 xmd:my-2 lg:my-2'>
                      Elimina gli intermediari, gestisci TU ora il tuo{" "}
                      <span className='pop700'>Delivery:</span> ricevi
                      ordini a domicilio da sito web e app senza
                      pagare commissioni!
                    </p>
                    <p
                      onClick={() => {
                        navigate("/espresso");
                        handleClose();
                      }}
                      className='pop700 xmd:text-[14px] underline hover:cursor-pointer'
                    >
                      Scopri i servizi inclusi
                    </p>
                  </div>
                  <div
                    className={`w-full xmd:h-[150px] lg:h-[150px] border-4 border-black flex flex-col justify-evenly p-5 xmd:px-2 ${
                      !open && "hidden"
                    }`}
                  >
                    <div className='flex flex-row gap-x-3'>
                      <img
                        src={NavIcon2}
                        alt=''
                        className='h-[30px] xmd:h-[20px]'
                      />
                      <p
                        onClick={() => {
                          navigate("/tavola");
                          handleClose();
                        }}
                        className='text-[#00B17A] Brevia700 text-xl xmd:text-[16px] hover:cursor-pointer hover:underline'
                      >
                        Pacchetto A Tavola
                      </p>
                    </div>
                    <p className='pop500 xmd:text-[14px] w-3/4 my-5 xmd:my-2 lg:my-2'>
                      I tuoi tavoli sempre occupati: gestisci le{" "}
                      <span className='pop700'>
                        prenotazioni tavolo
                      </span>{" "}
                      e con la comanda anticipata non hai più
                      sorprese!
                    </p>
                    <p
                      onClick={() => {
                        navigate("/tavola");
                        handleClose();
                      }}
                      className='pop700 xmd:text-[14px] underline hover:cursor-pointer'
                    >
                      Scopri i servizi inclusi
                    </p>
                  </div>
                  <div
                    className={`w-full xmd:h-[150px] lg:h-[150px] border-4 border-black flex flex-col justify-evenly p-5 xmd:px-2 ${
                      !open && "hidden"
                    } `}
                  >
                    <div className='flex flex-row gap-x-3'>
                      <img
                        src={NavIcon3}
                        alt=''
                        className='h-[30px] xmd:h-[20px] '
                      />
                      <p
                        onClick={() => {
                          navigate("/viandante");
                          handleClose();
                        }}
                        className='text-[#00B17A] Brevia700 text-xl xmd:text-[16px] hover:cursor-pointer hover:underline'
                      >
                        Pacchetto Il Viandante
                      </p>
                    </div>
                    <p className='pop500 xmd:text-[14px] w-3/4 my-5 xmd:my-2 lg:my-2'>
                      Porta più{" "}
                      <span className='pop700'>persone </span> al tuo
                      locale: con sito web ottimizzato e Google My
                      Business avanzato sei tra i primi risultati di
                      ricerca!
                    </p>
                    <p
                      onClick={() => {
                        navigate("/viandante");
                        handleClose();
                      }}
                      className='pop700 xmd:text-[14px] underline hover:cursor-pointer'
                    >
                      Scopri i servizi inclusi
                    </p>
                  </div>
                </div>

                <NavLink
                  to='/pricing'
                  onClick={() => {
                    navigate("/pricing");
                  }}
                  className={({ isActive }) =>
                    `pop500 hover:cursor-pointer hover:underline hover:hover:underline-offset-8 ${
                      isActive && "link--active"
                    }`
                  }
                >
                  Prezzi
                </NavLink>
                <p
                  onMouseEnter={(e) => handleClick2(e)}
                  onClick={(e) => {
                    handleClick2(e);
                  }}
                  className='pop500 hover:cursor-pointer hover:underline hover:hover:underline-offset-8'
                >
                  Risorse{" "}
                  <ExpandMore
                    className={`${
                      open2 && "rotate-180 "
                    } transition-all duration-1000`}
                  />
                </p>

                <NavLink
                  to='contact'
                  className={({ isActive }) =>
                    `pop500 hover:cursor-pointer hover:underline hover:hover:underline-offset-8 ${
                      isActive && "link--active"
                    }`
                  }
                >
                  Contatti
                </NavLink>

                <Menu
                  TransitionComponent={Fade}
                  id='basic-menu'
                  anchorEl={anchorEl2}
                  open={open2}
                  onClose={handleClose2}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    style={{ fontWeight: "700" }}
                    onClick={() => {
                      navigate("/faq");
                      handleClose2();
                    }}
                  >
                    FAQ
                  </MenuItem>
                  <Divider
                    style={{
                      width: "90%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderWidth: 1,
                    }}
                  />

                  <a
                    href={require("../Assets/Documents/ProgrammaPartner2022.pdf")}
                    target='_blank'
                  >
                    <div className='w-full flex flex-col pl-4 pr-6 pb-2'>
                      <p className='pop700'>Programma Partner</p>
                    </div>
                  </a>

                  <Divider
                    style={{
                      width: "90%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderWidth: 1,
                    }}
                  />
                  <div className='w-full flex flex-col pl-4 pr-6'>
                    <p className='pop700'>Parla con noi :</p>
                    <p>+39 050 0988606</p>
                  </div>
                </Menu>
              </div>

              <div className='flex flex-row h-fit w-[40%]  items-center justify-evenly '>
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  className='w-[80px] xmd:w-[60px] h-10  items-center flex justify-center '
                >
                  <p className='pop500 text-sm xmd:text-xsn hover:cursor-pointer hover:underline hover:underline-offset-8'>
                    Accedi
                  </p>
                </button>
                <button
                  onClick={() => {
                    navigate("/register");
                  }}
                  className='w-[140px] xmd:w-[120px] h-10 border-[3px] bg-[#00B27A] border-black items-center flex justify-center '
                >
                  <p className='pop500 text-white text-sm xmd:text-xs'>
                    Entra nel Club!
                  </p>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col sm:hidden xsm:hidden md:hidden z-20 sticky top-0 bg-white -mt-[1px]  '>
            <div className='w-[78.5%] lg:w-[90%] my-2 xmd:w-[98%] px-[40px] flex flex-row bg-transparnet items-center  justify-evenly relative mx-auto'>
              <div className='lg:w-[30%] mx-auto mr-10'>
                <img
                  onClick={() => {
                    navigate("/");
                  }}
                  src={RestaurantsIcon}
                  alt='logo'
                  className='hover:cursor-pointer '
                />
              </div>

              <div className='flex flex-row w-full lg:w-[50%]   gap-x-10 lg:gap-x-5 xmd:gap-x-10 m-6'>
                <p
                  onMouseEnter={(e) => handleClick(e)}
                  onClick={() => {
                    navigate("/funzioni");
                  }}
                  className='pop500 hover:cursor-pointer hover:underline hover:underline-offset-8'
                >
                  Il prodotto
                  <ExpandMore
                    size='large'
                    onMouseEnter={(e) => handleClick(e)}
                    className={`${
                      open && "rotate-180 "
                    } transition-all duration-1000`}
                  />
                </p>

                <div
                  onMouseLeave={(e) => handleClose(e)}
                  className={`w-full p-6 xmd:px-2  shadow-lg  gap-4 ${
                    !open ? "h-0 opacity-0" : "h-fit "
                  } transition-all grid grid-cols-2 duration-300 overflow-hidden  absolute top-0 mt-[5%] left-0 z-10 bg-white `}
                >
                  <div
                    className={`w-full border-4 xmd:h-[150px] lg:h-[150px] border-black flex flex-col justify-evenly p-5 xmd:px-2 ${
                      !open && "hidden"
                    } `}
                  >
                    <div className='flex flex-row gap-x-3'>
                      <img
                        src={NavIcon4}
                        alt=''
                        className='h-[30px] xmd:h-[20px]'
                      />
                      <p
                        onClick={() => {
                          navigate("/");
                          handleClose();
                        }}
                        className='text-[#00B17A] Brevia700 text-xl xmd:text-[16px] hover:cursor-pointer hover:underline'
                      >
                        Confronta i piani
                      </p>
                    </div>
                    <p className='pop500 xmd:text-[14px] w-3/4 my-5 xmd:my-2 lg:my-2'>
                      Scopri le funzioni principali di Restaurants
                      Club e scegli il piano su misura per te
                    </p>
                    <p
                      onClick={() => {
                        navigate("/funzioni");
                        handleClose();
                      }}
                      className='pop700 xmd:text-[14px] underline hover:cursor-pointer'
                    >
                      Vedi tutte le funzioni
                    </p>
                  </div>

                  <div
                    className={`w-full border-4 xmd:h-[150px] lg:h-[150px] border-black flex flex-col justify-evenly p-5 xmd:px-2 ${
                      !open && "hidden"
                    } `}
                  >
                    <div className='flex flex-row gap-x-3'>
                      <img
                        src={NavIcon1}
                        alt=''
                        className='h-[30px] xmd:h-[20px]'
                      />
                      <p
                        onClick={() => {
                          navigate("/espresso");
                          handleClose();
                        }}
                        className='text-[#00B17A] Brevia700 text-xl xmd:text-[16px] hover:cursor-pointer hover:underline'
                      >
                        Pacchetto L’Espresso
                      </p>
                    </div>
                    <p className='pop500 xmd:text-[14px] w-3/4 my-5 xmd:my-2 lg:my-2'>
                      Elimina gli intermediari, gestisci TU ora il tuo{" "}
                      <span className='pop700'>Delivery:</span> ricevi
                      ordini a domicilio da sito web e app senza
                      pagare commissioni!
                    </p>
                    <p
                      onClick={() => {
                        navigate("/espresso");
                        handleClose();
                      }}
                      className='pop700 xmd:text-[14px] underline hover:cursor-pointer'
                    >
                      Scopri i servizi inclusi
                    </p>
                  </div>

                  <div
                    className={`w-full border-4 xmd:h-[150px] lg:h-[150px] border-black flex flex-col justify-evenly p-5 xmd:px-2 ${
                      !open && "hidden"
                    }`}
                  >
                    <div className='flex flex-row gap-x-3'>
                      <img
                        src={NavIcon2}
                        alt=''
                        className='h-[30px] xmd:h-[20px]'
                      />
                      <p
                        onClick={() => {
                          navigate("/tavola");
                          handleClose();
                        }}
                        className='text-[#00B17A] Brevia700 text-xl xmd:text-[16px] hover:cursor-pointer hover:underline'
                      >
                        Pacchetto A Tavola
                      </p>
                    </div>
                    <p className='pop500 xmd:text-[14px] w-3/4 my-5 xmd:my-2 lg:my-2'>
                      I tuoi tavoli sempre occupati: gestisci le{" "}
                      <span className='pop700'>
                        prenotazioni tavolo
                      </span>{" "}
                      e con la comanda anticipata non hai più
                      sorprese!
                    </p>
                    <p
                      onClick={() => {
                        navigate("/tavola");
                        handleClose();
                      }}
                      className='pop700 xmd:text-[14px] underline hover:cursor-pointer'
                    >
                      Scopri i servizi inclusi
                    </p>
                  </div>
                  <div
                    className={`w-full border-4 xmd:h-[150px] lg:h-[150px] border-black flex flex-col justify-evenly p-5 xmd:px-2 ${
                      !open && "hidden"
                    } `}
                  >
                    <div className='flex flex-row gap-x-3'>
                      <img
                        src={NavIcon3}
                        alt=''
                        className='h-[30px] xmd:h-[20px]'
                      />
                      <p
                        onClick={() => {
                          navigate("/viandante");
                          handleClose();
                        }}
                        className='text-[#00B17A] Brevia700 text-xl xmd:text-[16px] hover:cursor-pointer hover:underline'
                      >
                        Pacchetto Il Viandante
                      </p>
                    </div>
                    <p className='pop500 xmd:text-[14px] w-3/4 my-5 xmd:my-2 lg:my-2'>
                      Porta più{" "}
                      <span className='pop700'>persone </span> al tuo
                      locale: con sito web ottimizzato e Google My
                      Business avanzato sei tra i primi risultati di
                      ricerca!
                    </p>
                    <p
                      onClick={() => {
                        navigate("/viandante");
                        handleClose();
                      }}
                      className='pop700 xmd:text-[14px] underline hover:cursor-pointer'
                    >
                      Scopri i servizi inclusi
                    </p>
                  </div>
                </div>

                <p
                  onClick={() => {
                    navigate("/pricing");
                  }}
                  className='pop500 hover:cursor-pointer hover:underline hover:underline-offset-8'
                >
                  Prezzi
                </p>
                <p
                  onMouseEnter={(e) => handleClick2(e)}
                  onClick={(e) => {
                    handleClick2(e);
                  }}
                  className='pop500 hover:cursor-pointer hover:underline hover:underline-offset-8'
                >
                  Risorse{" "}
                  <ExpandMore
                    className={`${
                      open2 && "rotate-180 "
                    } transition-all duration-1000`}
                  />
                </p>
                <p
                  onClick={() => {
                    navigate("/contact");
                  }}
                  className='pop500 hover:cursor-pointer hover:underline hover:underline-offset-8'
                >
                  Contatti
                </p>

                <Menu
                  TransitionComponent={Fade}
                  id='basic-menu'
                  anchorEl={anchorEl2}
                  open={open2}
                  onClose={handleClose2}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    style={{ fontWeight: "700" }}
                    onClick={() => {
                      navigate("/faq");
                      handleClose2();
                    }}
                  >
                    FAQ
                  </MenuItem>
                  <Divider
                    style={{
                      width: "90%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderWidth: 1,
                    }}
                  />

                  <a
                    href={require("../Assets/Documents/ProgrammaPartner2022.pdf")}
                    target='_blank'
                  >
                    <div className='w-full flex flex-col pl-4 pr-6 pb-2'>
                      <p className='pop700'>Programma Partner</p>
                    </div>
                  </a>

                  <Divider
                    style={{
                      width: "90%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderWidth: 1,
                    }}
                  />
                  <div className='w-full flex flex-col pl-4 pr-6'>
                    <p className='pop700'>Parla con noi :</p>
                    <p>+39 050 0988606</p>
                  </div>
                </Menu>
              </div>

              <div className='flex flex-row h-fit w-[40%]  items-center justify-evenly'>
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  className='w-[80px] xmd:w-[60px] h-10  items-center flex justify-center '
                >
                  <p className='pop500 text-sm xmd:text-xs hover:cursor-pointer hover:underline hover:underline-offset-8'>
                    Accedi
                  </p>
                </button>

                <button
                  onClick={() => {
                    navigate("/pretest");
                  }}
                  className='w-[140px] xmd:w-[120px] h-10 border-[3px] bg-[#00B27A] border-black items-center flex justify-center '
                >
                  <p className='pop500 text-white text-sm xmd:text-xs'>
                    Vedi la demo
                  </p>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NavBar;
