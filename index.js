const express = require('express')
const app = express()
const port = 3200
let status = 202;

app.get('/', (req, res) => {

  let option = random(0,9)
  if (status === 202) {
    if (option != 1 && option != 5) {
      res.status(202).send('ERROR 202');
      status = 202;
      console.log("ERROR 202")
      console.log(status);
    } else {
      res.status(500).send('ERROR 500');
      status = 500;
      console.log("ERROR 500");
      console.log(status);
    }
  }else{
    res.status(500).send('ERROR 500');
    status = 500;
    console.log("ERROR 500");
    console.log(status);
  }
})

function random(inferior, superior) {
  var possibilities = superior - inferior;
  var random = Math.random() * (possibilities + 1);
  random = Math.floor(random);
  return inferior + random;
}

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`)
})
