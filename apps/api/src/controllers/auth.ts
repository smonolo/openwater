import { type Prisma, PrismaClient } from '@prisma/client'
import type { Request } from 'express'
import { authHelper } from '../helpers/auth'
import { loginSchema, registerSchema } from '../validations/auth'

const prisma = new PrismaClient()
const select: Prisma.UserSelect = {
  id: true,
  createdAt: true,
  firstName: true,
  lastName: true,
  email: true,
  password: false
}

export const authController = {
  register: async (body: Request['body']) => {
    try {
      await registerSchema.validate(body)
    } catch (error) {
      throw error
    }

    const { firstName, lastName, email, password } = body
    const hashedPassword = await authHelper.hashPassword(password)

    try {
      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword
        },
        select
      })

      return user
    } catch (error) {
      throw error
    }
  },
  login: async (body: Request['body']) => {
    try {
      await loginSchema.validate(body)
    } catch (error) {
      throw error
    }

    const { email, password } = body

    try {
      const user = await prisma.user.findUnique({
        where: {
          email
        }
      })

      if (!user) {
        throw new Error('Invalid email or password')
      }

      const isPasswordValid = await authHelper.comparePassword(
        password,
        user.password
      )

      if (!isPasswordValid) {
        throw new Error('Invalid email or password')
      }

      const { password: _, ...publicUser } = user

      return publicUser
    } catch (error) {
      throw error
    }
  },
  verify: async (id: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id
        },
        select
      })

      if (!user) {
        throw new Error('Invalid authentication')
      }

      return user
    } catch (error) {
      throw error
    }
  }
}
