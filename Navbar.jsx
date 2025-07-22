const Navbar = () => (
  <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
    <h1 className="text-2xl font-bold text-purple-500">netGigs</h1>
    <ul className="flex gap-6 text-sm">
      <li><a href="#" className="hover:text-purple-400">Home</a></li>
      <li><a href="#" className="hover:text-purple-400">Konser</a></li>
      <li><a href="#" className="hover:text-purple-400">Login</a></li>
    </ul>
  </nav>
)
export default Navbar
