import React from 'react'
import '../styles/Home.css';
import logo from '../assets/logo-rick-et-morty.png';
import CardList from '../components/CardList'


function Home() {
  return (
    <div className="App">
      <img href="" src={logo} className="App-logo" alt="logo" />
      <div><CardList/></div>
  </div>
  );
}

export default Home