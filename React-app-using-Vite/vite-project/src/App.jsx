import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from './components/FooterComponent';
// import NavBarComponent from './components/NavBarComponent';
import FruitsComponent from './components/FruitsComponent';

import CityComponent from './components/CityComponent';

function App() {
  const [count, setCount] = useState(0)
  

  const fruitsArray = ["Apple", "Banana","Orange", "Pine Apple", "Pomogranite"]

  const cityArray = ["Hyd", "Bng", "Chennai", "Vizag", "Anantapur"]

  return (
    <>
      <FooterComponent />
      <CityComponent cityArray = {cityArray} />
      <HeaderComponent />
      <FruitsComponent fruitsArray = {fruitsArray}/>

      {/* <NavBarComponent />
      <HeaderComponent /> */}

    </>
  )
}

export default App
