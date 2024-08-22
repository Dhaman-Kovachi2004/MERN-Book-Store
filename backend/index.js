import express from "express";
import { PORT , mongodbURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js"
import bookRoutes from "./routes/bookRoutes.js"
import cors from "cors";

const app =express();

//MiddleWare for parsing request body
app.use(express.json());


//MiddleWare for handling CORS policy
//Option 1 : Allow all origins with default of cors (*)
app.use(cors())

//Option 2 :Allow Custom origins
// app.use(cors({
//     origin:"http://localhost:3000",
//     methods:['GET','PUT','POST','DELETE'],
//     allowedHeaders:['Content-Type']
// }))

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send("Welcome to Book Store")
})

app.use('/books',bookRoutes);

mongoose
    .connect(mongodbURL)
    .then(()=>{
        console.log("App is connected to database");
        app.listen(PORT,()=>{
            console.log(`App is listening on PORT ${PORT}`);
        });
        
    })
    .catch((error)=>{
        console.log(error);
    })