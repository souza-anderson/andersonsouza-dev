import React from 'react'
import { GoStar } from 'react-icons/go'

const RepositoryItem = ({ repos }) => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-2 md:my-6">      
      {repos.map(repo => {
        return (
          <div className="my-3 md:my-0 rounded bg-white p-8 hover:shadow-md" key={repo.id}>
            <h3 className="font-bold hover:underline"><a href={`https://github.com/${repo.full_name}`} target="_blank" >{repo.full_name}</a></h3>
            <p>Language: {repo.language} / <GoStar className="inline-block" /> Stars: {repo.stargazers_count}</p>            
          </div>
        )
      })} 
    </div>
  )
}

export default RepositoryItem