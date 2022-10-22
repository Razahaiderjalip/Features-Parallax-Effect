import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG from "../../Assets/demoBg.png"
import bubble1 from "../../Assets/bubble1.png"
import bubble2 from "../../Assets/bubble2.png"
import bubble3 from "../../Assets/bubble3.png"
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import { BsFillCheckCircleFill } from "react-icons/bs"
import { RiErrorWarningFill } from "react-icons/ri"
import './Form.css';


import ReCAPTCHA from "react-google-recaptcha";
import { baseUrl } from '../../App';
import { useRef, useState } from 'react'

function BottomForm({ title }) {

    const navigate = useNavigate();

    const goToPrivacy = () => {
        navigate("/privacypolicy");
    };






    const url =`https://${process.env.REACT_APP_WIZARD_PREFIX}${baseUrl()}${process.env.REACT_APP_AUTH_API_PATH}/messages`;
    // const [dateTime, SetDateTime] = React.useState(new Date())
    const [Loading, SetLoading] = React.useState(false)
    const [Message, SetMessage] = React.useState(null)
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [telephone, setTelephone] = React.useState('')
    const [restaurantname, setRestaurantname] = React.useState('')
    const [city, setCity] = React.useState('')
    const [Obiettivi, setObiettivi] = React.useState([])
    const [accessoanticipato, setAccessoanticipato] = React.useState('')

    const recaptchaRef = useRef();
    const [recaptcha, setRecaptcha] = useState();
    const handleRecaptchaChange = value => setRecaptcha(value);



    function handleChangeemail(e) {
        setEmail(e.target.value)
    }
    function handleChangename(e) {
        setName(e.target.value)
    }
    function handleChangetelephone(e) {
        setTelephone(e.target.value)
    }
    function handleChangerestaurantname(e) {
        setRestaurantname(e.target.value)
    }
    function handleChangecity(e) {
        setCity(e.target.value)
    }
    function handleChangeObiettivi(e) {
        // this to handel array of checkbox
        const { name, checked } = e.target;
        if (checked) {
            setObiettivi([...Obiettivi, name])
        } else {
            setObiettivi(Obiettivi.filter(item => item !== name))
        }
    }



    async function SendEmail() {
        if (window.location.href.split('/').pop() === 'accessoanticipato') {
            setAccessoanticipato('landing_1')
        }else{
            setAccessoanticipato('landing_2')
        }

        if (email === '' || name === '' || telephone === '' || restaurantname === '' || city === '' || Obiettivi === '') {
            SetMessage({ type: "Erorr", message: "Compila i campi mancanti" })
        } else {
            SetMessage(null)
            SetLoading(true)
            try {
                let body = {
                    email: email,
                    name: name,
                    telephone: telephone,
                    restaurantname: restaurantname,
                    city: city,
                    Obiettivi: Obiettivi,
                    accessoanticipato: "landing_1",
                    recaptcha: recaptcha,

                }

                const res = await axios.post(url, body)
                console.log(res)
                SetMessage({ type: "sucess", message: "Il tuo messaggio è stato inviato correttamente!" })
            } catch (error) {
                console.log(error)
            }
            SetLoading(false)
        }

        if (!recaptcha) {
            return alert("Clicca su recaptcha per confermare che non sei un robot")
        }

    }



    return (
        


            <div className="w-[78.5%] lg:w-[90%] xmd:w-[95%] md:w-[95%] px-[40px] flex flex-row xsm:w-full xsm:flex-col sm:w-full sm:flex-col md:flex-col xmd:flex-col gap-y-6 gap-x-2  mx-auto py-14 relative xsm:mx-0 sm:mx-0">

                <div className='w-1/3 xsm:w-full sm:w-full md:w-full  xmd:w-full flex flex-col  ' >
                    <p className='text-white Brevia850 not-italic font-black text-5xl sm:text-3xl leading-[65px] '>Raggiungi i tuoi clienti. 
Attraine di nuovi.<br></br>

Inizia ora.</p>

                </div>

                <div className=' w-2/3 xsm:w-full sm:w-full md:w-full xmd:w-full gap-x-4 '>


                    <div className=' w-full grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-x-4'>



                        <div className='flex flex-col gap-y-4  pb-9 '>
                            <p className='Brevia700 text-xl md:text-lg  text-white'>Nome Ristorante*</p>
                            <input onChange={(e) => handleChangerestaurantname(e)} value={restaurantname} placeholder="Il tuo Ristorante" name="firstName" type="text" className='h-20 sm:h-16 w-full border-4 border-black px-5 text-xl pop500' />
                        </div>

                        <div className='flex flex-col gap-y-4 pb-9  '>
                            <p className='Brevia700 text-xl md:text-lg  text-white'>Nome e Cognome</p>
                            <input onChange={(e) => handleChangename(e)} value={name} placeholder="Il tuo Nome e Cognome" name="lastName" type="text" className='h-20 sm:h-16 w-full border-4 border-black px-5 text-xl pop500' />
                        </div>

                        <div className='flex flex-col gap-y-4 pb-9 '>
                            <p className='Brevia700 text-xl md:text-lg text-white'>Numero di telefono*</p>
                            <input onChange={(e) => handleChangetelephone(e)} value={telephone} placeholder="Il tuo Numero di telefono" name="phone" type="number" className='h-20 sm:h-16 w-full border-4 border-black px-5 text-xl pop500' />
                        </div>

                        <div className='flex flex-col gap-y-4 pb-9 '>
                            <p className='Brevia700 text-xl md:text-lg  text-white'>Mail</p>
                            <input onChange={(e) => handleChangeemail(e)} value={email}  placeholder="La tua Mail" name="email" type="email" className='h-20 sm:h-16 w-full border-4 border-black px-5 text-xl pop500' />
                        </div>

                        <div className='flex flex-col gap-y-4 pb-9  '>
                            <p className='Brevia700 text-xl md:text-lg  text-white'>Città</p>
                            <input onChange={(e) => handleChangecity(e)} value={city} placeholder="La tua Città" name="locality" type="text" className='h-20 sm:h-16 w-full border-4 border-black px-5 text-xl pop500' />
                        </div>


                        <div className='flex flex-col gap-y-4 pb-9 '>

                            <p className='Brevia700 text-xl md:text-lg text-white'>Quali sono i tuoi obiettivi?</p>

                            <div className='flex flex-col justify-start items-start'>

                                <div className='flex flex-row items-center'>

                                    <input type="checkbox" name="0" className="h-8 w-8 sm:h-8 sm:w-8 md:h-8 md:w-8 mt-2 accent-[#00B27A] mr-2" onChange={(e) => handleChangeObiettivi(e)} value={Obiettivi} />
                                    <p className='text-white pop500 font-semibold text-xl   '>Aumentare gli ordini a domicilio</p>

                                </div>

                                <div className='flex flex-row items-center'>

                                    <input type="checkbox"name="1" className="h-8 w-8 sm:h-8 sm:w-8 md:h-8 md:w-8 mt-2 accent-[#00B27A] mr-2" onChange={(e) => handleChangeObiettivi(e)} value={Obiettivi}/>
                                    <p className='text-white pop500 font-semibold text-xl '>Far conoscere il mio locale</p>

                                </div>

                                <div className='flex flex-row items-center'>

                                    <input type="checkbox" name="2" className="h-8 w-8 sm:h-8 sm:w-8 md:h-8 md:w-8 mt-2 accent-[#00B27A] mr-2" onChange={(e) => handleChangeObiettivi(e)} value={Obiettivi }/>
                                    <p className='text-white pop500 font-semibold text-xl  '>Riempire i tavoli del mio locale</p>

                                </div>



                                <div className='flex flex-col py-10  xsm:w-[90%] sm:w-[90%]'>

                                    <div className='flex flex-row'>

                                        <div className='flex flex-row  w-10'>
                                            <input type="checkbox" name="3" className="h-8 w-8 sm:h-8 sm:w-8 md:h-8 md:w-8 mt-2 accent-[#00B27A] mr-2 "  onChange={(e) => handleChangeObiettivi(e)} value={Obiettivi}  /></div>
                                        <p className=' text-white pop300 font-light text-sm '>  Restaurants Club utilizza le informazioni fornite da te per  contattarti in merito a servizi rilevanti.
                                            Puoi annullare  queste comunicazioni in qualsiasi momento.
                                            Consultare la nostra <span>
                                                <button onClick={goToPrivacy} className="pop500 underline"> informativa sulla privacy. </button></span></p></div>

                <div className='flex flex-row w-[95%] mt-5 mx-auto  my-3 items-center justify-center ' >
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_RECAPTCHA_KEY || "6LfP53ghAAAAANOayCTN193UiY3Hy32ZMVpybMIX"}
                            ref={recaptchaRef}
                            onChange={handleRecaptchaChange} 
                            hl="it"
                            size='normal'
                        />
                    </div>
                                    {(!Message || Message.type === "Erorr") &&


                                        <button disabled={Loading} onClick={() => SendEmail()} className=' mx-auto my-10 mb-5 px-10 w-96 xsm:w-full sm:w-full xsm:px-5 sm:px-5 h-16 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>
                                            <p className='pop600 text-xl text-black'>Voglio essere contattato</p>
                                            {Loading && <CircularProgress size={25} color="success" className='absolute right-0 mr-8' />}
                                        </button>

                                    }

                                    <div className=' w-[80%] flex flex-col  '>
                        {Message && <p className={`${Message?.type === "Erorr" ? "text-[#FC6371]" : "text-white"} mt-5 pop700 text-xl flex items-center gap-x-2 `}> {Message?.type === "Erorr" ? <RiErrorWarningFill size={25} /> : <BsFillCheckCircleFill size={25} />} {Message?.message}</p>}
                    </div>
                                </div>


                            </div>

                        </div>


                    </div>







                </div>


            </div>
     
    )
}

export default BottomForm
