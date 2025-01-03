import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email! </h1>
        <p>Subsicre to our NewsLetter and Stay Updated</p>
        <div className='box'>
            <input type="email" placeholder='Your Email Id'/>
            <button>Subscribe</button>
            
        </div>
      
    </div>
  )
}

export default NewsLetter
