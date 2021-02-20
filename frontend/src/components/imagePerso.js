import React from 'react'
import ImagePlayer1 from '../asset/images/persos/player1.png'
import ImagePlayer2 from '../asset/images/persos/player2.png'
import ImagePlayer3 from '../asset/images/persos/player3.png'
import classes from './imagePerso.module.css'


const ImagePerso = (props)=>{
    let imageToPrint = "";
    if(props.numImage === 1 ) imageToPrint = ImagePlayer1;
    else if(props.numImage === 2) imageToPrint = ImagePlayer2;
    else if(props.numImage === 3) imageToPrint = ImagePlayer3;

    return(
        <div className="d-flex justify-content-between align-items-center">
        <i className={`${classes.fleche} bi bi-caret-left-square-fill` } onClick={props.clic1} ></i>
        <img src={imageToPrint} alt="image d'un personnage"></img>
        <i className={`${classes.fleche} bi bi-caret-right-square-fill`} onClick={props.clic} ></i>
        </div>
    )

}

export default ImagePerso;