import React from 'react'
import ImagePerso from '../components/imagePerso'
import CaracPerso from '../components/caracPerso'



const Personnage = (props)=>{
    return(
        <div className=" d-flex row">
        <div className="col-6"> <ImagePerso numImage={props.image} clic1={props.changeImageG} clic={props.changeImageD}/> </div>

        <div className='col-6'> <CaracPerso  pR={props.pointsRestants}
                                             force={props.force}
                                             agilite={props.agilite}
                                             intelligence={props.intelligence}
                                             enleverPoint = {props.enleverPoint}
                                             ajouterPoint = {props.ajouterPoint} />
           
        </div>
        </div>
    )
}

export default Personnage