import React from 'react'
import Arc from '../asset/images/armes/arc.png'
import Epee from '../asset/images/armes/epee.png'
import Fleau from '../asset/images/armes/fleau.png'
import Hache from '../asset/images/armes/hache.png'
import ImagePlayer1 from '../asset/images/persos/player1.png'
import ImagePlayer2 from '../asset/images/persos/player2.png'
import ImagePlayer3 from '../asset/images/persos/player3.png'



const FichePersonnage = (props)=>{
    let imageToPrint = "";
    if(props.numImage === 1 ) imageToPrint = ImagePlayer1;
    else if(props.numImage === 2) imageToPrint = ImagePlayer2;
    else if(props.numImage === 3) imageToPrint = ImagePlayer3;

    let armeToPrint = "";
    if(props.arme === "arc") armeToPrint = Arc;
    else if(props.arme === "hache") armeToPrint = Hache;
    else if(props.arme ==="fleau")  armeToPrint = Fleau;
    else if(props.arme ==="epee")   armeToPrint = Epee;

   


    return(
        <>
    <div className="d-flex justify-content-between" style={{width:"400px"}}>
        <div><img src={imageToPrint} alt="image personnage" className="card-img-top" style={{width:"100px"}}></img></div>
           
        <div className=" ml-5">
            <p className="title">force : {props.force}</p>
            <p className="title">agilité : {props.agilite}</p>
            <p className="title">intelligence: {props.intelligence}</p>
            <p className="title">Arme : {props.arme}
            <img src={armeToPrint} alt="image arme" style={{width:"50px"}}></img>
            </p>
        </div>
    </div>
        </>
    )
}

export default FichePersonnage