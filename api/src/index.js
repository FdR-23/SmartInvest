require('dotenv').config();
const express = require('express');
const router = require('./routes/index.js');

const cors = require('cors')
const morgan = require('morgan')
const app = express();

const PORT = 3000;

//metodo para entender los obj json
app.use(express.json())

//cors
app.use(cors());

//middlewares
app.use(morgan('dev'));


//metodo que sirve recibir los datos desde el cliente 
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


//Routes
const routes = require("./routes/index.js");
app.use("/", routes);

//para la base de datos 

const sequelize = require('./db.js')
//import models
const ListCripto = require('./models/list_cripto.js');
const TendecesCripto = require('./models/list_tendence_cripto.js');
const DetailsCripto = require('./models/detail_cripto.js');
const TicketsCripto = require('./models/tickertcripto.js')
//updatingDB
const {
  updateListCripto,
  updateTendence,
  updateDetails,
  updateTickets } = require('./updatedb.js')


//stating the server
async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
    const intervalsUpdate = 30 * 60 * 1000;

    //update
    setInterval(updateListCripto, intervalsUpdate)
    setInterval(updateTendence, intervalsUpdate)
    //clearAll
    setInterval(updateDetails, intervalsUpdate)
    setInterval(updateTickets, intervalsUpdate)
  })
}


main();