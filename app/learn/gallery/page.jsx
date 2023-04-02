'use client'
import React from 'react'
import Navbar from '../../shared/navbar/page'
import GalleryHeader from './galleryHeader'
import ExploreGallery from './exploreGallery'
import Footer from '../../shared/footer'

const ExploreLayout = () => {
  return (
    <>
    <Navbar/>
    <GalleryHeader/>
    <ExploreGallery/>
    <Footer/>
    </>
  )
}

export default ExploreLayout