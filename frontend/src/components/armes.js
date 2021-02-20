import React from 'react'
import Arme from '../components/arme'
import Arc from '../asset/images/armes/arc.png'
import Epee from '../asset/images/armes/epee.png'
import Fleau from '../asset/images/armes/fleau.png'
import Hache from '../asset/images/armes/hache.png'



const AffichageArmes = (props) =>{
    return(
        <div className="d-flex align-items-center justify-content-between mt-5 mb-5">
        {props.listeArmes.map(arme => {
            let imgArme;
            switch(arme){
                case "arc" : imgArme = Arc;
                break;
                case "epee" : imgArme = Epee;
                break;
                case "fleau" : imgArme = Fleau;
                break;
                case "hache" : imgArme = Hache;
                break;
            }

            return (
                <Arme key={arme}
                      imageArme={imgArme}
                      isCurrentArme = {props.currentArme === arme} 
                      selectionArme={()=>props.selectionArme(arme)}> {arme}</Arme>
            )
        })}
    </div>
    )
}

export default AffichageArmes