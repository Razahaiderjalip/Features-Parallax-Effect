import React from 'react';
import ScrollToTop from '../../Reusable/ScrollToTop';
import Loader from '../../Reusable/Loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';
import YouTube from 'react-youtube';

function Test() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [])

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '600',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  const opts1: YouTubeProps['opts'] = {
    height: '390',
    width: '350',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <>

      <ScrollToTop />
      <div className=' w-full xl:px-[64px] px-[40px] mx-auto flex flex-col justify-center items-center  xsm:hidden sm:hidden md:hidden xmd:hidden  '>
        <div className=' w-[80%] lg:w-full px-[40px] mx-auto flex justify-center items-center'>
          {loading && <div className='  w-[80%] lg:w-full px-[40px] mx-auto flex justify-center items-center h-[750px]'><Loader /></div>}
        </div>
        
        <iframe src="https://capture.navattic.com/cl84g57og675009l7o2ks3pg8" width="100%" height="950" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>

      </div>

      <div className='md:hidden xmd:hidden lg:hidden xl:hidden m-5 my-10 mt-5 '>
      <h1 className=' Brevia700 italic text-2xl text-[#114653] text-center '>Benvenuto nel tour introduttivo di  Restaurants Club! </h1>
      <p className=' pop500  text-base text-[#114653] text-center mt-5 mb-2'>Premi play per far partire il video, per una migliore esperienza ti consigliamo di guardarlo a tutto schermo. </p>
      <p className=' pop500  text-base text-[#114653] text-center mb-10'>Visualizza questa pagina da computer per vivere l'esperienza interattiva. </p>  
        <YouTube videoId="oyzgl6NZ3_k" opts={opts1} onReady={onPlayerReady} />

      </div>



      <div className=' m-10 w-full px-[40px] mx-auto flex flex-col justify-center items-center xsm:hidden sm:hidden  lg:hidden xl:hidden'>
      <h1 className=' Brevia700 italic text-2xl text-[#114653] text-center mx-3'>Benvenuto nel tour introduttivo di  Restaurants Club! </h1>
      <p className=' pop500  text-base text-[#114653] text-center mt-5 mb-2'>Premi play per far partire il video, per una migliore esperienza ti consigliamo di guardarlo a tutto schermo.  </p>
      <p className=' pop500  text-base text-[#114653] text-center mb-16'>Visualizza questa pagina da computer per vivere l'esperienza interattiva. </p> 
        <YouTube videoId="oyzgl6NZ3_k" opts={opts} onReady={onPlayerReady} />

      </div>


    </>

  )
}

export default Test