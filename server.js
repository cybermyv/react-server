import express from 'express';
import bodyParser from 'body-parser';
//import dbEngine from "./dbengine";

const app = express();

const path = __dirname + '/app';

app.use(express.static(path));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//--

app.get('/', async (req, res) => res.send('Hello World!'));

//--
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://localhost:${port}`);
});
