import { Inter } from 'next/font/google'
import NavbarWhite from './shared/navbarWhite'
import LandingPage from './LandingLayout'
import Footer from './shared/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <NavbarWhite/>
    <LandingPage/>
    <Footer/>
    </>
  )
}
