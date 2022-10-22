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
            <div className=' w-10/12 mx-auto my-20'>
                <p className='text-white Brevia850 text-center text-4xl w-fit mx-auto '>(Ri)prenditi i tuoi  clienti!</p>

                <div className="flex flex-col justify-center items-center w-full my-7">

                    <p className='text-white text-center textlg  pop400   m-auto'>
                        Crea e gestisci la tua base clienti autonomamente con i migliori strumenti: niente più marketplace che ti sottraggono fatturato ed importanti contatti
                    </p>

                </div>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    cssMode={true}
                    className="mySwiper  ">


                    <SwiperSlide >
                        <div className='h-[230px]  mx-auto flex flex-col  '>

                            <div className='w-1/3 mx-auto mb-7 flex items-center justify-center  '>
                                <img src={pc} className='' alt="" />
                            </div>

                            <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Ottieni Sito e App </p>
                            <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]   text-base text-center text-white  mx-auto'>Con la procedura d’iscrizione</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='h-[230px]  mx-auto flex flex-col  '>

                            <div className='w-1/3 mx-auto mb-7 flex items-center justify-center '>
                                <img src={google} className='' alt="" />
                            </div>

                            <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]   text-base text-center text-white  mx-auto'>Intercetta interessati su Google</p>
                            <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Con il modulo Google MyBusiness</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='h-[230px]  mx-auto flex flex-col  '>

                            <div className='w-1/3 mx-auto mb-7 flex items-center justify-center '>
                                <img src={social} className='' alt="" />
                            </div>

                            <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Pubblicizzati sui social</p>
                            <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Con il modulo marketing</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className=' w-10/12 mx-auto my-20'>
                <p className='text-white Brevia850 text-center text-4xl w-fit mx-auto '>Digitalizzati in modo semplice ed efficace</p>

                <div className="flex flex-col justify-center items-center w-full my-7">

                    <p className='text-white text-center textlg  pop400   m-auto'>
                        Avere un sito o un’app non basta: per essere efficace online bisogna usare i giusti strumenti di marketing digitale (e non devi per forza pagarli un occhio della testa!)
                    </p>

                </div>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    cssMode={true}
                    className="mySwiper">


                    <SwiperSlide >
                        <div className='h-[230px]  mx-auto flex flex-col  '>

                            <div className='w-1/3 mx-auto mb-7 flex items-center justify-center  '>
                                <img src={people} className='' alt="" />
                            </div>

                            <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Converti i visitatori online </p>
                            <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]   text-base text-center text-white  mx-auto'>Con il modulo chatbot</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='h-[230px]  mx-auto flex flex-col  '>

                            <div className='w-1/3 mx-auto mb-7 flex items-center justify-center '>
                                <img src={face} className='' alt="" />
                            </div>

                            <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]   text-base text-center text-white  mx-auto'>Gestisci i tuoi clienti</p>
                            <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Con il modulo clienti</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='h-[230px]  mx-auto flex flex-col  '>

                            <div className='w-1/3 mx-auto mb-7 flex items-center justify-center '>
                                <img src={mail} className='' alt="" />
                            </div>

                            <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Coinvolgi i tuoi contatti</p>
                            <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Con il modulo newsletter</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className=' w-10/12 mx-auto my-20'>
                <p className='text-white Brevia850 text-center text-4xl w-fit mx-auto '>Stai sempre sulla cresta dell’onda</p>

                <div className="flex flex-col justify-center items-center w-full my-7">

                    <p className='text-white text-center textlg  pop400   m-auto'>
                    Nulla è lasciato al caso quando si tratta della tua cucina: la stessa cura ai dettagli è fondamentale per trasmettere il valore del tuo ristorante ai tuoi potenziali clienti
                    </p>

                </div>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    cssMode={true}
                    className="mySwiper">


                    <SwiperSlide >

                        <div className='h-[230px]  mx-auto flex flex-col  '>

                            <div className='w-1/3 mx-auto mb-7 flex items-center justify-center  '>
                                <img src={id} className='' alt="" />
                            </div>

                            <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Trova il tuo cliente ideale</p>
                            <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]   text-base text-center text-white  mx-auto'>Con il modulo Cliente Tipo</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='h-[230px]  mx-auto flex flex-col  '>

                            <div className='w-1/3 mx-auto mb-7 flex items-center justify-center '>
                                <img src={heart} className='' alt="" />
                            </div>

                            <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]   text-base text-center text-white  mx-auto'>Premia i tuoi affezionati</p>
                            <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Con il modulo Fidelity</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='h-[230px]  mx-auto flex flex-col  '>

                            <div className='w-1/3 mx-auto mb-7 flex items-center justify-center '>
                                <img src={glove} className='' alt="" />
                            </div>

                            <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Conosci la concorrenza</p>
                            <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Con il modulo SEO</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>





            {/*<Swiper
                pagination={pagination}
                modules={[Pagination]}
                cssMode={true}
                className="mySwiper">


                <SwiperSlide >

                <div className=' w-10/12 mx-auto my-8'>
                <p className='text-white Brevia850 text-center text-4xl w-fit mx-auto '>Stai sempre sulla cresta dell’onda</p>

                    <div className="flex flex-col justify-center items-center w-full my-7">

                        <p className='text-white text-center textlg  pop400   m-auto'>
                            Crea e gestisci la tua base clienti autonomamente con i migliori strumenti: niente più marketplace che ti sottraggono fatturato ed importanti contatti
                        </p>

                    </div>

                    <div className='h-[230px]  mx-auto flex flex-col  '>

                        <div className='w-1/3 mx-auto mb-7 flex items-center justify-center  '>
                            <img src={id} className='' alt="" />
                        </div>

                        <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Trova il tuo cliente ideale</p>
                        <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]   text-base text-center text-white  mx-auto'>Con il modulo Cliente Tipo</p>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                <div className=' w-10/12 mx-auto my-8'>
                <p className='text-white Brevia850 text-center text-4xl w-fit mx-auto '>Stai sempre sulla cresta dell’onda</p>

                    <div className="flex flex-col justify-center items-center w-full my-7">

                        <p className='text-white text-center textlg  pop400   m-auto'>
                            Crea e gestisci la tua base clienti autonomamente con i migliori strumenti: niente più marketplace che ti sottraggono fatturato ed importanti contatti
                        </p>

                    </div>

                    <div className='h-[230px]  mx-auto flex flex-col  '>

                        <div className='w-1/3 mx-auto mb-7 flex items-center justify-center  '>
                            <img src={heart} className='' alt="" />
                        </div>

                        <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Trova il tuo cliente ideale</p>
                        <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]   text-base text-center text-white  mx-auto'>Con il modulo Cliente Tipo</p>
                    </div>
                    </div>
                </SwiperSlide>




                <SwiperSlide >
                <div className=' w-10/12 mx-auto my-8'>
                <p className='text-white Brevia850 text-center text-4xl w-fit mx-auto '>Stai sempre sulla cresta dell’onda</p>

                    <div className="flex flex-col justify-center items-center w-full my-7">

                        <p className='text-white text-center textlg  pop400   m-auto'>
                            Crea e gestisci la tua base clienti autonomamente con i migliori strumenti: niente più marketplace che ti sottraggono fatturato ed importanti contatti
                        </p>

                    </div>

                    <div className='h-[230px]  mx-auto flex flex-col  '>

                        <div className='w-1/3 mx-auto mb-7 flex items-center justify-center  '>
                            <img src={glove} className='' alt="" />
                        </div>

                        <p className='Brevia700 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]  text-base text-center text-white  mx-auto'>Trova il tuo cliente ideale</p>
                        <p className='pop500 not-italic sm:text-[14px] xsm:text-[14px] md:text-[16px]   text-base text-center text-white  mx-auto'>Con il modulo Cliente Tipo</p>
                    </div>
                    </div>
                </SwiperSlide>

            </Swiper>*/}



        </>
    );
}
