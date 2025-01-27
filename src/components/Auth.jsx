// import React from 'react'
import "../stylecomponent/auth.css"
import authimg from "../assets/backgroundvideo/avtar.png"
import Signup from "./Signup"
const Auth = () => {
  return (
    <div className='authbody'>
        <div className="auth_container">
            {/* left */}
            <Signup/>
            {/* right */}
            <div className="auth_img">
                <img src={authimg} alt="..." />
            </div>
        </div>
        
    </div>
  )
}

export default Auth