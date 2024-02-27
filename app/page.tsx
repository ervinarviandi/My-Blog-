
import Header from '@/components/commons/Header'
import Hero from "@/components/commons/Hero"
import Navbar from '@/components/commons/Navbar';
import Footer from "@/components/commons/Footer"
import Discussion from '@/components/commons/Discussion';
export default function Home() {
  return (
    <main className="">
      <Navbar/>
     <Header/>
     <Hero/>
     <Discussion/>
     <Footer/>
    </main>
  )
}
