import React, { Component } from 'react'
import FichePersonnage from '../components/fichePersonnage'
import axios from 'axios'



class ListePersonnage extends Component{
    state = {
        personnages : null,
        loading : false
    }
    componentDidMount = ()=>{
        this.setState({loading: true})
        axios.get("https://creapersomel-default-rtdb.europe-west1.firebasedatabase.app/perso.json")
        .then(response =>{
            const listePerso = Object.values(response.data);
            console.log(listePerso)
            this.setState({personnages : listePerso})
            this.setState({loading: false})
        })
        .catch(error=>{
            console.log(error)
            this.setState({loading: false})
        })
    }
  componentDidUpdate = (oldProps, oldState)=>{
      if(oldProps.refresh !== this.props.refresh){
        this.setState({loading: true})
        axios.get("https://creapersomel-default-rtdb.europe-west1.firebasedatabase.app/perso.json")
        .then(response =>{
            const listePerso = Object.values(response.data);
            console.log(listePerso)
            this.setState({personnages : listePerso})
            this.setState({loading: false})
        })
        .catch(error=>{
            console.log(error)
            this.setState({loading: false})
        })
      }
   

  }
    


    render(){
        return(
            <>
            {this.state.loading && <div> Chargement</div>}

            {!this.state.loading && this.state.personnages &&
            <div className="row no-gutters ">
                {this.state.personnages.map((perso, index )=>{
                    console.log(perso)
                    return(
                        
                        <div key={index} className="col-6 mt-5 border border-secondary border-3 rounded mb-5" >
                          <h2  className="text-center rounded bg-secondary text-white mt-2">{perso.prénom}</h2>  
                        <FichePersonnage  force={perso.personnage.force}
                                         agilite={perso.personnage.agilite}
                                         intelligence={perso.personnage.intelligence}
                                         arme={perso.personnage.arme}
                                         numImage= {perso.personnage.image} ></FichePersonnage>
                        </div>
                          
                    )
                })}
            </div>}
            
            </>
        )
    }
}


export default ListePersonnage