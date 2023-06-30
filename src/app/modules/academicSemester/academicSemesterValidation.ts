import { z } from 'zod'
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemesterConstant'

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitle] as [string, ...string[]], {
      required_error: 'title is required',
    }),
    code: z.enum([...academicSemesterCode] as [string, ...string[]], {
      required_error: 'Code is required',
    }),
    endMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'End month is required',
    }),
    startMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'Start month is required',
    }),
    year: z.number({
      required_error: 'Year is required',
    }),
  }),
})

export const academicSemesterZodSchema = {
  createAcademicSemesterZodSchema,
}
