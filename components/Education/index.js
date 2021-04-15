import React from 'react'
import EducationItem from './EducationItem'

const degrees = [
  {
    degree: 'Mestrado',
    subject: 'Informática (Design Thinking)',
    institution: 'UFAM - Universidade Federal do Amazonas'
  },
  {
    degree: 'Graduação',
    subject: 'Ciência da Computação',
    institution: 'UFAM - Universidade Federal do Amazonas'
  }
]

const Education = () => {
  return (
    <div>
      <h3 className="text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange">Formação</h3>
      <EducationItem degrees={degrees} />
    </div>
  )
}

export default Education