const express = require("express");
const app = express();

app.get("/",(req, res)=>{
  res.send("home page");
});

app.get("/hello",(req, res)=>{
  res.send("hello page");
});

app.get("/test",(req, res)=>{
  res.send("home page");
});

app.listen(3000, ()=>{
  console.log("server is started");
})