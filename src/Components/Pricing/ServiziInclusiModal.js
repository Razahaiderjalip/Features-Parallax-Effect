import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import EspressoIcon from "../../Assets/NavIcon1.png"
import TavolaIcon from "../../Assets/NavIcon2.png"
import ViandateIcon from "../../Assets/NavIcon3.png"
import { AiOutlineClose } from "react-icons/ai"
import { EspressoData, TavolaData, ViandanteData } from "./ModalData"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "75%",
    height: "90%",
    overflowY: "scroll",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,

};

function ServiziInclusiModal({ open, handleClose, ModalType }) {

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <div className='flex flex-row gap-x-3 w-fit mx-auto mb-12 pt-6 items-center' >
                        <img src={ModalType === "espresso" ? EspressoIcon : ModalType === "viandante" ? ViandateIcon : TavolaIcon} alt="" className="h-[50px] md:h-[40px] sm:h-[25px]" />
                        <p className='text-[#00B17A] Brevia700 text-6xl sm:text-xl md:text-[30px] xmd:text-[30px]'>
                            
                            {ModalType === "espresso" ? "Pacchetto L’Espresso" : ModalType === "viandante" ? "Pacchetto Il Viandante" : "Pacchetto A Tavola"}
                        </p>
                    </div>
                    <button onClick={() => handleClose()} className='absolute top-0 right-0 m-5'>
                        <AiOutlineClose size={35} color="#00B17A" />
                    </button>
                    {(ModalType === "espresso" ? EspressoData : ModalType === "viandante" ? ViandanteData : TavolaData).map((item, index) => {
                        return (
                            <>
                                <div className={`py-8 sm:py-4 gap-x-2 flex flex-row ${index % 2 !== 0 ? "bg-white" : "bg-[#F6F6F4]"} `} >
                                    <div className="flex items-center  w-1/2 ">
                                        <p className="ml-[25%]  md:ml-[15%] xmd:ml-[15%] sm:ml-[10%] pop700  text-2xl md:text-xl xmd:text-xl sm:text-[14px] text-left">{item.title}</p>
                                    </div>
                                    <div className="flex items-center justify-center w-1/2 text-xl md:text-lg xmd:text-lg sm:text-[10px] sm:ml-8 sm:pr-[2%] pop500 pr-[8%]">{item.text}</div>
                                </div>
                            </>
                        )
                    })}
                </Box>
            </Fade>
        </Modal>
    )
}

export default ServiziInclusiModal