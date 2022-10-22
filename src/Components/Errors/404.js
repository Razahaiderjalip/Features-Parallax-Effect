import React from "react";
import caterror from "../../Assets/404-Cat-Error.svg";
import Backbutton from "../../Reusable/Back-Button/Back-Button";
import ScrollToTop from '../../Reusable/ScrollToTop';
import '../../App.css';

function Errornotfound() {

  return (

    <div className="flex flex-col pb-24 place-content-center place-items-center">

      <div className="flex flex-col w-full">

      <ScrollToTop />

        <div className="flex flex-col w-full px-12">

        <Backbutton />

          <div className="flex flex-col w-full justify-center pt-12">

            <div className="flex w-full justify-center">

              <h3 className="text-4xl Brevia700 text-[#00B27A]">Questa pagina è stata spostata per fare spazio ad esigenze maggiori</h3>

            </div>

            <div className="flex w-full h-full mx-auto place-content-center place-items-center">

              <img src={caterror} alt="" className="w-max h-max"></img>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Errornotfound;
