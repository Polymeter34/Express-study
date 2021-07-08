import express from 'express'
import path from 'path'
import { requestTime, logger } from './middlewares.js'
import serverRoutes from './routes/servers.js'

// const path = request('path')

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'backend', 'views'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(requestTime)
app.use(logger)

app.use(serverRoutes)

app.get('/', (req, res) => {
    res.render('index', { title: 'Main Page', active: 'main' })
})

app.get('/features', (req, res) => {
    res.render('features', { title: 'Features', active: 'features' })
})

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`);
})

// const fs = require('fs');

// let database = require('../sections.json')
// advertObject = {
//     chapter: 2,
//     section_title: 'Регулирование в сфере рекламы',
//     section_id: 34,
//     tpl_id: 'docxtpl_advert',
//     empty_id: '',
//     table_id: 'table_docxtpl_advert'
// }

// database[-1] = advertObject
// console.log(advertObject);

// const data = JSON.stringify(database, null, 4);
// console.log(data);

// fs.writeFile('sections.json', data, 'utf8', callback);
// write JSON string to a file
// fs.writeFile('sections.json', data, (err) => {
//     if (err) {
//         throw err;
//     }
// });

// let a = []
// a.length = 10

// for (let i = 0; i < a.length; i++) {
//     a[i] = i + 1
// }

// console.log(a);

// let b
// b = a.filter(item => item % 2 === 0)

// console.log(b);


