require('./models/cnx') // use this file without in variable or not
const express = require('express') // import express
const app = express() // express return faunction , use this function in a variable
const employeeRouter = require('./routers/employeeRouter') // router import
const path = require('path') // path module
const { engine } = require('express-handlebars') // for use of hbs files
const bodyparser = require('body-parser')
const handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

app.use(bodyparser.urlencoded({
    extended: true
}))

app.use(bodyparser.json())

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutDir: __dirname + '/views/layouts/',
    handlebars:allowInsecurePrototypeAccess(handlebars),
}))

app.set('view engine', 'hbs')                   

app.set('views', path.join(__dirname, '/views/'))

app.listen(3000, () => console.log('Server at http://localhost:3000/employee'))

app.use('/employee', employeeRouter)