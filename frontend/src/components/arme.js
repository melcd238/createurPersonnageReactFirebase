import React from 'react'



const Arme = (props)=>{
   
    return(
        <div> <img src={props.imageArme}
                   alt={props.children} 
                   onClick={props.selectionArme} 
                   style = {{opacity: props.isCurrentArme ?  1 : 0.3,
                            cursor:"pointer" }}>
                    </img> {props.children} </div>
    )
}

export default Arme