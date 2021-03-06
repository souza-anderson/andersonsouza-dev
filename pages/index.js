import React from 'react'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'
import Summary from '../components/Summary'
import Footer from '../components/Footer'
import Education from '../components/Education'
import Repository from '../components/Repository'


const Index = ({ repos, user }) => {
  return (
    <div className="container mx-auto bg-network">
      <PageHead />
      <Hero />
      <Summary />
      <Education />
      <Repository user={user} repos={repos} />
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch(process.env.API_URL + '/api/apiGetUser')
  const { repos, user } = await response.json()

  return {
    props: {
      repos,
      user
    }
  }
}

export default Index