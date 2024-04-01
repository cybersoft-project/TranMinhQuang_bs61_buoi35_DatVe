import { useState } from 'react'
import Seat from './components/Seat'
import Header from './components/Header'
import Footer from './components/Footer'
import Payment from './components/Payment'

function App() {

  return (
    <div>
      <Header />
      <div className="grid grid-cols-12">
        <Seat />
        <Payment />
      </div>
     
     <Footer />
    </div>

  )
}

export default App
