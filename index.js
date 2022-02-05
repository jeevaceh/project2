const express =require('express')

const app =express();

app.get('/' ,(req,res) => {

res.sent({
    "name" : "jeeva"
});

});
app.listen(9999);


