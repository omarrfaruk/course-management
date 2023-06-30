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
import ApiError from '../../../errors/ApiError'

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

//this is for checking same year same code regestration
academicSemesterSchema.pre('save', async function (next) {
  const isExist = await academicSemesterUser.findOne({
    title: this.title,
    code: this.code,
  })
  if (isExist) {
    throw new ApiError(409, 'Academic semester is already exist')
  }
  next()
})

const academicSemesterUser = model<IAcademicSemester, IAcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)
export default academicSemesterUser
