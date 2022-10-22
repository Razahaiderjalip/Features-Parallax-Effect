import React, { useState, useEffect } from 'react'
import axios from 'axios';
import useQuery from '../../Hooks/useQuery';

import { FcGoogle } from "react-icons/fc"
import { baseUrl } from '../../App';
function SignInGoogle() {
    const query = useQuery();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // check given code in the URL on redirect back from google auth
    useEffect(() => {
        const auth = async (code) => {
            try {
                const url = `https://${process.env.REACT_APP_AUTH_PREFIX}${baseUrl()}${process.env.REACT_APP_AUTH_API_PATH}/user/googleInfo?code=${code}`;
                const result = await axios.get(url);
                if (result?.data?.link)
                    window.location = result.data.link;
                else
                    throw new Error('No link received');
            } catch (error) {
                setError("Errore, Riprova.")
            }

            setError(null)
            setIsLoading(false);
        };

        setIsLoading(true);
        const code = query.get('code');
        if (!code) {
            setIsLoading(false);
            return;
        }

        auth(code);
    }, [query]);

    const handleLogin = async () => {
        setIsLoading(true);

        try {
            const result = await axios.get(`https://${process.env.REACT_APP_AUTH_PREFIX}${baseUrl()}${process.env.REACT_APP_AUTH_API_PATH}/user/googleAuth`);

            if (!result.data) {
                setError('Errore, Riprova.');
                setIsLoading(false);
                return;
            }
            const url = result.data;

            window.location = url;
            setError(null);
        } catch (error) {
            setError('Errore, Riprova.');
        }

        setIsLoading(false);
    };

    return (
        <>
            <button onClick={handleLogin} disabled={isLoading} className='xl:w-[35%] lg:w-[35%] xmd:w-[40%] w-full h-16 flex flex-row items-center gap-x-2 pop500 border-4 justify-center border-black my-3'>
                <FcGoogle size={30} />
                Accedi con Google
            </button>
            {error && <div>{error}</div>}
        </>
    )
}

export default SignInGoogle
