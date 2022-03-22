import express from "express";
import bodyParser from "body-parser";

import studentRoutes from './routes/students.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/students', studentRoutes)

app.get('/',(req,res)=>{
    res.send('Welcome to Student Enrollment');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));