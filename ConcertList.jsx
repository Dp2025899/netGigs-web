import ConcertCard from "./ConcertCard"
const dummyConcerts = [
  {
    title: "Live at Home – GIGI",
    date: "21 Juli 2025",
    price: "50.000",
    thumbnail: "https://source.unsplash.com/600x400/?concert,band"
  },
  {
    title: "Virtual Stage – Endah n Rhesa",
    date: "25 Juli 2025",
    price: "40.000",
    thumbnail: "https://source.unsplash.com/600x400/?music,live"
  }
]
const ConcertList = () => (
  <section className="px-6 py-16 bg-black">
    <h3 className="text-3xl font-bold text-purple-400 mb-10 text-center">Konser Mendatang</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {dummyConcerts.map((concert, i) => (
        <ConcertCard key={i} {...concert} />
      ))}
    </div>
  </section>
)
export default ConcertList
