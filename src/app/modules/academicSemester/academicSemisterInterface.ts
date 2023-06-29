import { Model } from 'mongoose'

export type IAcademicSemester = {
  title: string
  startMonth: string
  endMonth: string
  year: number
  code: string
}

// export type IAcademicSemesterTitle = {

// }

export type IAcademicSemesterModel = Model<
  IAcademicSemester,
  Record<string, unknown>
>
