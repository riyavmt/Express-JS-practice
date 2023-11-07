const express = require('express');

const app = express();
app.use((req,res,next)=>{
    console.log("In the Middleware");
    next();
});
app.use((req,res,next)=>{
    console.log("In the next Middleware");
    res.send('<h1>Hello from the server!</h1>');
})

app.listen(3000);