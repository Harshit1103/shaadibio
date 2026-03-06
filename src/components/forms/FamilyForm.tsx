import type { Biodata } from "../../types"

interface Props {
  data: Biodata
  setData: React.Dispatch<React.SetStateAction<Biodata>>
}

export default function FamilyForm({ data, setData }: Props) {

  return (

    <div className="space-y-3">

      <h3 className="text-lg font-bold">
        Family Details
      </h3>

      <div>
        <p className="text-sm">Father Name</p>
        <input
          className="w-full border p-2 rounded"
          placeholder="Enter father's name"
          value={data.fatherName}
          onChange={(e)=>
            setData({ ...data, fatherName:e.target.value })
          }
        />
      </div>

      <div>
        <p className="text-sm">Mother Name</p>
        <input
          className="w-full border p-2 rounded"
          placeholder="Enter mother's name"
          value={data.motherName}
          onChange={(e)=>
            setData({ ...data, motherName:e.target.value })
          }
        />
      </div>

    </div>
  )
}