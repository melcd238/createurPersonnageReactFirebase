import React from 'react'
import Carac from '../components/carac'
import classes from './caracPerso.module.css'


const CaracPerso = (props)=>{
    return(
      
       <div className='text-center mt-5'>
       <div>Points restant : <span className={classes.border}>{props.pR}</span> <br></br></div> 
        <div>
            <Carac nbPoints={props.force}
                   moins = {()=> props.enleverPoint('force')} 
                   plus={()=> props.ajouterPoint('force')}>Force : </Carac>
            <Carac nbPoints={props.agilite} 
                   moins = {()=> props.enleverPoint('agilite')} 
                   plus={()=> props.ajouterPoint('agilite')}>Agilité :</Carac>
            <Carac nbPoints={props.intelligence} 
                   moins = {()=> props.enleverPoint('intelligence')} 
                   plus={()=> props.ajouterPoint('intelligence')}>Intelligence :</Carac>
        </div>
        </div>
       
 
     
    )
}


export default CaracPerso

