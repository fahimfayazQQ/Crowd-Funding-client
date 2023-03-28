import { Inter } from 'next/font/google'
import Navbar from './components/shared/Navbar/Navbar'
import LandingPage from './components/pages/LandingLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    </>
  )
}
