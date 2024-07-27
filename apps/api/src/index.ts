import * as dotenv from 'dotenv'

dotenv.config()

import express, {
  type NextFunction,
  type Response,
  type Request
} from 'express'
import cors, { type CorsOptions } from 'cors'
import routes from './routes'

const app = express()
const port = process.env.PORT || 49165
const isDev = process.env.NODE_ENV !== 'production'
const corsOptions: CorsOptions = {
  origin: '*',
  methods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: '*',
  optionsSuccessStatus: 200
}

if (isDev) {
  app.set('json spaces', 2)
  app.set('env', 'development')
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

app.options('*', cors(corsOptions))

Object.entries(routes).forEach(([route, handler]) => {
  app.use(`/${route}`, handler)
})

app.use((_, res) => res.status(404).json({ error: 'Not Found' }))

app.use((_e: Error, _r: Request, res: Response, _n: NextFunction) => {
  return res.status(500).json({ error: 'Internal server error' })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
