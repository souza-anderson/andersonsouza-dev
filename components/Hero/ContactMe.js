import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const ContactMe = () => {
  return (
    <div className="mx-8 px-8 relative border border-orange rounded md:px-16 pb-4 pt-10 my-10">         
      <h3 className="absolute text-white top-0 -mt-6 text-2xl font-bold uppercase bg-orange py-2 px-6">Contato</h3>
      <ul className="flex flex-col gap-4 text-center md:text-left">
        <div className="flex flex-row gap-6 justify-center align-center md:justify-start">
          <li>
            <a href="https://www.linkedin.com/in/anderson-felipe-souza/" target="_blank" >
              <FaLinkedin className="text-5xl md:text-6xl"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/souza-anderson" target="_blank" >
              <FaGithub className="text-5xl md:text-6xl" />
            </a>
          </li>
          <li>
            <a href="mailto:andersonfebs@gmail.com">
              <SiGmail className="text-5xl md:text-6xl" />
            </a>
          </li>
        </div>        
    
      </ul>
    </div>
  )  
}

export default ContactMe