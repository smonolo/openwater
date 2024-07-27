import { PrismaClient } from '@prisma/client'
import type { Request } from 'express'
import { authHelper } from '../helpers/auth'

const prisma = new PrismaClient()

export const authController = {
  register: async (body: Request['body']) => {
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
        select: {
          password: false
        }
      })

      return user
    } catch (error) {
      throw error
    }
  },
  login: async (body: Request['body']) => {
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
        select: {
          password: false
        }
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
