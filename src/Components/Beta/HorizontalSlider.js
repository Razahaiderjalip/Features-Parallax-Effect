import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

import pc from './img/clarity_computer-solid.svg';
import google from './img/arcticons_google-my-business.svg';
import social from './img/arcticons_social.svg';

import people from './img/akar-icons_people-group.svg';
import face from './img/akar-icons_face-happy.svg';
import mail from './img/ant-design_mail-outlined.svg';

import id from './img/heroicons_identification.svg';
import heart from './img/akar-icons_heart.svg';
import glove from './img/iconoir_boxing-glove.svg';
// import { Face } from "@mui/icons-material";

import ScrollToButton from '../../Reusable/ScrollToButton';

import "./HScrollstyle.css";


export default function App() {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">  </span>'
        },
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                cssMode={true}
                className="mySwiper">
                <SwiperSlide className="h-fit">
                    <div className=' w-[71%] sm:w-full xsm:w-full md:w-full xmd:w-full pt-20 pb-12 px-[40px] sm:p-4 xsm:p-4 md:p-7 xmd:p-10 mx-auto flex flex-col  '>
                        <p className='text-white Brevia850 text-center text-6xl sm:text-4xl w-fit mx-auto leading-[5rem] '>(Ri)prenditi i tuoi <br /> clienti!</p>
                        <div className="flex flex-col justify-center items-center w-full my-7">

                            <p className='text-white text-semibold text-center text-base sm:text-xl pop400  w-4/6 sm:w-full xsm:w-full md:w-full xmd:w-full m-auto'>
                                Crea e gestisci la tua base clienti autonomamente con i migliori strumenti: niente più marketplace che ti sottraggono fatturato ed importanti contatti
                            </p>

                        </div>

                        <div className='w-full  mx-auto flex flex-row  pb-[40px] sm:pb-2 xsm:pb-2 md:pb-2 xmd:pb-10 pt-3'>

                            <div className='h-[230px] w-1/3 mx-auto flex flex-col  '>

                                <div className='w-1/3 mx-auto mb-7 flex items-center justify-center  '>
                                    <img src={pc} className='' alt="" />
                                </div>

                                <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Ottieni Sito e App </p>
                                <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]   text-base text-center text-white  mx-auto'>Con la procedura d’iscrizione</p>
                            </div>

                            <div className='h-[230px] w-1/3 mx-auto flex flex-col  '>

                                <div className='w-1/3 mx-auto mb-7 flex items-center justify-center '>
                                    <img src={google} className='' alt="" />
                                </div>

                                <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]   text-base text-center text-white  mx-auto'>Intercetta interessati su Google</p>
                                <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Con il modulo Google MyBusiness</p>
                            </div>

                            <div className='h-[230px] w-1/3 mx-auto flex flex-col  '>

                                <div className='w-1/3 mx-auto mb-7 flex items-center justify-center '>
                                    <img src={social} className='' alt="" />
                                </div>

                                <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Pubblicizzati sui social</p>
                                <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Con il modulo marketing</p>
                            </div>

                        </div>
                        <div className="flex w-full h-fit justify-center">

                            <ScrollToButton toId="wibp">

                                <button className='px-10 sm:px-10 w-96 h-16 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>

                                    <p className='pop600 text-black text-xl text-center'>Scopri tutte le Funzioni!</p>

                                </button>

                            </ScrollToButton>

                        </div>
                    </div>


                </SwiperSlide>


                <SwiperSlide>
                    <div className=' w-[78.5%] px-[40px]  sm:w-full xsm:w-full md:w-full xmd:w-full pt-20 pb-12 sm:p-4 xsm:p-4 md:p-7 xmd:p-10 mx-auto flex flex-col sm:flex-col sm:mb-10  h-fit relative'>
                        <p className='text-white Brevia850 text-center text-6xl sm:text-4xl w-fit m-auto leading-[5rem] '>Digitalizzati in modo <br /> semplice ed efficace</p>
                        <div className="flex flex-col justify-center items-center w-full my-7">

                            <p className='text-white text-semibold text-center text-base sm:text-xl pop400 sm:w-full xsm:w-full md:w-full xmd:w-full w-4/6 m-auto'>
                                Avere un sito o un’app non basta: per essere efficace online bisogna usare i giusti strumenti di marketing digitale (e non devi per forza pagarli un occhio della testa!)
                            </p>

                        </div>

                        <div className='w-full  mx-auto flex flex-row  pb-[40px] sm:pb-2 xsm:pb-2 md:pb-2 xmd:pb-10 pt-3'>

                            <div className='h-[230px] w-1/3 mx-auto flex flex-col  '>

                                <div className='w-1/3 mx-auto mb-7 flex items-center justify-center  '>
                                    <img src={people} className='' alt="" />
                                </div>

                                <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px] text-base text-center text-white  mx-auto'>Converti i visitatori online</p>
                                <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px] text-base text-center text-white  mx-auto'>Con il modulo chatbot</p>
                            </div>

                            <div className='h-[230px] w-1/3 mx-auto flex flex-col  '>

                                <div className='w-1/3 mx-auto mb-7 flex items-center justify-center '>
                                    <img src={face} className='' alt="" />
                                </div>

                                <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px] text-base text-center text-white  mx-auto'>Gestisci i tuoi clienti</p>
                                <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px] text-base text-center text-white  mx-auto'>Con il modulo clienti</p>
                            </div>

                            <div className='h-[230px] w-1/3 mx-auto flex flex-col  '>

                                <div className='w-1/3 mx-auto mb-7 flex items-center justify-center '>
                                    <img src={mail} className='' alt="" />
                                </div>

                                <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px] text-base text-center text-white  mx-auto'>Coinvolgi i tuoi contatti</p>
                                <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px] text-base text-center text-white  mx-auto'>Con il modulo newsletter</p>
                            </div>

                        </div>
                        <div className="flex w-full justify-center">

                            <ScrollToButton toId="wibp">

                                <button className='px-20 mb-8 sm:px-10 w-fit h-16 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>

                                    <p className='pop600 text-black text-lg text-center'>Scopri tutte le Funzioni!</p>

                                </button>

                            </ScrollToButton>

                        </div>
                    </div>


                </SwiperSlide>


                <SwiperSlide>
                    <div className=' w-[70.6%] justify-evenly px-[40px] sm:w-full xsm:w-full md:w-full xmd:w-full pt-20 pb-12 sm:p-4 xsm:p-4 md:p-7 xmd:p-10 mx-auto flex flex-col sm:flex-col sm:mb-10   h-fit relative'>
                        <p className='text-white Brevia850 text-center text-6xl sm:text-4xl w-fit m-auto leading-[5rem] '>Stai sempre sulla cresta <br /> dell’onda</p>
                        <div className="flex flex-col justify-center items-center w-full my-7">

                            <p className='text-white text-semibold text-center text-base sm:text-xl pop400 sm:w-full xsm:w-full md:w-full xmd:w-full w-4/6 m-auto'>
                            Nulla è lasciato al caso quando si tratta della tua cucina: la stessa cura ai dettagli è fondamentale per trasmettere il valore del tuo ristorante ai tuoi potenziali clienti
                            </p>

                        </div>

                        <div className='w-full  mx-auto flex flex-row  pb-[40px] sm:pb-2 xsm:pb-2 md:pb-2 xmd:pb-10 pt-3'>

                            <div className='h-[230px] w-1/3 mx-auto flex flex-col gap-y-6 sm:gap-y-3 xsm:gap-y-3 md:gap-y-4 '>

                                <div className='w-1/3  mx-auto flex items-center justify-center  '>
                                    <img src={id} className='' alt="" />
                                </div>
                                <div>

                                    <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px] text-base text-center text-white  mx-auto'>Trova il tuo cliente ideale</p>
                                    <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px] text-base text-center text-white  mx-auto'>Con il modulo Cliente Tipo</p>
                                </div>
                            </div>

                            <div className='h-[230px] w-1/3 mx-auto flex flex-col gap-y-6 sm:gap-y-3 xsm:gap-y-3 md:gap-y-4'>

                                <div className='w-1/3 mx-auto  flex items-center justify-center '>
                                    <img src={heart} className='' alt="" />
                                </div>
                                <div>

                                    <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px] text-base text-center text-white  mx-auto'>Premia i tuoi affezionati</p>
                                    <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px] text-base text-center text-white  mx-auto'>Con il modulo Fidelity</p>
                                </div>
                            </div>

                            <div className='h-[230px] w-1/3 mx-auto flex flex-col  gap-y-6 sm:gap-y-3 xsm:gap-y-3 md:gap-y-4'>

                                <div className='w-1/3 mx-auto  flex items-center justify-center '>
                                    <img src={glove} className='' alt="" />
                                </div>
                                <div>

                                    <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px] text-base text-center text-white  mx-auto'>Conosci la concorrenza</p>
                                    <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px] text-base text-center text-white  mx-auto'>Con il modulo SEO</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex w-full justify-center">

                            <ScrollToButton toId="wibp">

                                <button className='px-20 mb-8 sm:px-10 w-fit h-16 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>

                                    <p className='pop600 text-black text-lg text-center'>Scopri tutte le Funzioni!</p>

                                </button>

                            </ScrollToButton>

                        </div>
                    </div>


                </SwiperSlide>


            </Swiper>
        </>
    );
}
