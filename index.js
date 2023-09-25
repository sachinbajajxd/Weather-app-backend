const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv=require('dotenv');

dotenv.config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/',require('./routes'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});