const ConcertCard = ({ title, date, price, thumbnail }) => (
  <div className="bg-[#1a001f] text-white rounded-xl shadow-lg overflow-hidden w-[300px]">
    <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-bold text-purple-400">{title}</h3>
      <p className="text-sm text-gray-300">{date}</p>
      <p className="text-sm text-gray-300 mb-4">Tiket: Rp{price}</p>
      <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded w-full">Beli Tiket</button>
    </div>
  </div>
)
export default ConcertCard
