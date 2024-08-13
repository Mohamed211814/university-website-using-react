import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hERO.JSX'
import Programs from './components/Programs'
import About from './components/About'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='flex flex-col items-center mt-16'>
        <p>OUR PROGRAMS</p>
        <h1 className='text-4xl'>What we offer</h1>
      </div>
      <Programs />
      <About />
      <Campus />
      <Testimonials />
    </div>
  )
}
