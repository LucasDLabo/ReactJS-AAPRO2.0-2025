import { useState } from 'react'
import ChangeColor from './assets/components/ChangeColor'
import BestFootballTeam from './assets/components/BestFootballTeam'
import DinamicText from './assets/components/DinamicText'
import ChooseColor from './assets/components/ChooseColor'
import Clicker from './assets/components/Clicker'
import './App.css'

function App() {


  return (
    <>
      <ChangeColor />
      <BestFootballTeam></BestFootballTeam>
      <DinamicText></DinamicText>
      <ChooseColor></ChooseColor>
      <Clicker></Clicker>
    </>
  )
}

export default App
