import React from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {

  return (

    <>

      <button onClick={()=>window.scrollTo({top: 0, right: 0, behavior: 'smooth'})} className='w-16 h-16 bg-white hover:bg-gray-100 border-4 border-black fixed bottom-8 right-8 z-50'> <KeyboardArrowUpIcon/> </button>
      
    </>

  );
}

export default ScrollToTopButton