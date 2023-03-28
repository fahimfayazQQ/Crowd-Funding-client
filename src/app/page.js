import { Inter } from 'next/font/google'
import LandingPage from '../pages/LandingLayout'
import Navbar from './components/shared/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    </>
  )
}
