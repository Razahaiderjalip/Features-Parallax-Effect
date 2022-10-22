import React from "react";

import ScrollToTop from "../../Reusable/ScrollToTop";

import { useNavigate } from "react-router-dom";

import Image1 from "../../Assets/guess.svg";

import Image3 from "../../Assets/hands.svg";

import Image2 from "../../Assets/img_partner3.svg";

import Image4 from "../../Assets/round-partner.svg";
import Image5 from "../../Assets/star-partner.svg";

function Pricing() {
  const navigate = useNavigate;

  return (
    <div className='gap-y-8 mt-14 sm:mt-4 md:mt-4'>
      <ScrollToTop />

      {/*---------------------------------------------- 1° blocco - Diventa nostro partner ---------------------------------------------------------------- */}
      <div className='w-[78.5%] xsm:w-full sm:w-full  md:w-full  px-[40px] mx-auto flex flex-col gap-y-5'>
        <p className='text-[#114653] Brevia700 text-4xl text-center my-2 mx-auto uppercase'>
          Diventa nostro partner
        </p>
        <p className='text-[#114653] Brevia700 text-2xl italic text-center w-[60%] xsm:w-full sm:w-full  md:w-full  mx-auto'>
          Abbiamo in programma di creare un cambiamento significativo per i
          servizi di ristorazione.
        </p>
        <p className='text-[#114653] pop700 text-xl  text-center w-[70%] xsm:w-full sm:w-full  md:w-full  mx-auto'>
          Ti piacerebbe entrare a far parte della storia?
        </p>

        <a
          href={require("../../Assets/Documents/ProgrammaPartner2022.pdf")}
          className='pop600 text-[#009C6B] text-xl w-96 h-16 border-[3px]  border-[#009C6B] items-center flex justify-center mx-auto sm:w-[80%] xsm:w-[80%] md:w-[80%] my-5 '
        >
          Scarica la scheda
        </a>
      </div>

      {/*---------------------------------------------- 2° blocco - 3  card  ------------------------------------------------------------------------------ */}
      <div className='flex flex-row w-[78.5%] px-[40px] justify-between mx-auto my-10  xmd:w-[98%] md:w-[80%] xsm:w-full sm:w-full sm:px-[20px]  md:px-[20px] '>
        <div className='flex flex-row gap-x-5 gap-y-10 items-end xsm:flex-col sm:flex-col  md:flex-col'>
          {/*--------- 1  card  --------- */}
          <div className='w-1/3 xsm:w-full sm:w-full  md:w-full'>
            <div className='bg-[#00B27A] py-2 '></div>
            <div className='bg-white border-4 border-t-0 border-black flex flex-col gap-5 '>
              <img src={Image1} alt='hero' className='' />

              <p className='text-black Brevia700 text-2xl text-center'>
                Perché
              </p>

              <p className='text-black pop400 text-lg text-center'>
                Per guadagnare e ampliare la tua base clienti raggiungendo
                più operatori della Ristorazione, offrendo consulenze con
                un sistema tutelante e guadagnando sulla rivendita della
                piattaforma.{" "}
              </p>
            </div>
          </div>

          {/*---------- 2  card  --------- */}
          <div className='w-1/3 xsm:w-full sm:w-full  md:w-full'>
            <div className='bg-[#00B27A] py-2 '></div>
            <div className='bg-white border-4 border-t-0 border-black flex flex-col  gap-5 '>
              <img src={Image2} alt='hero' className='' />

              <p className='text-black Brevia700 text-2xl text-center'>
                Cosa
              </p>

              <p className='text-black pop400 text-lg text-center'>
                Potrai gestire per conto del Ristoratore della Piattaforma,
                creare nuovi temi e template grafici per social media e
                siti web da integrare in piattaforma in base alle esigenze
                del cliente e/o rivendere il servizio
              </p>
            </div>
          </div>

          {/*---------- 3  card  -------- */}
          <div className='w-1/3 xsm:w-full sm:w-full  md:w-full'>
            <div className='bg-[#00B27A] py-2 '></div>
            <div className='bg-white border-4 border-t-0 border-black flex flex-col  gap-5 '>
              <img src={Image3} alt='hero' className='' />

              <p className='text-black Brevia700 text-2xl text-center'>
                Come
              </p>

              <p className='text-black pop400 text-lg text-center'>
                Candidati per il Programma Partner e ti metteremo in
                contatto con i Ristoratori che utilizzano Restaurants Club
                che hanno bisogno dei tuoi servizi oppure rivendi il
                servizio e prendi una provvigione sul contratto
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*---------------------------------------------- BANNER BLU  --------------------------------------------------------------------------------------- */}
      <div className='w-full  bg-[#114653] flex flex-col items-center py-5 my-5 mt-10'>
        <p className='Brevia700 text-4xl xsm:text-xl sm:text-xl text-white text-center '>
          Posti limitati! <br></br> Solo 200 Agenzie e/o Freelancer
        </p>
      </div>

      {/*---------------------------------------------- 3° blocco - 3  card + 4° blocco ------------------------------------------------------------------ */}

      <div className='flex flex-col w-[78.5%] px-[40px] justify-between mx-auto  xmd:w-[98%] md:w-[98%] '>
        <div>
          <p className='text-[#00B27A] Brevia850 text-[50px] xmd:text-[42px] md:text-[32px] sm:text-[32px] text-center my-2 ]  mx-auto'>
            Quali Servizi può offrire la tua Agenzia?
          </p>
        </div>

        <div className='flex flex-row gap-x-5 items-end xsm:flex-col sm:flex-col  md:flex-col my-10 mb-32'>
          <div className='w-1/3'>
            <div className='bg-[#FC6371] py-2 '></div>
            <div className='bg-white border-4 border-t-0 border-black flex flex-col  gap-5 p-10 pt-16'>
              <p className='text-black pop700 text-2xl text-center'>
                Servizio di grafica di temi e/o template
              </p>

              <p className='text-black pop400 text-lg text-center'>
                Sviluppo di temi e/o template per il sito internet e/o app
                del Ristoratore in ogni componente grafica secondo le
                richieste del Ristoratore.
              </p>
            </div>
          </div>
          <div className='w-1/3'>
            <div className='bg-[#FC6371] py-2 '></div>
            <div className='bg-white border-4 border-t-0 border-black flex flex-col  gap-5 p-10 pt-16'>
              <p className='text-black pop700 text-2xl text-center'>
                Servizio di grafica e codifica di temi
              </p>

              <p className='text-black pop400 text-lg text-center'>
                Sviluppo di temi per il sito internet e/o app del
                Ristoratore in ogni componente grafica con sviluppo dei
                relativi codici informatici nel linguaggio “React”.
              </p>
            </div>
          </div>
          <div className='w-1/3'>
            <div className='bg-[#FC6371] py-2 '></div>
            <div className='bg-white border-4 border-t-0 border-black flex flex-col  gap-5 p-10 pt-16'>
              <p className='text-black pop700 text-2xl text-center'>
                Assistenza Premium
              </p>

              <p className='text-black pop400 text-lg text-center'>
                Attività di assistenza in favore del Ristoratore per
                l’utilizzo di tutte le funzionalità della Piattaforma: 1h
                di consulenza max a settimana in videochiamata o di persone
                + lavoro in autonomia dell’Agenzia
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-row justify-center mx-auto gap-x-11 sm:flex-col xsm:flex-col  md:flex-col '>
          <div className='w-2/5 md:w-[80%] h-max mx-auto sm:w-[80%] xsm:w-[80%] flex  xmd:w-[80%]'>
            <img src={Image4} alt='hero' className='' />
          </div>
          <div className='w-3/5 xmd:w-2/3 md:w-full sm:w-full text-left flex flex-col  gap-y-10  xl:pl-16 lg:pl-16 xl:mt-20 lg:mt-20 '>
            <div className='flex flex-row gap-x-4 w-full '>
              <div className='w-5 h-5  rounded-full bg-[#00B27A] m-1' />
              <p className='Brevia700 italic  text-2xl sm:text-xl text-black sm:text-center xsm:text-center  md:text-center'>
                Un lavoro di sinergia
              </p>
            </div>
            <p className='pop500 text-xl sm:text-lg text-black '>
              Il Programma Partner di Restaurants Club è il punto di
              incontro tra i Ristoratori Italiani e le Agenzie Creative e
              Digitali come la tua, che possono utilizzare la piattaforma
              come per una collaborazione sinergica e vantaggiosa.
            </p>

            <div className='flex flex-row gap-x-4 w-full '>
              <div className='w-5 h-5  rounded-full bg-[#00B27A] m-1' />
              <p className='Brevia700 italic  text-2xl sm:text-xl text-black sm:text-center xsm:text-center  md:text-center'>
                Tuteliamo la tua professionalità
              </p>
            </div>
            <p className='pop500 text-xl sm:text-lg text-black '>
              Restaurants Club si fa garante della gestione del contratto e
              del pagamento tra Ristoratore ed Agenzia: mai più lavori non
              pagati!
            </p>

            <a
              href={require("../../Assets/Documents/ProgrammaPartner2022.pdf")}
              className='pop600 text-[#009C6B] text-xl w-96 h-16 border-[3px]  border-[#009C6B] items-center flex justify-center sm:w-[80%] xsm:w-[80%] md:w-[80%] my-5 '
            >
              Scarica la scheda
            </a>

            <div className='pop600 text-xl border-b-2 border-black text-black sm:text-sm xmd:text-sm w-max sm:mx-auto xsm:mx-auto  md:mx-auto sm:w-[80%] xsm:w-[80%] md:w-[80%]'></div>
          </div>
        </div>
      </div>

      {/*---------------------------------------------- 5° blocco --------------------------------------------------------------------------------------- */}

      <div className='flex flex-row sm:flex-col-reverse sm:h-fit w-[78.5%] lg:w-[95%] px-[40px]  sm:w-full  xmd:w-[98%] md:w-[98%] mx-auto my-10 '>
        <div className='w-[60%] md:w-2/3 sm:w-full text-left flex flex-col sm:p-5 py-20 xmd:py-10 md:py-5 gap-y-6 '>
          <p className='Brevia850 text-6xl xsm:text-4xl sm:text-4xl xsm:text-center sm:text-center text-[#00B27A] w-full'>
            Guadagna con Restaurants Club!
          </p>
          <p className='Brevia700 text-4xl xsm:text-3xl sm:text-3xl xsm:text-center sm:text-center italic  text-[#000000]'>
            Fino a 575€ per abbonamento firmato suggerito da te
          </p>
          <div className='flex flex-col gap-x-4 w-full lg:w-[87%] xl:w-[87%]'>
            <p className='pop400 text-lg xsm:text-center sm:text-center  text-black w-[90%] xsm:mx-auto sm:mx-auto'>
              La tua Agenzia può unirsi a noi nel promuovere Restaurants
              Club presso i Ristoratori. Ti forniremo tutto il materiale di
              vendita e gli strumenti adatti.
            </p>
            <p className='pop400 text-lg xsm:text-center sm:text-center  text-black w-[90%] xsm:mx-auto sm:mx-auto my-4'>
              Hai trovato qualche contatto interessato? Puoi guadagnare
              segnalandoci i contatti di Ristoratori a cui hai parlato di
              noi.
            </p>
          </div>
        </div>
        <div className='w-[40%] md:w-1/3 sm:w-full flex items-center justify-center '>
          <img src={Image5} alt='hero' className='' />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
