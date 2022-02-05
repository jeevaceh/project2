const Sequelize =reqire('sequelize');

const sequelize =new Sequelize('server','root','root',{
    dialect :'mysql',
    host : 'localhost',
    port : '3306'
});

sequelize.authenticate().then(() =>{
    console.log(" Your Connection is sucessfull");
}).catch((err) => {
    console.log('error in connection')
});

console.log('connection is loading');
