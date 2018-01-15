//import sqlite3 from 'sqlite3';

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
    console.log('validationSigIn ', login, password);
    let tQ = 'select * from users where login = ? and pass = ?';

    db.get(tQ,[login, password], (err, row)=>{
      if(!err) {
        // console.log(row);  
        // callback(null, row)};
      
        if (err) {
            return console.error(err.message);
          }
          return row
            ? callback(null, row)
            : callback(null, 'failure')};
    });

    //db.close();
  
};
