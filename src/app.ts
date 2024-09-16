import cookieParser from 'cookie-parser'
import express from 'express'
import logger from 'morgan'
import { router } from './routes/index'

const app = express()
const PORT = 3000

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', router)
app.use('/uploads', express.static('uploads'))

app.get('/', (req, res) => {
	res.send('Hello world')
})

app.listen(PORT, () => {
	console.log(`Express with Typescript! http://localhost:${PORT}`)
})

module.exports = app
