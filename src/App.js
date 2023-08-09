import React from 'react'
import Searchbar from './Components/Searchbar'
import "./App.scss"

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