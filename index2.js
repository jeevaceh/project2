index2.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('vscode', 'root', 'root', {

    dialect :'mysql'
});

sequelize.authenticate().then(()=> {

    console.log("connection is successful");
}).catch((err) => {
    console.log(" unable to connect error is found ");
})

console.log("checking connection");
