import React from 'react'

const EducationItem = ({ degrees }) => {
  return (
    <div className="mx-8 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg">
      {degrees.map((degree, i) => (
        <div key={i} className="border-t md:border-t-0 border-dashed md:border-l px-4 mx-4 md:mx-0 md:px-12 py-6">
          <h4 className="text-lg uppercase font-bold mb-2 text-orange">{degree.degree}</h4>
          <p className="text-2xl uppercase">{degree.subject}<br />
          <span className="text-lg font-bold normal-case">{degree.institution}</span></p>
        </div>))}       
    </div>
  )
}

export default EducationItem