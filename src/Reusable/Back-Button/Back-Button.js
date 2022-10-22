import React from "react";
import { useNavigate } from 'react-router-dom';
import BackArrow from '../../Assets/BackArrow.svg';
import './Back-Button.css';

const Backbutton = () => {

  const navigate = useNavigate();

  return (

    <div className="flex w-full pb-5 pl-5">

      <div className="flex flex-row w-28 mt-4">

        <button onClick={()=>navigate(-1)} className="backBtn bg-[#00B27A] hover:bg-[#] w-full"><img src={BackArrow} alt="Back Arrow" className="mr-4"/> Indietro </button>

      </div>
            
    </div>

  )
}

export default Backbutton