import React from 'react'
import './CartAway.css'
import { Close } from '@mui/icons-material'
const CartAway = ({cartDisplay, setCartDisplay}) => {


  return (
    <div className='cartAway-wrapper' style={{display: cartDisplay?'block':'none'}} >
        <div className='cartAway-contents'>
         <Close className='cartAway-close_icon' onClick={() => setCartDisplay(prev=>!prev)}/>
            CartAway
        </div>
    </div>
  )
}

export default CartAway