import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ConcertList from "@/components/ConcertList"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <ConcertList />
      <Footer />
    </main>
  )
}
