export interface Biodata {
  name: string
  dob: string
  age: number
  gender: string
  religion: string
  contact: string
  fatherName: string
  motherName: string
  education: string
  profession: string
  rashi: string
  nakshatra: string
  photo?: string

  hideContact?: boolean
  themeColor?: string
  fontFamily?: string
}