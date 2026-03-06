import { useState } from "react"
import type { Biodata } from "../../types"

interface Props {
  data: Biodata
  setData: React.Dispatch<React.SetStateAction<Biodata>>
}

export default function PersonalForm({ data, setData }: Props) {

  const [dragActive, setDragActive] = useState(false)

  const calculateAge = (dob: string) => {
    const birth = new Date(dob)
    const diff = Date.now() - birth.getTime()
    return new Date(diff).getUTCFullYear() - 1970
  }

  const handleFile = (file: File) => {

    const reader = new FileReader()

    reader.onloadend = () => {
      setData({ ...data, photo: reader.result as string })
    }

    reader.readAsDataURL(file)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {

    e.preventDefault()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  return (

    <div className="space-y-4">

      <h3 className="text-lg font-bold">
        Personal Details
      </h3>

      {/* NAME */}

      <div>
        <p className="text-sm">Full Name</p>
        <input
          className="w-full border p-2 rounded"
          placeholder="Enter full name"
          value={data.name}
          onChange={(e)=>setData({...data,name:e.target.value})}
        />
      </div>

      {/* DOB */}

      <div>
        <p className="text-sm">Date of Birth</p>
        <input
          type="date"
          className="w-full border p-2 rounded"
          value={data.dob}
          onChange={(e)=>
            setData({
              ...data,
              dob:e.target.value,
              age:calculateAge(e.target.value)
            })
          }
        />
      </div>

      {/* GENDER DROPDOWN */}

      <div>
        <p className="text-sm">Gender</p>

        <select
          className="w-full border p-2 rounded"
          value={data.gender}
          onChange={(e)=>
            setData({...data, gender:e.target.value})
          }
        >

          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>

        </select>

      </div>

      {/* RELIGION */}

      <div>
        <p className="text-sm">Religion</p>
        <input
          className="w-full border p-2 rounded"
          placeholder="Example: Hindu"
          value={data.religion}
          onChange={(e)=>setData({...data,religion:e.target.value})}
        />
      </div>

      {/* CONTACT */}

      <div>
        <p className="text-sm">Contact Number</p>
        <input
          className="w-full border p-2 rounded"
          placeholder="Phone number"
          value={data.contact}
          onChange={(e)=>setData({...data,contact:e.target.value})}
        />
      </div>

      {/* PHOTO UPLOAD */}

      <div>

        <p className="text-sm mb-2">
          Profile Photo
        </p>

        <div
          onDragOver={(e)=>{
            e.preventDefault()
            setDragActive(true)
          }}
          onDragLeave={()=>setDragActive(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded p-6 text-center cursor-pointer transition
          ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
        >

          <p className="text-sm text-gray-600">
            Drag & Drop Photo Here
          </p>

          <p className="text-xs text-gray-400">
            or click below
          </p>

          <input
            type="file"
            accept="image/*"
            className="mt-3"
            onChange={(e)=>{
              if(e.target.files?.[0]){
                handleFile(e.target.files[0])
              }
            }}
          />

        </div>

        {/* PHOTO PREVIEW */}

        {data.photo && (

  <div className="mt-3 flex flex-col items-center gap-2">

    <img
      src={data.photo}
      className="w-24 h-24 rounded-full object-cover border"
    />

    <button
      onClick={() =>
        setData({ ...data, photo: "" })
      }
      className="text-xs text-red-500 hover:underline"
    >
      Remove Photo
    </button>

  </div>

)}

      </div>

    </div>

  )
}