import React from 'react'
import Head from 'next/head'
import getUser from '../utils/getUser'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { GoGist, GoStar } from 'react-icons/go'
import { FiUsers } from 'react-icons/fi'


const Index = ({ repos, user }) => {
  return (
    <div className="container mx-auto bg-network">
      <Head>
        <title>Anderson Souza - Fullstack Developer</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="grid grid-cols-2 pt-16 leading-none">
        <div className="pt-32">
          <h1 className="text-4xl uppercase pl-16">Olá, eu sou o Anderson Souza</h1>
          <h2 className="text-5xl font-bold uppercase pl-16">Fullstack Developer</h2>
          <div className="relative border border-orange rounded px-16 pb-4 pt-10 mt-10">         
            <h3 className="absolute text-white top-0 -mt-6 text-2xl font-bold uppercase bg-orange py-2 px-6">Contact Me</h3>
            <ul className="flex flex-col gap-4">
              <div className="flex flex-row gap-6">
                <li><FaLinkedin className="text-6xl"/></li>
                <li><FaGithub className="text-6xl" /></li>
              </div>              
              or drop a line: andersonfebs@gmail.com
            </ul>
          </div>
        </div>

        <div>
          <img src="/images/anderson-souza.jpg" alt="foto de Anderson Souza"/>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg py-12 px-16">
        <h3 className="text-4xl text-center text-orange">What I do</h3>
        <p className="text-2xl">Fullstack develper teste teste</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange">My Education</h3>
        <div className="grid grid-cols-2 leading-none bg-white rounded-lg shadow-lg py-6">
          {[1,2].map(i => (
            <div key={i} className="border-dashed border-l px-12">
              <h4 className="text-lg uppercase font-bold mb-2 text-orange">Master´s Degree</h4>
              <p className="text-2xl uppercase">Informatics<br />
              <span className="text-lg font-bold normal-case">UFAM - University of Amazonas</span></p>
            </div>))}       
        </div>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-center uppercase mt-10 text-orange">Tech Contributions</h3>
        <p className="text-center">Github stats: <RiGitRepositoryLine className="inline-block" /> {user.public_repos} / <GoGist className="inline-block" /> {user.public_gists} / <FiUsers className="inline-block" /> {user.followers}</p>          
        
        <div className="grid grid-cols-3 gap-2 my-6">      
          {repos.map(repo => {
            return (
              <div className="rounded bg-white p-8 hover:shadow-md" key={repo.id}>
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