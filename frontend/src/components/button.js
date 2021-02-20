import React from 'react'



const Button = (props)=>{
    return(
        <>
        <button className={props.btnColor} onClick={props.clic}>{props.children}</button>
        </>
    )
}

export default Button
