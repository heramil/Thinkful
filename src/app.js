const express = require('express');
const app = express();

const sayHello = (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  const content = name ? `Hello, ${name}!` : "Hello!"
  res.send(content)
}

const saySomething = (req, res) => {
  const greeting = req.params.greeting;
  const name = req.query.name;
  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
  res.send(content)
}

const sayGoodbye = (req, res) => {
  res.send("Sorry to see you go!");
};

app.get('/hello', sayHello)
app.get('/say', sayHello)
app.get('/say/goodbye', sayGoodbye)
app.get('/say/:greeting', saySomething)

module.exports = app;