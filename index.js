const express = require('express')
const app = express()
const todoRoutes = require('./routes/todo')
const path = require('path')
const sequelize = require('./database')
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname,'public')))
app.use('/api/todo',todoRoutes)
app.use((req,res,next)=>{
    res.sendFile('/index.html')
})



//Запускаем сервер, и сервер БД
async function start(){
    try
    {

      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

      await sequelize.sync({ force: true }).then(()=>{
        app.listen(PORT, function(){
          console.log(`Server is running on port ${PORT}`);
        });
      }).catch(err=>console.log(err));
    } catch(e)
    {
        console.log(e)
    }
  }
  
start()