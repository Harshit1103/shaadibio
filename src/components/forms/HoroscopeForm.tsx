import type { Biodata } from "../../types"

interface Props {
  data: Biodata
  setData: React.Dispatch<React.SetStateAction<Biodata>>
}

export default function HoroscopeForm({ data, setData }: Props) {

  return (

    <div className="space-y-3">

      <h3 className="text-lg font-bold">
        Horoscope (Optional)
      </h3>

      <div>
        <p className="text-sm">Rashi</p>
        <input
          className="w-full border p-2 rounded"
          placeholder="Example: Aries"
          value={data.rashi}
          onChange={(e)=>
            setData({ ...data, rashi:e.target.value })
          }
        />
      </div>

      <div>
        <p className="text-sm">Nakshatra</p>
        <input
          className="w-full border p-2 rounded"
          placeholder="Example: Ashwini"
          value={data.nakshatra}
          onChange={(e)=>
            setData({ ...data, nakshatra:e.target.value })
          }
        />
      </div>

    </div>
  )
}