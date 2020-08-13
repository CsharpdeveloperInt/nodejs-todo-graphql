const express = require('express')
const app = express()
const { graphqlHTTP } = require('express-graphql')
const path = require('path')
const sequelize = require('./database')
const { response } = require('express')
const schema = require('./graphql/schema')
const resolver = require('./graphql/resolver')
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

app.use(graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
}))

app.use((req,res,next)=>{
    res.sendFile('/index.html')
})

//Запускаем сервер, и сервер БД
async function start(){

      try {
        await sequelize.sync();
        console.log('Connection has been established successfully.');
        app.listen(PORT,()=>{
          console.log(`Server is running on port ${PORT}`)});
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    }

start()