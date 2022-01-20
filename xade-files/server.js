const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a POST route

app.post('/users_create', (req, res, next) => {
  console.log(req.body);
  //GUN stuff
  res.send({ message: 'User created successfuly' })
})