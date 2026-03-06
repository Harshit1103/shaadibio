import { useNavigate } from "react-router-dom"

export default function Navbar() {

  const navigate = useNavigate()

  const handleLogout = () => {

    localStorage.removeItem("loggedInUser")

    navigate("/")
  }

  return (

    <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 flex justify-between items-center shadow-md">

      <h1 className="font-bold text-lg">
        ShaadiBio
      </h1>

      <button
        onClick={handleLogout}
        className="bg-white text-pink-600 px-3 py-1 rounded hover:bg-pink-100"
      >
        Logout
      </button>

    </div>

  )
}