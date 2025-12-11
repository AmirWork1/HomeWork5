import { useState } from "react";

export const uesCangColor = (_val) =>{
    const [bgColor,setBgColor] = useState(_val)
    
       
    const changeColor  =()=>{
        const color = bgRef.current.value
        setBgColor(color)
    }
    return{bgColor,setBgColor}
}