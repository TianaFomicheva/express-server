import { render } from 'ejs'
import express from 'express'
import path from 'path'
import { requestTime } from './middleware.js'
import ServerRoutes from './routes/servers.js'
const __dirname = path.resolve()

const app = express()
const PORT = process.env.PORT ?? 3000
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'templates'))

app.get('/', (req,res)=>{
    res.render('index', {title: "Title page", active: "main"})
})
app.get('/features', (req,res)=>{
    res.render('features', {title: "Features page", active: "features"})
})

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(ServerRoutes)

app.get('/download', (req,res)=>{
    console.log(req.requestTime)
    res.download(path.resolve(__dirname, 'static','features.html'))
})



app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}...`)
})