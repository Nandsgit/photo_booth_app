import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

//now using express middleware to connect to our application
app.use('/posts', postRoutes);

//conneting server application with database 
// https://www.mongodb.com/cloud/atlas

// const CONNECTION_URL = 'mongodb+srv://Nand:learningjs@cluster0.uro88.mongodb.net/<dbname>?retryWrites=true&w=majority';

const CONNECTION_URL = 'mongodb+srv://Nand:learningjs@cluster0.uro88.mongodb.net/test?retryWrites=true&w=majority';


const PORT = process.env.PORT || 5000;

//connecting to the mongoose database
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost: ${PORT}`)))
    .catch((error) => console.log(error.message));

//makes sure we dont get warning in the console
mongoose.set('useFindAndModify', false);
