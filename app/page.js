import { Inter } from 'next/font/google'
import Navbar from './shared/navbar'
import LandingPage from './LandingLayout'
import Footer from './shared/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <Footer/>
    </>
  )
}
