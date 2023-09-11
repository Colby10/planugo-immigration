import React from 'react'
import ModalPostuler from '../component_reuseable/ModalPostuler'
import Navbar from './Navbar'
import Footer from './Footer'
import Carrousel from '../component_reuseable/Carrousel'
import NosDestination from './NosDestination'
//import Blog from './Blog'
import Temoignage from './Temoignage'
//import Presentation from './Presentation'
import About from './About'



function Home() {

  return (
    <>
      <div className=''>
        <Navbar />
        <Carrousel />
        <div className="container">
          <About/>
        </div>
        {/*<div className="container">
          <Presentation/>
        </div>*/}
        <div className="container">
           <ModalPostuler/>
        </div>
      </div>
      <NosDestination />
      {/*<Blog />*/}
      <Temoignage />
      <Footer />
    </>
  )
}

export default Home