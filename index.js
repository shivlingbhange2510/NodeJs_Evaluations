const express = require('express');
const app = express();
const PORT=3000;

const logger =()=>{
    console.log('this is logger middlware for all ')
};
app.get('/', (req, res)=>{
    res.send(`hii server runs on port ${PORT}`)
})
// app.use(logger);

const checkPermission =(val)=>{
    return(`this is checkPermission middleware ${val}`)
    // return()
}
app.get('/book', (req, res, next)=>{
    
    // next()
    console.log('book routes')
    res.send('hii this is book route')
})

app.get('/libraries', (req, res, next)=>{
    checkPermission('libraries');
    next()
    
    res.send('permission: true');
    res.end()
})

app.get('/authors', (req, res, next)=>{
    console.log(    checkPermission('authors')  )
    next()
    res.send('permission: true');
} )
app.listen(PORT,  (req, res)=>{
    console.log(`server running on port ${PORT}`)
})