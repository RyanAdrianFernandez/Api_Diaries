import express from 'express'
import diaryRoutes from './routes/diaries'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/ping', (_req, res) => {
  console.log('un ping aqui!')
  res.send('pong')
})

app.use('/api/diaries', diaryRoutes)

app.listen(PORT, () => {
  console.log(`Conectado al puerto ${PORT}`)
})
