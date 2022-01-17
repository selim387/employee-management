const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const {mongoose}=require('./db.js');
const employeeController = require('./controllers/employeeControler.js');
//app.use(express.urlencoded({ extended: false }));
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.listen(3000,()=>console.log('server started in port 3000'));
app.use('/employees',employeeController);