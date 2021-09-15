const express = require('express')
const app = express()
const port = 21536

app.get('/', (req, res) => {
  res.send('Calculadora de PI, consulta de esta manera /pi/?random_limit=numero')
})


function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
    //Math.random() * (max - min + 1) + min  // este metodo incluye los limites
  )
}



app.get('/pi/', (req, res) => {
    console.log(req.query);
    if(req.query !== undefined && req.query.random_limit !== undefined ){

        let lim_superior = parseInt(req.query.random_limit)
        let lim_inferior = parseInt(lim_superior / 2)
        let decimal_limit = between(lim_inferior, lim_superior)
    
        let PI = Math.PI
        let con_digitos = PI.toFixed(decimal_limit)

    
        res.send(con_digitos)


    }
    else{
        res.send('Bad input')
    }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
