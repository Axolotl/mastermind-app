const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//json parser
app.use(bodyParser.json())

//

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))


// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });


//

// Serve our api
require('./routes')(app);
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to arrrrrrggg land',
// }));

// Set port
const PORT = process.env.PORT || 8000;

// Setup listener
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;