require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRouter = require('./routers/productRouter')

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;

app.use('/api/products', productRouter)


const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

}).catch(err => console.log(err.reason));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})