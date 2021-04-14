import React from 'react'
import RepositoryItem from './RepositoryItem'
import UserStats from './UserStats'

const Repository = ({ user, repos }) => {
  return (
    <div>
      <h3 className="mx-6 md:mx-0 text-4xl font-bold text-center uppercase mt-10 text-orange">Tech Contributions</h3>
      <UserStats user={user} />
      <RepositoryItem repos={repos} />           
    </div>
  )
}

export default Repository