import React from 'react';
import { fortAwesome } from 'fontawesome';

import { faCross} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Single from '../pages/Single'

export default class PersonList extends React.Component {
  state = {
    card: []
  }

  componentDidMount() {
    axios.get(`https://rickandmortyapi.com/api/character`)
      .then(res => {
        const card = res.data.results;
        this.setState({ card });
        console.log(res.data.results);
      })
  }

  render() {
    return (
      <div className='table'>
        {this.state.card.map(card => 
        <div className='card'>
            <img style={{width:200, height: 200}} src={card.image}/>
            <h2 className='name'>{card.name}</h2>
            <p>{card.location.name}</p>
            <button className='btn' onClick={Single}>Voir plus...</button>
        
        </div>)}

      </div>
    )
  }
  
}
/*
function deadOrAlive() {

  if (card.status === "Alive") {
    return cross
  } else {
    return
  }
}
console.log(deadOrAlive);*/

 