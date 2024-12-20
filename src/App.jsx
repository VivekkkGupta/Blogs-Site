import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='bg-white text-slate-500 dark:bg-slate-900 dark:text-white h-full w-full '>
      <div className='w-[1240px] mx-auto h-full bg-transparent bg-opacity-50'>
        <Navbar />
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App