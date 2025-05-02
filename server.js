const express = require('express');
const ProductRoutes = require('./routes/ProductRoutes');
const userRoutes = require('./routes/userRoutes');

var cors = require('cors')

const app =express()
const port=3000
app.use(cors())
app.use(express.json())
app.use(express.static('public'))


app.use('/api/products',ProductRoutes)
app.use('/api/users',userRoutes)
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})