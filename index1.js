const express =require('express');

const app = express();

app.get('/jeeva' , (req,res) => {

 res.json("Hello world ");

});
app.listen(3000);