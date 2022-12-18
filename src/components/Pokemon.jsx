import React from 'react'
import axios from 'axios';

const urlBase = "https://pokeapi.co/api/v2/pokemon/"
class Pokemon extends React.Component
{
    state = {name: "", data: null}

    componentDidMount(){
   console.log("entrando a componentDidMount")
   axios.get(urlBase + this.props.name).then(response => {
            this.setState({...this.state, data: response.data})
            console.log("pokemonactual", this.state)
        }).catch(error =>(
            console.log(error)
        ))
     
    }

    constructor(props){
        super(props);
        console.log("entrando a constructor")
        this.setState({...this.state, name: props.name})
        
    }
   
     render(){

        return <>

        <h1>Detalles de pokémon</h1>

            <p>{this.props.name}</p> 
            <p>{this.state.name}</p> 

        </>
    }
}

export default Pokemon;