const express =require('express');

const app = express();

app.get('/jeeva' , (req,res) => {

 res.sent("Hello world ");

});
app.listen(3000);