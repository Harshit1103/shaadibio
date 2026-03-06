import html2canvas from "html2canvas"
import jsPDF from "jspdf"

import type { Biodata } from "../types"
import TemplateOne from "./templates/TemplateOne"
import TemplateTwo from "./templates/TemplateTwo"

interface Props {
  data: Biodata
  template: string
}

export default function BiodataPreview({ data, template }: Props) {

  const downloadPDF = async () => {

    const element = document.getElementById("preview")

    if (!element) return

    const canvas = await html2canvas(element, {
  scale: 2
})

const imgData = canvas.toDataURL("image/png")

const pdf = new jsPDF("p", "mm", "a4")

const imgWidth = 210
const pageHeight = 297

const imgHeight = (canvas.height * imgWidth) / canvas.width

let heightLeft = imgHeight
let position = 0

pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
heightLeft -= pageHeight

while (heightLeft > 0) {
  position = heightLeft - imgHeight
  pdf.addPage()
  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
  heightLeft -= pageHeight
}

pdf.save("ShaadiBio.pdf")

  }

  return (

    <div>

      <div id="preview" className="mb-4">

        {template === "two"
          ? <TemplateTwo data={data} />
          : <TemplateOne data={data} />
        }

      </div>

      <button
        onClick={downloadPDF}
        className="bg-green-500 text-white w-full py-2 rounded"
      >
        Download PDF
      </button>

    </div>

  )
}