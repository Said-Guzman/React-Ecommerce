import express from "express"
import mysql from "mysql"
import cors from "cors"
const app = express()

const db = mysql.createConnection({
host:"127.0.0.1",
user:"root",
password:"password",
database:"reactdb"
})

app.get("/", (req,res)=>{
    res.json("hello it's working :)")
})

app.use(cors())
app.use(express.json())

db.connect((err)=>{
    if (err){
        console.log(err)
        return err
    }else{
        console.log("connection to db was made")
    }
})


app.get("/product", (req,res)=>{
    const q = "SELECT * FROM produce"
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return
    })
})


app.listen(4000, ()=> {
    console.log("Connected to backend")
})



