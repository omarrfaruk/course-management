import { z } from 'zod'

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
    code: z.string({
      required_error: 'Code is required',
    }),
    endMonth: z.string({
      required_error: 'End month is required',
    }),
    startMonth: z.string({
      required_error: 'Start month is required',
    }),
    year: z.string({
      required_error: 'Year is required',
    }),
  }),
})

export const academicSemesterZodSchema = {
  createAcademicSemesterZodSchema,
}
