import express from 'express';
import bodyParser from 'body-parser';
import dbEngine from './dbengine';
import dbfParser from './dbfparser';

const app = express();

const path = __dirname + '/app/public/';

app.use(express.static(path));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/signin', (req, res) => {
  dbEngine.validationSigIn(req.body.username, req.body.password,
    (err, rec) => {
      console.log(rec);
      if (rec !== 'failure') {
        res.json(rec);
      }
      else {
        res.status(401).json({ error: 'Ошибка авторизации' })
      }
      // res.json(rec);
    })
});

app.get('/api/main', (rec, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  dbfParser.getAllData(rec => {
    return res.json(rec)
  });
});

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://localhost:${port}`);
});
