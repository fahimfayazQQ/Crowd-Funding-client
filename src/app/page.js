import { Inter } from 'next/font/google'
import Navbar from '../pages/shared/navbar'
import LandingPage from '../pages/LandingLayout'
import ExploreLayout from '../pages/explore'
import ExploreFilter from '../pages/explore/exploreFilter'
import ExploreGallery from '../pages/explore/exploreGallery'
import ProductLayout from '../pages/product'
import productHeader from '../pages/product/productHeader'
import productTabs from '../pages/product/productTabs'
import Footer from '../pages/shared/footer'
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    {/* <Navbar/>
    <LandingPage/>
    <Footer/> */}

    {/* <ExploreLayout/> */}

    <ProductLayout/>
    </>
  )
}
