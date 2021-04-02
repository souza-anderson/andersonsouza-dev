import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 pt-16 leading-none">
        <div>
          <h1 className="text-4xl uppercase">Olá, eu sou o Anderson Souza</h1>
          <h2 className="text-5xl font-bold uppercase">Fullstack Developer</h2>
          <h3>Contato</h3>
          <ul>
            <li>Linkedin</li>
            <li>Github</li>
          </ul>
          <p>Github stats: public repos: {user.public_repos} / public gists: {user.public_gists} / followers: {user.followers}</p>
        </div>

        <div>
          <img src="/images/anderson-souza.jpg" alt="foto de Anderson Souza"/>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg py-12 px-16">
        <h3 className="text-4xl text-center">What I do</h3>
        <p className="text-2xl">Fullstack develper teste teste</p>
      </div>

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