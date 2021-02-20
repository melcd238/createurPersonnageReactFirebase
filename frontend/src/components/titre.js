import React from 'react'
import classes from'./titre.module.css'


const Titre = (props)=>{
    return(
        <>
        <h1 className = {`${classes.titreH1}  text-center  bg-info`} > {props.children}</h1>
        </>
    )
}

export default Titre
