const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes/index')
require('dotenv').config()

//Middlewares
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)


app.get('/', (req, res) => {
  res.send('Bienvenido a la API del mundial')
})

app.listen(process.env.PORT || 6050, () => {
  console.log(`Tu backend está en la url: http://localhost:${process.env.PORT || 6050}`)
})