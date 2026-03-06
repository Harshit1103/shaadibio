import type { Biodata } from "../../types"

export default function TemplateTwo({ data }: { data: Biodata }) {

  return (

    <div
className="p-6 rounded space-y-4 text-white"
style={{
background: data.themeColor || "linear-gradient(90deg,#f9a8d4,#c084fc)"
}}
>

      <h2 className="text-2xl font-bold text-center">
        {data.name}
      </h2>

      {data.photo && (

        <div className="flex justify-center">

          <img
            src={data.photo}
            className="w-28 h-28 rounded-full object-cover"
          />

        </div>

      )}

      <div className="grid grid-cols-2 gap-2 text-sm">

        <p><b>Age:</b> {data.age}</p>
        <p><b>Gender:</b> {data.gender}</p>

        <p><b>Religion:</b> {data.religion}</p>
        <p><b>Contact:</b> {data.contact}</p>

        <p><b>Education:</b> {data.education}</p>
        <p><b>Profession:</b> {data.profession}</p>

        <p><b>Father:</b> {data.fatherName}</p>
        <p><b>Mother:</b> {data.motherName}</p>

      </div>

      {data.rashi && (

        <div>

          <h3 className="font-bold mt-3">Horoscope</h3>

          <p>Rashi: {data.rashi}</p>
          <p>Nakshatra: {data.nakshatra}</p>

        </div>

      )}

    </div>
  )
}