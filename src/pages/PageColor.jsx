import React,{useContext, useRef} from "react";
import { AppContext } from "../context/AppContext"


export default function PageColor() {
   const {bgColor,setBgColor} = useContext(AppContext)
    const bgRef = useRef(); 
    

     return (
    <div className='container'>
       
          <h3> PageColor</h3>
          <h2>Enter your favorite color</h2>
          <input ref={bgRef} onChange={()=>{
            setBgColor(bgRef.current.value) 
                 }}
            >
            </input>  
       
        
        
        </div>
  )
}
