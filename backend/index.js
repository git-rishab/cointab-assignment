const express = require("express");
const { sequelize } = require("./config/db");
const cors = require("cors");
const { userRoute } = require("./routes/user.routes");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    try {
        res.status(200).send({"ok":true, "message":"Welcome to Backend"})
    } catch (error) {
        res.status(404).send({"ok":false, "message":error.message});
    }
})

app.use("/user", userRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`Server running at port ${process.env.PORT}`)
    sequelize.sync().then(()=>{
        console.log("Database connected");
    })
    .catch((err)=>{
        console.log(err);
        console.log("Database not connected");
    })
})