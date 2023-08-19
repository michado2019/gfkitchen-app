import React from 'react'
import './MeetOurMd.css'
import mdPix from './assets/profile-pix.jpg'
const MeetOurMd = () => {
  return (
    <div className='meetOur-md_wrapper'>
      <div className='meetOur-md_content'>
        <div className='meetOur-md_info'>
          <img src={mdPix} alt='img' className='meetOur-md_pix'/>
        </div>
        <div className='meetOur-md_speech'>
          <h2 className='meetOur-md_speechTitle'>Hello, welcome to GFkitchen</h2>
          <p className='meetOur-md_speechDetails'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
          <h2 className='meetOur-md_name'>--- Adeshina Michael.</h2>
        </div>
      </div>
    </div>
  )
}

export default MeetOurMd