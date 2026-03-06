import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import type { Biodata } from "../types"
import axios from "axios"

import Navbar from "../components/Navbar"
import PersonalForm from "../components/forms/PersonalForm"
import FamilyForm from "../components/forms/FamilyForm"
import EducationForm from "../components/forms/EducationForm"
import HoroscopeForm from "../components/forms/HoroscopeForm"
import BiodataPreview from "../components/BiodataPreview"

export default function Dashboard() {

  const navigate = useNavigate()

  const [template, setTemplate] = useState("one")

  const [data, setData] = useState<Biodata>({
    name: "",
    dob: "",
    age: 0,
    gender: "",
    religion: "",
    contact: "",
    fatherName: "",
    motherName: "",
    education: "",
    profession: "",
    rashi: "",
    nakshatra: "",
  })

  useEffect(() => {

    const user = localStorage.getItem("loggedInUser")

    if (!user) navigate("/")

  }, [])

  const saveBiodata = async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/biodata/save",
        data
      )

      alert("Biodata saved successfully")

    } catch {

      alert("Error saving biodata")

    }

  }

  return (
    <>
      <Navbar />

      <div className="p-6 bg-gray-100 min-h-screen">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* FORM */}

          <div className="bg-white p-6 rounded shadow space-y-6 overflow-y-auto max-h-[90vh]">

            <PersonalForm data={data} setData={setData} />

            <FamilyForm data={data} setData={setData} />

            <EducationForm data={data} setData={setData} />

            <HoroscopeForm data={data} setData={setData} />

            <select
              className="border p-2 w-full rounded"
              onChange={(e) => setTemplate(e.target.value)}
            >
              <option value="one">Template One</option>
              <option value="two">Template Two</option>
            </select>

<div>

<p className="text-sm mb-1">
Biodata Theme Color
</p>

<select
className="border p-2 w-full rounded"
onChange={(e)=>
setData({...data, themeColor:e.target.value})
}
>

<option value="">Default</option>
<option value="#f472b6">Pink</option>
<option value="#60a5fa">Blue</option>
<option value="#34d399">Green</option>
<option value="#f59e0b">Gold</option>

</select>

</div>

            <button
              onClick={saveBiodata}
              className="bg-blue-500 text-white py-2 w-full rounded"
            >
              Save Biodata
            </button>
            
            <button
  onClick={() => {
    localStorage.removeItem("biodata")
    window.location.reload()
  }}
  className="bg-red-500 text-white py-2 w-full rounded"
>
  Clear Saved Data
</button>
          </div>


          
          {/* PREVIEW */}

          <div className="bg-white p-6 rounded shadow">

            <BiodataPreview
              data={data}
              template={template}
            />

          </div>

        </div>

      </div>
    </>
  )
}