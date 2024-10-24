import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { Navbar } from './component/Navbar'
import { HerSection } from './component/HerSection'
import { FeatureSection } from './component/featureSection'
import { Work } from './component/Work'
import { Pricing } from './component/Pricing'
import { Testimonials } from './component/Testimonials'
import { Footer } from './component/Footer'

function App() {


  return (
    <>
    
     <Navbar/>
    <div className="max-w-7xl x-auto pt-20 px-6">
    <HerSection/>
    <FeatureSection/>
    <Work/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    </div>
    
     
     
     </>
        
       
  
  )
}

export default App
