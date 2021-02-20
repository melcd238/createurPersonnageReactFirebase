import React, { Component } from 'react'
import Titre from '../components/titre'
import Button from '../components/button'
import Personnage from '../components/personnage'
import AffichageArmes from '../components/armes'

import axios from 'axios'




class CreateurPersonnage extends Component{
    state = {
        personnage : {
            image: 1,
            force: 3,
            agilite: 2,
            intelligence : 2,
            arme: null
        },
        pointsRestants : 7,
        armes : null,
        loadind : false
    }
    componentDidMount = ()=>{
        this.setState({loading: true});
        axios.get("https://creapersomel-default-rtdb.europe-west1.firebasedatabase.app/armes.json")
          .then(response =>{
              // on recupère un objet et nous on souhaite un tableau 
               const armesArray = Object.values(response.data);// on transforme en tableau
               this.setState({armes : armesArray,
                              loading: false});
          })
          .catch(error =>{
              console.log(error)
              this.setState({loading: false})
          })
     }
 

    HandleChangeImageG=()=>{
      this.setState((oldState)=>{
          const newPersonnage = {...oldState.personnage};
          if(oldState.personnage.image <= 1) newPersonnage.image = 3;
          else newPersonnage.image --;
          return {personnage: newPersonnage}
// il faut mettre à jour l'information image dans le state: on utilise donc la fonction setstate()
// on utilise une une information présente dans nos State donc on utilise oldState
// avec if on teste la valeur qu'on a dans notre state soit pour l'incrémenter soit pour décrementer
// pour cela on duplique notre personnage et qui va recupérer les valeur dans le state
// enfin on met a jour notre state. 

      })
    }
    HandleChangeImageD=()=>{
        this.setState((oldState)=>{
            const newPersonnage = {...oldState.personnage};
            if(oldState.personnage.image >= 3) newPersonnage.image = 1;
            else newPersonnage.image ++;
            return {personnage: newPersonnage}
   })
   }
   HandleEnleverPoint = (carac)=>{ // carac = les caractéristique passé en parametre de la fonction 
    this.setState((oldState)=>{
        if(oldState.personnage[carac]<= 0 || oldState.pointsRestants >= 7) return null;
        const newPointCarac = oldState.personnage[carac] - 1;
        const newPersonnage = {...oldState.personnage};
        const newPointDispo = oldState.pointsRestants + 1;
        newPersonnage[carac]= newPointCarac;
       return {
           personnage : newPersonnage,
           pointsRestants : newPointDispo
       }
    })
      
   }
   HandleAjouterPoint = (carac)=>{
      this.setState((oldState)=>{
          if(oldState.personnage[carac]>=5 || oldState.pointsRestants <= 0) return null;
          const newPointCarac = oldState.personnage[carac] + 1;
          const newPersonnage = {...oldState.personnage};
          const newPointDispo = oldState.pointsRestants - 1;
          newPersonnage[carac]= newPointCarac;
         return {
             personnage : newPersonnage,
             pointsRestants : newPointDispo
         }
      })
   }
   HandleSelectionArme = (arme) => {
     const newPerso = {...this.state.personnage}
     newPerso.arme = arme
     this.setState({personnage : newPerso})
     
   };
   HandleReinitialiser = () =>{
       this.setState(()=>{
           return{
               personnage : {
                image: 1,
                force: 0,
                agilite: 0,
                intelligence : 0,
                arme: null

               },
               pointsRestants : 7,
               armes :[ "epee","fleau","arc","hache"]
           }
       })
   }
   HandleCreation = () =>{
       this.setState({loading: true})
       const player = {
           personnage : {...this.state.personnage},
           prénom : "mel"
       }
       axios.post("https://creapersomel-default-rtdb.europe-west1.firebasedatabase.app/perso.json", player)
       .then(response =>{
           console.log(response)
           this.setState({loading: false})
           this.HandleReinitialiser()
           this.props.refresh();
       })
       .catch(error=>{
           console.log(error)
           this.setState({loading: false})
           this.HandleReinitialiser()
       })
   }


    render(){
        return(
            <>
             <Titre> Créateur de Personnage </Titre>
             <Personnage {...this.state.personnage}
                        changeImageG={this.HandleChangeImageG}
                        changeImageD={this.HandleChangeImageD}
                        enleverPoint={this.HandleEnleverPoint}
                        ajouterPoint={this.HandleAjouterPoint}
                        pointsRestants = {this.state.pointsRestants} >
             </Personnage>

             {this.state.loading && <div>Chargement...</div>}

            
             {this.state.armes &&
             <AffichageArmes listeArmes = {this.state.armes}
             selectionArme = {this.HandleSelectionArme}
             currentArme={this.state.personnage.arme}/>
             }
            

            
             
             <Button btnColor="btn btn-danger col-6" clic={this.HandleReinitialiser}>Réinitialiser</Button>
             <Button btnColor="btn btn-success col-6" clic={this.HandleCreation}>Créer</Button>
            

             
            </>
        )
    }
}

export default CreateurPersonnage