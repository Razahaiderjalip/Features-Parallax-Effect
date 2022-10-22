import React from 'react'
import Home from '../Components/Home/Home';
import Pricing from '../Components/Pricing/Pricing';
import { Routes, Route } from 'react-router';
import MainFAQ from '../Components/FAQ/MainFAQ';
import Register from '../Components/Register/Register';
import Login from '../Components/Login/Login';
import Espresso from '../Components/Espresso/Espresso';
import Tavola from '../Components/Tavola/Tavola';
import Viandante from '../Components/Viandante/Viandante';
import Privacypolicy from '../Components/Privacy-Policy/Privacy-Policy-Page';
import Cookiepolicy from '../Components/Cookie-Policy/Cookie-Policy-Page';
import Termsandconditions from '../Components/Terms & Conditions/Terms-and-Conditions';
import Errornotfound from '../Components/Errors/404';
import ThankYou from '../Components/Response/ThankYou';
import Error from '../Components/Response/Error';

import Beta from '../Components/Beta/Beta';
import Beta2 from '../Components/Beta/Beta2';

import Funzioni from '../Components/Functions/Functions';
import Funzioni2 from '../Components/Funzioni2/Funzioni2';

import Test from '../Components/Test/Test';
import PreTest from '../Components/Test/ContactDemo';
import Contact from '../Components/Contact/Contact';

import ForgotPassword from '../Components/Password-Change/PasswordChange';
import Partner from '../Components/Partner/Partner';

function Routing() {
    
    return (

        <Routes>

            <Route exact path='/' element={<Home />} />
            <Route exact path='/pricing' element={<Pricing />} />
            <Route exact path='/faq' element={<MainFAQ />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/espresso' element={<Espresso />} />
            <Route exact path='/tavola' element={<Tavola />} />
            <Route exact path='/viandante' element={<Viandante />} />
            <Route exact path="/privacypolicy" element={<Privacypolicy />} />
            <Route exact path="/cookiepolicy" element={<Cookiepolicy />} />
            <Route exact path="/termsandconditions" element={<Termsandconditions />} />
            <Route exact path='/thank-you' element={<ThankYou />} />
            <Route exact path='/error' element={<Error />} />

            <Route exact path='/accessoanticipato' element={<Beta />} />
            <Route exact path='/accessoanticipato2' element={<Beta2 />} />

            <Route exact path='/funzioni' element={<Funzioni2 />} />

            <Route exact path='/test' element={<Test />} />
            <Route exact path='/pretest' element={<PreTest />} />

            <Route exact path='/contact' element={<Contact />} />

            <Route path="*" element={<Errornotfound />} />

            <Route exact path='/funzioni2' element={<Funzioni />} />

            <Route exact path='/forgot-password' element={<ForgotPassword />} />

            <Route exact path='/partner' element={<Partner />} />
        </Routes>
    )
}

export default Routing