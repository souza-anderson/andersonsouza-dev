import React from 'react'
import EducationItem from './EducationItem'

const degrees = [
  {
    degree: 'Master´s Degree',
    subject: 'Informatics',
    institution: 'UFAM - University of Amazonas'
  },
  {
    degree: 'Computer Science Bachelor',
    subject: 'Graduate',
    institution: 'UFAM - University of Amazonas'
  }
]

const Education = () => {
  return (
    <div>
      <h3 className="text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange">My Education</h3>
      <EducationItem degrees={degrees} />
    </div>
  )
}

export default Education