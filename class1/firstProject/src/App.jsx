import { useState } from 'react'
import './App.css'
import HeaderComponent, {Venu,Sudheer,Bhargava}from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import NavBarComponent from './components/NavBarComponent'
import FruitsComponent from './components/FruitsComponent'
import CityComponent from './components/CityComponent'
import LogInComponent from './components/LogInComponent'


function App() {

  const [count, setCount] = useState(0)

  const fruitsArray = ["apple","Orange","Banana","Pine Apple" ]

  const cityArray = ["Hyd","Bng","Vizag","Chennai","Mumbai"]

  const laptops = ["Dell","Lenovo","Hp","apple"]

  const mobiles = ["Vivo","Oppo","apple","Lenovo","Sony","Moto"]


  const personDetails = {
    "name" : "Venukumar",
    "salary" : 26000,
    "role" : "Fullstack Webdeveloper"
  }


  // console.log(Venu);
  // console.log(Sudheer);
  // console.log(Bhargava)



  // console.log(Jagan);
  // console.log(Anji);
  // console.log(Murali)
  return (
    <> 

    <LogInComponent status= {false} />
    {/* <FooterComponent /> */}
    {/* <NavBarComponent /> */}
    {/* <HeaderComponent /> */}
    <FooterComponent />
    <NavBarComponent personDetails = {personDetails} />


    <FooterComponent />
    <FruitsComponent  fruitsArray = {fruitsArray} 
                      laptops = {laptops} />
    <CityComponent cityArray = {cityArray} 
                   mobiles = {mobiles} />





      
    </>
  )
}

export default App
