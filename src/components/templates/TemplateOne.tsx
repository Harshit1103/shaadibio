import type { Biodata } from "../../types"

export default function TemplateOne({ data }: { data: Biodata }) {

  return (

    <div
className="border p-6 rounded space-y-4"
style={{ borderColor: data.themeColor || "#ddd" }}
>

      <div className="flex items-center gap-4">

        {data.photo && (
          <img
            src={data.photo}
            className="w-24 h-24 rounded-full object-cover"
          />
        )}

        <div>
          <h2 className="text-xl font-bold">{data.name}</h2>
          <p>Age: {data.age}</p>
          <p>Gender: {data.gender}</p>
          <p>Religion: {data.religion}</p>
        </div>

      </div>

      <hr/>

      <div>

        <h3 className="font-bold">Family</h3>

        <p>Father: {data.fatherName}</p>
        <p>Mother: {data.motherName}</p>

      </div>

      <div>

        <h3 className="font-bold">Career</h3>

        <p>Education: {data.education}</p>
        <p>Profession: {data.profession}</p>

      </div>

      {data.rashi && (
        <div>

          <h3 className="font-bold">Horoscope</h3>

          <p>Rashi: {data.rashi}</p>
          <p>Nakshatra: {data.nakshatra}</p>

        </div>
      )}

    </div>
  )
}