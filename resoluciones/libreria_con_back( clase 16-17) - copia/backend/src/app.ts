import express from 'express';
import cors from 'cors';
import {bookRoutes} from './routes/rutas';
import {handlerError} from './middlewares/error';
import {logRequest} from './middlewares/logger';
import dotenv from 'dotenv';


dotenv.config();


const app = express()
app.use(express.static('public'));
const PORT=3000;
app.use(cors()); 


app.use(express.json());
app.use(logRequest);

app.use('/api/books', bookRoutes);

app.use(handlerError);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
