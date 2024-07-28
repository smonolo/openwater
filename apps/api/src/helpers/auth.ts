import { compare, genSalt, hash } from 'bcrypt'
import jwt, { JwtPayload } from 'jsonwebtoken'

export const authHelper = {
  /**
   * Encrypt a SHA-256 hashed password with 10 rounds of salting.
   *
   * @param {string} password The hashed password to encrypt.
   * @returns {Promise<string>} The encrypted password.
   */
  hashPassword: async (password: string): Promise<string> => {
    const salt = await genSalt(10)
    const hashedPassword = await hash(password, salt)

    return hashedPassword
  },

  /**
   * Compare an encrypted password with a SHA-256 hashed password.
   *
   * @param {string} password The encrypted password to compare.
   * @param {string} hashedPassword The hashed password to compare.
   * @returns {Promise<boolean>} Whether the passwords match or not.
   */
  comparePassword: async (
    password: string,
    hashedPassword: string
  ): Promise<boolean> => {
    return compare(password, hashedPassword)
  },

  /**
   * Sign a JSON Web Token (JWT).
   *
   * @param {string | Buffer | object} payload The payload to sign.
   * @returns {string} The signed JWT.
   */
  signToken: (payload: string | Buffer | object): string => {
    return jwt.sign(payload, process.env.JWT_SECRET!)
  },

  /**
   * Verify a JSON Web Token (JWT).
   *
   * @param {string} token The token to verify.
   * @returns {string | JwtPayload} The verified token
   */
  verifyToken: (token: string): string | JwtPayload => {
    try {
      return jwt.verify(token, process.env.JWT_SECRET!)
    } catch (error) {
      throw error
    }
  }
}
