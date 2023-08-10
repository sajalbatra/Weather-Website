import React from 'react'
import Searchbar from './Components/searchbar/Searchbar'
import "./App.scss"
//import Weatherdiv from "./Components/weatherdiv/Weatherdiv"
const App = () => {
  return (
    <>
    <div className='Bodydiv'>
    <div id='Bluecolor_div'></div>
    <div id='Orangecolor_div'></div>
    <div id='Pinkcolor_div'></div> 
    </div>

    <Searchbar/>
    </>
    )
}

export default App