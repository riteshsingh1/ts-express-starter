import { Schema, model } from 'mongoose'

interface IApiActivity {
  userId?: string
  apiEndPoint: string
  baseUrl?: string
  headers: any
  request: any
  response: any
  remarks: string
  journeyId: string
  code?: string
  createdAt?: number
}

const apiActivitySchema = new Schema<IApiActivity>({
  journeyId: { type: String, required: true },
  userId: { type: String, required: true, default: 'GUEST' },
  code: { type: String, required: false },
  apiEndPoint: { type: String, required: true },
  baseUrl: { type: String, required: true },
  remarks: { type: String, required: true },
  request: { type: Object, required: true },
  response: { type: Object, required: false },
  headers: { type: Object, required: true },
  createdAt: { type: Number, required: false },
})

const d = new Date()
const collectionName = `apiActivity-${d.getMonth() + 1}${d.getFullYear()}`

export const ApiActivity = model<IApiActivity>(collectionName, apiActivitySchema)
