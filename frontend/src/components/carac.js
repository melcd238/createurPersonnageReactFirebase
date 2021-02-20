import React from 'react'


const Carac = (props)=>{
     let carre = [];
     for(let i= 0; i < props.nbPoints ; i ++){
         carre.push(<i key= {i} className="bi bi-star-fill"></i>)
     };

     return(
         <div><i className="bi bi-file-minus" onClick={props.moins}></i> {props.children} {carre}<i className="bi bi-file-plus" onClick={props.plus}></i> </div>
     )
}


export default Carac

