import React, { useState } from 'react'
import Logo from '../../images/logo.svg'
import { useNavigate } from "react-router-dom"

export default function StoreSelectorModal({ closeStoreModal }) {

  const [storeModal, setStoreModal] = useState(false);
  const history = useNavigate()


  return (

    <>


      <div className="popup-bg" onClick={closeStoreModal}></div>
      <div className="slideout">


        <h1>Howdy STORE cunt fucker!!!</h1>
        
        
      </div>  
    
    
    </>
  
  
  
    )
   
}
