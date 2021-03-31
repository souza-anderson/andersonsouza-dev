import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl">Olá, eu sou o Anderson Souza</h1>
      <h2 className="text-3xl font-bold">Meus repositórios no GitHub</h2>
      <p>Github stats: public repos: {user.public_repos} / public gists: {user.public_gists} / followers: {user.followers}</p>
      {repos.map(repo => {
        return (
          <div className="rounded bg-gray-200 mx-8 my-4 p-8 hover:shadow-md" key={repo.id}>
            <h3 className="font-bold">{repo.full_name}</h3>
            <p>Language: {repo.language} / Stars: {repo.stargazers_count}</p>            
          </div>
        )
      })}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { repos, user } = await getUser('souza-anderson')

  return {
    props: {
      repos,
      user
    }
  }
}

export default Index