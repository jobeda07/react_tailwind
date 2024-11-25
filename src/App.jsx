import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOption/PriceOptions'
import Chart from './components/Chart/Chart'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='max-w-screen-xl mx-auto'>
        
        {/* <div>
        <h1 className='text-center'>hi picchi</h1>
      </div> */}
        <PriceOptions></PriceOptions>
        <Chart></Chart>
      </div>

    </>
  )
}

export default App
