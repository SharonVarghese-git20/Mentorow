import {useState} from 'react';
import React from 'react';

import { useMediaQuery } from 'react-responsive';

import MediaQuery from 'react-responsive'

const Contact=()=> {

  return (
    <div >
     <div className='ContactS1' >
          <div className="pt-8"><h1 className=" md:tracking-wide" >Still Confused About Your Career Choice?Consult With Our Experts</h1>
          
          <button>Contact Us</button>
          </div>
     
     <img className="object-cover h-[610px] w-[600px] rounded-full bg-neutral-950 " src={require('./img/img2.jpg')} ></img>
    
     </div>
    </div>
  );
};

export default Contact;
