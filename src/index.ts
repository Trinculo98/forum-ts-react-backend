import bodyParser from 'body-parser'
import express from 'express'

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.send('Hello world')
})

app.listen(PORT, () => {
	console.log(`Express with Typescript! http://localhost:${PORT}`)
})
