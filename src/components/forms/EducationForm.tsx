import type { Biodata } from "../../types"

interface Props {
  data: Biodata
  setData: React.Dispatch<React.SetStateAction<Biodata>>
}

export default function EducationForm({ data, setData }: Props) {

  return (

    <div className="space-y-3">

      <h3 className="text-lg font-bold">
        Education & Profession
      </h3>

      <div>
        <p className="text-sm">Highest Education</p>
        <input
          className="w-full border p-2 rounded"
          placeholder="Example: B.Tech Computer Science"
          value={data.education}
          onChange={(e)=>
            setData({ ...data, education:e.target.value })
          }
        />
      </div>

      <div>
        <p className="text-sm">Profession</p>
        <input
          className="w-full border p-2 rounded"
          placeholder="Example: Software Developer"
          value={data.profession}
          onChange={(e)=>
            setData({ ...data, profession:e.target.value })
          }
        />
      </div>

    </div>
  )
}