import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Register() {

  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleRegister = async () => {

    if(!email || !password){
      alert("Fill all fields")
      return
    }

    try {

      await axios.post(
        "http://localhost:5000/api/auth/register",
        { email, password }
      )

      alert("Account created successfully")

      navigate("/")

    } catch (err) {

      console.error(err)
      alert("User already exists")

    }

  }

  return (

    <div className="h-screen flex items-center justify-center bg-pink-50">

      <div className="bg-white p-6 shadow rounded w-96">

        <h2 className="text-xl font-bold mb-4">Register</h2>

        <input
          className="w-full border p-2 mb-3"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-3"
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-pink-500 text-white w-full py-2 rounded hover:bg-pink-600 transition"
        >
          Register
        </button>

      </div>

    </div>
  )
}