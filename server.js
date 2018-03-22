const express = require('express');
const app = express();
const router = require('./router');

app.use('/upload', express.static('upload')); //now we can use GET :3000/upload/
app.use('/api', router);
app.listen(3000, ()=>console.log('Server listen on port 3000'));