import { compare, genSalt, hash } from 'bcrypt'

export const authHelper = {
  hashPassword: async (password: string): Promise<string> => {
    const salt = await genSalt(10)
    const hashedPassword = await hash(password, salt)

    return hashedPassword
  },
  comparePassword: async (
    password: string,
    hashedPassword: string
  ): Promise<boolean> => {
    return compare(password, hashedPassword)
  }
}
