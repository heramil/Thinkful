const { PORT = 9000 } = process.env;
const app  = require('./app');

const listener = () => console.log(`Listening on PORT ${PORT}`);

app.listen(PORT, listener);