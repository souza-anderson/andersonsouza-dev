import React from 'react'
import ContactMe from './ContactMe'

const Hero = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:pt-16 leading-none">
      <div className="pt-16 md:pt-32">
        <h1 className="text-4xl uppercase pl-16">Olá, eu sou o Anderson Souza</h1>
        <h2 className="text-4xl md:text-5xl font-bold uppercase pl-16">Fullstack Developer</h2>
        <ContactMe />
      </div>

      <div className="flex flex-row items-center justify-center my-10 md:my-0">
        <img className="w-80 h-80 rounded-full" src="/images/anderson-souza.jpg" alt="foto de Anderson Souza"/>
      </div>
    </div>
  )
}

export default Hero