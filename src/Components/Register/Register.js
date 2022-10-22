import React, { useRef, useState } from 'react'
import Package02 from "../../Assets/register.png";
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { baseUrl } from '../../App';
import { CircularProgress } from '@mui/material';
import ScrollToTop from '../../Reusable/ScrollToTop';
import ReCAPTCHA from "react-google-recaptcha";

function Register() {
    // one useState for the button
    const [input, setInput] = useState({
        name: "",
        cognome: "",
        phonenumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [checkbox, setCheckbox] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const recaptchaRef = useRef();
    const [recaptcha, setRecaptcha] = useState();

    // function to get the value of the input
    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    // send all the data to server
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if check box is checked
        if (!checkbox) {
            return alert("Devi accettare i termini e le condizioni")
        }
        if (!recaptcha) {
            return alert("Clicca su recaptcha per confermare che non sei un robot")
        }
        if (input.password !== input.confirmPassword) {
            return alert("La password non corrisponde")
        }
        setIsLoading(true);
        // make a costum obj to send to server
        const obj = {
            "name": input.name,
            "lastname": input.cognome,
            "email": input.email,
            "password": input.password,
            "phone_number": input.phonenumber,
            "recaptcha": recaptcha,
        }
        // call back inasted function to send data to server
        try {
            const result = await axios.post(`https://${process.env.REACT_APP_AUTH_PREFIX}${baseUrl()}${process.env.REACT_APP_AUTH_API_PATH}/user/register`, obj)
            if (result.data.message === "Success.") {
                // show alert success Register
                setIsLoading(false);
                navigate("/thank-you")
            }
            else {
                setIsLoading(false);
                navigate("/error")
            }
        } catch (error) {
            alert("Register Error")
            setIsLoading(false);
            recaptchaRef.current.reset();
            setRecaptcha(null);
        }
    }

    const handleRecaptchaChange = value => setRecaptcha(value);



    const navigate = useNavigate()
    return (
        <div className='xl:w-[80%] lg:w-[80%] px-[40px] py-[20px] mx-auto flex flex-row sm:flex-col xsm:flex-col  my-8 '>

        <ScrollToTop />

            <div className='w-[30%] sm:hidden xsm:hidden md:hidden m-5  xmd:w-[40%]'>
                <img src={Package02} alt="" className='  sm:w-1/2 sm:m-auto md:my-16 xmd:my-16 xl:rotate-90 xl:mt-20 lg:rotate-90 lg:mt-20 md:rotate-90 xmd:rotate-90 ' />
            </div>
            <div className='w-[70%] flex flex-col gap-y-8 sm:w-full xsm:w-full mx-auto  '>
                <p className='text-[#00B27A] Brevia850 text-5xl md:text-center sm:text-center xsm:text-center'>Entra nel Club!</p>
                <div className=' flex flex-row  sm:flex-col xsm:flex-col md:flex-col xmd:flex-col items-center gap-x-16 gap-y-5 justify-between w-full lg:w-[95%] xl:w-[95%] lg:mx-auto xl:mx-auto' >
                    <p className='Brevia700 text-xl'>Hai già un account? <span onClick={() => { navigate("/login") }} className='text-[#00B27A] underline hover:cursor-pointer '>Accedi</span> </p>

                    <button className=' lg:w-[40%] xl:w-[40%] h-16 flex flex-row items-center gap-x-2 pop500 border-4 justify-center border-black w-[90%] xmd:w-[95%] '>
                        <FcGoogle size={30} />
                        Registrati con Google
                    </button>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 justify-items-center gap-y-6'>
                        <div className='flex flex-col gap-y-4 w-[90%] '>
                            <p className='Brevia700 text-xl'>Name</p>
                            <input type="text" className='h-16 border-4 border-black px-5 text-xl pop500' name='name'
                                onChange={handleInput}
                                disabled={isLoading}
                                required


                            />
                        </div>
                        <div className='flex flex-col gap-y-4 w-[90%]'>
                            <p className='Brevia700 text-xl'>Cognome</p>
                            <input type="text" className='h-16 border-4 border-black px-5 text-xl pop500'
                                name='cognome' onChange={handleInput}
                                disabled={isLoading}
                                required

                            />
                        </div>
                        <div className='flex flex-col gap-y-4 w-[90%]'>
                            <p className='Brevia700 text-xl'>Numero di Telefono</p>
                            <input type="text" className='h-16 border-4 border-black px-5 text-xl pop500'
                                name='phonenumber' onChange={handleInput}
                                disabled={isLoading}
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-y-4 w-[90%]'>
                            <p className='Brevia700 text-xl'>Email</p>
                            <input type="email" className='h-16 border-4 border-black px-5 text-xl pop500'
                                name='email' onChange={handleInput}
                                disabled={isLoading}


                            />
                        </div>
                        <div className='flex flex-col gap-y-4 w-[90%]'>
                            <p className='Brevia700 text-xl'>Password</p>
                            <input type="password" className='h-16 border-4 border-black px-5 text-xl pop500'
                                name='password' onChange={handleInput}
                                disabled={isLoading}
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-y-4 w-[90%]'>
                            <p className='Brevia700 text-xl'>Ripeti Password</p>
                            <input type="password" className='h-16 border-4 border-black px-5 text-xl pop500'
                                name='confirmPassword' onChange={handleInput}
                                disabled={isLoading}
                                required
                            />
                        </div>
                    </div>

                    <div className='flex flex-row gap-x-2 w-[95%]  mx-auto justify-between my-3' >
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_RECAPTCHA_KEY || "6LfP53ghAAAAANOayCTN193UiY3Hy32ZMVpybMIX"}
                            ref={recaptchaRef}
                            onChange={handleRecaptchaChange} 
                            hl="it"
                            size='normal'
                        />
                    </div>

                    <div className='flex flex-row gap-x-2 w-[95%]  mx-auto' >
                        <input type="checkbox" className='h-6 w-6 accent-[#00B27A] mt-1'
                            // if check box is checked, set the state to true and make the text red
                            onChange={() => { setCheckbox(!checkbox) }}
                            disabled={isLoading}
                            required
                        />
                        <p className=''>Restaurants Club utilizza le informazioni fornite da te per contattarti in merito a servizi rilevanti. Puoi annullare  queste comunicazioni in qualsiasi momento.  Consultare la nostra informativa sulla privacy.</p>
                    </div>

                    <div className='flex flex-row gap-x-2 mx-auto justify-between xsm:flex-col sm:flex-col  md:flex-col xmd:flex-col  xsm:my-3 sm:my-3  md:my-3' >
                        <p className='mx-auto xsm:my-3 sm:my-3  md:my-3 xmd:my-3 my-1'>Iscrivendoti accetti i nostri  <span onClick={() => navigate("/termsandconditions")} className='pop700 underline'>Termini e Condizioni</span> </p>

                        <button
                            type="submit"
                            onClick={e => handleSubmit(e)}
                            // disabled={isLoading || !email || !password}
                            className='w-[45%] xmd:w-[75%] sm:w-[75%] md:w-[92%]  h-14 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center mx-auto xsm:my-3 sm:my-3  md:my-3 my-1'>
                            {isLoading ? <CircularProgress color="success" /> : <p className='pop500 text-black'>Iscriviti</p>}
                        </button>

                    </div>

                </form>

            </div>
        </div>
    )
}

export default Register
