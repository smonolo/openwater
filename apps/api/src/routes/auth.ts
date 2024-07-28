import { Router } from 'express'
import { authController } from '../controllers/auth'
import { StatusCodes } from 'http-status-codes'
import { Prisma } from '@prisma/client'
import { ValidationError } from 'yup'
import { JsonWebTokenError } from 'jsonwebtoken'

const router = Router()

router.post('/register', async (req, res) => {
  try {
    const user = await authController.register(req.body)

    return res.status(StatusCodes.CREATED).json(user)
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message })
    }

    if (error instanceof ValidationError) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message })
    }
  }
})

router.post('/login', async (req, res) => {
  try {
    const user = await authController.login(req.body)

    return res.status(StatusCodes.OK).json(user)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ error: error.message })
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message })
    }

    if (error instanceof ValidationError) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message })
    }
  }
})

router.get('/verify', async (req, res) => {
  try {
    const authorization = req.headers.authorization

    if (!authorization) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: 'No token provided' })
    }

    const token = authorization.split(' ')[1]
    const user = await authController.verify(token)

    return res.status(StatusCodes.OK).json(user)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ error: error.message })
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message })
    }

    if (error instanceof JsonWebTokenError) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ error: error.message })
    }
  }
})

export default router
