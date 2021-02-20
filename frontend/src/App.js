import React, { Component } from 'react'
import CreateurPersonnage from './containers/createurPersonnage'
import ListePersonnage from './containers/listePersonnage'




class App extends Component{
  state = {
    refresh : false
  }

  handleRefresh = ()=>{
    this.setState((oldState)=>{
        return{
          refresh: !oldState.refresh
        }
    })
  };
  



  render(){
    return(
      <div  className="container">
    
      <CreateurPersonnage refresh= {this.handleRefresh}/>
        
      <ListePersonnage refresh={this.state.refresh}/>
  
     </div>
    )
   
  }
}





export default App;
