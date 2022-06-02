const express = require('express')
const cors = require('cors')
const mmainRoute = require('./src/routes/mainRoute')
const {createConnction} = require('./src/config/dbCon')
createConnction().then((res)=>{  
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api',mmainRoute)

const PORT = 3000
app.listen(PORT,(err)=>{
    if (err) throw err;
    console.log(`running on ${PORT}`);
})