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
   // console.log('validationSigIn ', login, password);
    let tQ = 'select * from users where login = ? and pass = ?';
    //const token = uuid.v4();
    // console.log(token);
    db.get(tQ,[login, password], (err, row)=>{
      if(!err) {
        
      row.token = uuid.v4();;
      console.log(row);
     
          return row
            ? callback(null, row)
            : callback(null, 'failure')};
    });

    //db.close();
  
};