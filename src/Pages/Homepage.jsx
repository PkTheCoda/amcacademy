import React from 'react'
import Hero from '../Components/Hero'
import Featuresfirst from '../Components/Featuresfirst'
import Logocloud from '../Components/Logocloud'
import Statsrank from '../Components/Statsrank'
import Pricing from '../Components/Pricing'
import Team from '../Components/Team'
import Questions from '../Components/Questions'

const Homepage = () => {
  return (
    <>
        <Hero />
        <Featuresfirst />
        <div className='py-10 bg-slate-50'>
          <Statsrank />
          <Team />
        </div>
        <Pricing />
        <Logocloud />
        <Questions />
    </>
  )
}

export default Homepage