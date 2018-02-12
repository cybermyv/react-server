//import sqlite3 from 'sqlite3';
const uuid = require('uuid');

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/db.db', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to database! ');
});

exports.sigup = callback => {
  let tQ = 'select * from users';
  db.all(tQ, callback);
};

exports.validationSigIn = (login, password, callback) => {

  let tQ = 'select * from users where login = ? and pass = ?';

  db.get(tQ, [login, password], (err, row) => {
    if (!err) {

      //   console.log(row);  

      if (row) row.token = uuid.v4();;

      return row
        ? callback(null, row)
        : callback(null, 'failure')
    };
  });

  //db.close();

};
