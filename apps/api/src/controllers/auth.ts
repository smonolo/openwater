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
  /**
   * Register a new user.
   *
   * @param {Request['body']} body The request body.
   * @returns The registered user and a new JWT.
   */
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

      return {
        token: authHelper.signToken({ id: user.id }),
        user
      }
    } catch (error) {
      throw error
    }
  },

  /**
   * Login a user.
   *
   * @param {Request['body']} body The request body.
   * @returns The logged in user and a new JWT.
   */
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

      return {
        token: authHelper.signToken({ id: user.id }),
        user: publicUser
      }
    } catch (error) {
      throw error
    }
  },

  /**
   * Verify a user given a JWT.
   *
   * @param {string} token The user JWT.
   * @returns The verified user and a new JWT.
   */
  verify: async (token: string) => {
    try {
      const { id } = authHelper.verifyToken(token) as { id: string }

      if (!id) {
        throw new Error('Invalid authentication')
      }

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

        return {
          token: authHelper.signToken({ id: user.id }),
          user
        }
      } catch (error) {
        throw error
      }
    } catch (error) {
      throw error
    }
  }
}
