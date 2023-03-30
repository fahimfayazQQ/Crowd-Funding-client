import React from 'react'
import Navbar from '../shared/navbar'
import LearnHeader from './learnHeader'
import LearnContent from './learnContent'
import Investors from '../shared/investors'
import OurTeam from '../shared/ourTeam'
import Articles from '../shared/articles'
import Footer from '../shared/footer'

const page = () => {
  return (
    <>
      <Navbar/>
      <LearnHeader/>
      <LearnContent/>
      <Investors/>
      <OurTeam/>
      <Articles/>
      <Footer/>
    </>
  )
}

export default page
