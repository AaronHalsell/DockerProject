const express = require ('express')
const app = express()
const hostname = require('os').hostname();

app.get('/', (req, res) => {
    res.send(
        '<!DOCTYPE html>' +
        '<html>' +
        '<body>' +
            '<h2> Hello world</h1></br>' 
    )
})

app.listen(8080, () => {
    console.log("listening on port 8080")
});
