import { object, string } from 'yup'

export const registerSchema = object({
  firstName: string().required().max(100),
  lastName: string().required().max(100),
  email: string().required().email().max(100),
  password: string().required()
})

export const loginSchema = object({
  email: string().required().email().max(100),
  password: string().required()
})
