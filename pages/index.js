import React from 'react'
import getUser from '../utils/getUser'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { GoGist, GoStar } from 'react-icons/go'
import { FiUsers } from 'react-icons/fi'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'


const Index = ({ repos, user }) => {
  return (
    <div className="container mx-auto bg-network">
      <PageHead />
      <Hero />

      <div className="bg-white rounded-lg shadow-lg py-12 px-8 mx-8 md:mx-0 md:px-16">
        <h3 className="text-4xl text-center text-orange">What I do</h3>
        <p className="text-2xl">Fullstack develper teste teste</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange">My Education</h3>
        <div className="mx-8 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg">
          {[1,2].map(i => (
            <div key={i} className="border-t md:border-t-0 border-dashed md:border-l px-4 mx-4 md:mx-0 md:px-12 py-6">
              <h4 className="text-lg uppercase font-bold mb-2 text-orange">Master´s Degree</h4>
              <p className="text-2xl uppercase">Informatics<br />
              <span className="text-lg font-bold normal-case">UFAM - University of Amazonas</span></p>
            </div>))}       
        </div>
      </div>

      <div>
        <h3 className="mx-6 md:mx-0 text-4xl font-bold text-center uppercase mt-10 text-orange">Tech Contributions</h3>
        <p className="text-center">Github stats: <RiGitRepositoryLine className="inline-block" /> {user.public_repos} / <GoGist className="inline-block" /> {user.public_gists} / <FiUsers className="inline-block" /> {user.followers}</p>          
        
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
      </div>

      <div>
          <p className="text-center border-t-2 my-8 py-4">
            You can find the source-code of this website here.
            <br />
            <a href="https://github.com/souza-anderson/andersonsouza-dev" target="_blank">
              https://github.com/souza-anderson/andersonsouza-dev
            </a>
          </p>
      </div> 
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