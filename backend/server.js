const express= require ('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();

const app= express();
const port = process.env.PORT|| 3000;

app.use(express.json());

const authRouter= require('./routes/auth')
app.use('/auth', authRouter);
//connect to MONGODB
// note : we ll use a local db for now and a render managed one later 
const uri = process.env.MONGODB_URI || 'dbccecfece'
mongoose.connect(uri)
    .then(()=> console.log('MongoDb connected ...')
    .catch(err=> console.log(err))
)

app.get('/', (req, res)=>{
    res.send('BAckend is running')
});

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
    
})



