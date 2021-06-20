import express from 'express'
import path from 'path'
import {requestTime, logger} from './middlewares.js'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)

app.get('/download', (req, res) => {
    res.download(path.resolve(__dirname, 'static', 'index.html'))
    
})

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`);
})