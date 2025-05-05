require('dotenv').config();
const express = require('express');
const ProductRoutes = require('./routes/ProductRoutes');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');


var cors = require('cors')

const app =express()
const port=3000
mongoose.connect(process.env.MONGO_URL

).then(()=>console.log('==================Data base Connected===================='))
.catch(err=>console.error('Db connection issue',err))




app.use(cors())
app.use(express.json())
app.use(express.static('public'))


app.use('/api/products',ProductRoutes)
app.use('/api/users',userRoutes)
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})