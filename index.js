const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config()
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())


mongoose.connect(process.env.DB_connection)
.then(()=>console.log('mongodb connection'))
.catch((error)=>console.log(error))


const userRouter=require('./router/userRouter')

app.use('/api/v1/user',userRouter)



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})