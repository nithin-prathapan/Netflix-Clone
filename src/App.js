import React from 'react'
import {orginals,actions,comedy, horror} from './compnents/urls'
import "./App.css"
import Banner from './compnents/banner/Banner'
import Navbar from './compnents/navbar/Navbar'
import RowPost from './compnents/rows/RowPost'

function App() {
  
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={actions} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      
    </div>
    
  )
  
}



export default App