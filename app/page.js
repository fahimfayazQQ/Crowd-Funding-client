import { Inter } from 'next/font/google'
// import Navbar from '../pages/shared/navbar'
// import LandingPage from '../pages/LandingLayout'
// import ExploreLayout from '../pages/explore'
// import ExploreFilter from '../pages/explore/exploreFilter'
// import ExploreGallery from '../pages/explore/exploreGallery'

// import ProductLayout from '../pages/product'
// import productHeader from '../pages/product/productHeader'
// import productTabs from '../pages/product/productTabs'

// import BlogLayout from '../pages/blogs'

import AboutLayout from './pages/about'

// import Footer from '../pages/shared/footer'
import "./globals.css"
import StoriesLayout from './pages/stories'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    {/* <Navbar/>
    <LandingPage/>
    <Footer/> */}

    {/* <ExploreLayout/> */}

    {/* <ProductLayout/> */}
    
    {/* <BlogLayout/> */}

    {/* <StoriesLayout/> */}
    <AboutLayout/>
    </>
  )
}
