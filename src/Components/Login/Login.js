import React, { useRef, useState } from 'react'
import Package02 from "../../Assets/Package-03.svg";

import { useNavigate } from "react-router-dom"
import axios from 'axios';
import SignInGoogle from './SignInGoogle';
import { baseUrl } from '../../App';
import { CircularProgress } from '@mui/material';
import ScrollToTop from '../../Reusable/ScrollToTop';
import ReCAPTCHA from "react-google-recaptcha";

function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const recaptchaRef = useRef();
    const [recaptcha, setRecaptcha] = useState();

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) return setIsLoading(false);

        if (process.env.REACT_APP_NODE_ENV === "prod" && !recaptcha) {
            return alert("Clicca su recaptcha per confermare che non sei un robot")
        }

        setIsLoading(true);

        try {
            const data = { email, password, recaptcha };

            const headers = {
                'Access-Control-Allow-Origin': `https://${process.env.REACT_APP_AUTH_PREFIX}${baseUrl()}`,
                'Access-Control-Allow-Credentials': 'true'
            };
            const result = await axios.post(`https://${process.env.REACT_APP_AUTH_PREFIX}${baseUrl()}${process.env.REACT_APP_AUTH_API_PATH}/user/login`, data, headers);

            if (!result.data.link) throw new Error();

            window.location = result.data.link;
        } catch (error) {

            setEmail('');
            setPassword('');
            setRecaptcha(null);
            setIsLoading(false);
            setError(error?.response?.data?.Error || error?.response?.data?.error || 'Errore, Riprova.');
        }

    };

    const handleRecaptchaChange = value => setRecaptcha(value);

    const shouldShowRobotQuestion = isTouched && email && password && !recaptcha;

    const pressSubmit = async (event) => {

        if (event.key === 'Enter') {

            setIsLoading(true);

            try {
                const data = { email, password, recaptcha };

                const headers = {
                    'Access-Control-Allow-Origin': `https://${process.env.REACT_APP_AUTH_PREFIX}${baseUrl()}`,
                    'Access-Control-Allow-Credentials': 'true'
                };
                const result = await axios.post(`https://${process.env.REACT_APP_AUTH_PREFIX}${baseUrl()}${process.env.REACT_APP_AUTH_API_PATH}/user/login`, data, headers);

                if (!result.data.link) throw new Error();

                window.location = result.data.link;
            } catch (error) {

                setEmail('');
                setPassword('');
                setRecaptcha(null);
                setIsLoading(false);
                setError(error?.response?.data?.Error || error?.response?.data?.error || 'Errore, Riprova.');
            }

        }
    };

    const handleEmailChange = e => {
        setEmail(e.target.value);
        setIsTouched(true);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
        setIsTouched(true);
    }

    return (
        <div className=' xl:w-[80%] lg:w-[80%] px-[40px] py-[20px] mx-auto flex flex-row sm:flex-col xsm:flex-col my-8 '>

        <ScrollToTop />

            <div className='w-[30%]  sm:hidden xsm:hidden md:hidden'>
                <img src={Package02} alt="" className=' h-fit w-[90%] sm:w-1/2 sm:mx-auto xsm:mx-auto md:my-6'/>
            </div>

            <div className='w-[65%] sm:w-full xsm:w-full flex flex-col gap-y-8 mx-auto lg:w-[80%] xmd:w-[80%] '>

                <p className='text-[#00B27A] Brevia850 text-5xl sm:text-center xsm:text-center'>Bentornato nel Club!</p>

                <div className='flex flex-col items-left  gap-x-16 justify-between w-full md:w-full  lg:w-full sm:w-full xsm:w-full' >
                    <p className='Brevia700 text-xl xsm:text-center sm:text-center md:text-center '>Accedi o <span onClick={() => { navigate("/register") }} className='text-[#00B27A] underline hover:cursor-pointer '>registrati</span> </p>
                    <SignInGoogle />

                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='w-full  flex flex-row justify-items-center gap-8 sm:flex-col xsm:flex-col md:flex-col '>

                        <div className='flex flex-col gap-y-4 w-full'>
                            <p className='Brevia700 text-xl'>Email</p>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Email address"
                                required
                                value={email}
                                onChange={handleEmailChange}
                                disabled={isLoading}
                                className='h-16 border-4 border-black px-5 text-xl pop500' />
                        </div>
                        <div className='flex flex-col gap-y-4 w-full'>
                            <p className='Brevia700 text-xl'>Password</p>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={handlePasswordChange}
                                disabled={isLoading}
                                className='h-16 border-4 border-black px-5 text-xl pop500'
                                onKeyPress={pressSubmit}
                            />
                        </div>

                    </div>
                </form>

                {error && <div className="text-red-600">{error}</div>}

                <div className='flex xmd:flex-row lg:flex-row xl:flex-row flex-col gap-x-2 w-full mx-auto justify-between  '>
                    <div className='flex flex-col w-full xmd:w-1/2 xl:w-1/2 lg:w-1/2 xsm:items-center sm:items-center md:items-center'>
                        <div className='flex flex-row '>
                            <input type="checkbox" className='h-8 w-8 accent-[#00B27A]'/>
                            <p className='pop700 my-1 mx-4'>Mantieni l’accesso</p>
                        </div>
                        <p className='pop700 underline my-5'>Password dimenticata?</p>
                    </div>

                    {process.env.REACT_APP_NODE_ENV === "prod" && shouldShowRobotQuestion && (
                        <div className='flex flex-row py-2 gap-x-2 w-[95%] mx-auto items-center'>
                            <div className="text-red-600 text-left">Sei un robot?</div>
                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                                ref={recaptchaRef}
                                onChange={handleRecaptchaChange}
                                hl="it"
                                size='normal'
                            />
                        </div>)}

                    <button
                        type='submit'
                        onClick={e => handleSubmit(e)}
                        // disabled={isLoading || !email || !pass:word}
                        className='w-[48.6%] xmd:w-[48%] lg:w-[48%]  sm:w-full xsm:w-full md:w-full h-16 border-4 bg-[#DCFFCF] border-black items-center flex justify-center '>
                        {isLoading ? <CircularProgress color="success" /> : <p className='pop700 text-xl text-black'>Accedi</p>}
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Login
