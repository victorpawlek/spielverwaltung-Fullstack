const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const routerSpiele = require('./routes/spiele');
const routerMannschaften = require('./routes/mannschaften');
const cors=require('cors');
const { errorHandler, notFound } = require('./middleware/errorHandler');

require('colors');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());
app.use(cors());

app.use(express.json());
app.use('/spiele', routerSpiele);
app.use('/mannschaften', routerMannschaften);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);
