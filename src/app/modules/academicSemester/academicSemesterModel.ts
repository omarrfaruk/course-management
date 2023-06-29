import { Schema, model } from 'mongoose'
import {
  IAcademicSemester,
  IAcademicSemesterModel,
} from './academicSemisterInterface'
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemesterConstant'

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitle,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

const User = model<IAcademicSemester, IAcademicSemesterModel>(
  'User',
  academicSemesterSchema
)
export default User
