import React from "react";
import { useNavigate } from "react-router-dom";
import CookieConsent from "react-cookie-consent";



function MyCookieBanner() {
  function handleClick() {

  }

  const navigate = useNavigate()
  return (

    <div>
      <CookieConsent
        cookieName="RestaurantsClubCookies"
        style={{ background: "#00B27A", height: "fit", alignItems: "center", paddingTop: 10, paddingBottom: 60 }}
        buttonText="Accetta"
        declineButtonText="Rifiuta"
        enableDeclineButton={true}
        dismissOnScroll={false}
        disableButtonStyles
        declineButtonClasses="rounded-lg px-6 py-2 font-semibold mx-5 border-2 border-white bg-transparent text-white hover:bg-white hover:border-white hover:text-[#00B27A]"
        buttonClasses="rounded-lg px-6 py-2 font-semibold mx-5 border-2 border-white bg-white text-[#00B27A] hover:bg-[#FFA563] hover:border-[#FFA563] hover:text-white"
        onAccept={handleClick}
      >
        <p className="px-[20px] py-[9px] text-left text-[24px]">
          Usiamo i cookie nel nostro sito web per fornirti la miglior esperienza possibile.
          <br /> Cliccando su 'Accetta',  acconsenti all'utilizzo di tutti i <span onClick={()=>navigate("/privacypolicy")} className="underline hover:cursor-pointer" >cookies</span>
        </p>
      </CookieConsent>
    </div>
  )
}

export default MyCookieBanner