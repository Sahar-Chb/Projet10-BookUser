const express = require('express');
const cors = require('cors');

require('./config/connect');


const contactRoute = require('./routes/contact')
const userRoute = require('./routes/user');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/contact', contactRoute);
app.use('/user',userRoute);



app.use('/getimage', express.static('./uploads'));



app.listen(3000, () => {
  console.log('server work!');
})