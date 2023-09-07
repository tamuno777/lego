import React from 'react'
import Hero from './sections/hero'
import About from './sections/about'
import Workshops from './sections/workshops'
import Studio from './sections/studio'
import Artsale from './sections/art'
import Testimonia from './sections/testimonia'


export default function Homepage() {
  return (
    <div>
      <Hero/>
      <About/>
      <Workshops/>
      <Studio/>
      <Artsale/>
      <Testimonia/>
      
      
    </div>
  )
}
