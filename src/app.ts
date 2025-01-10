import express  from 'express'

const app = express();

//Testing the api
app.get("/", (req, res) => { 
    res.send("API is working with api/v1");  
});

//Main routes of the app
import priecRouter from "./routes/price.route"
app.use("/api/v1", priecRouter)

export {app};