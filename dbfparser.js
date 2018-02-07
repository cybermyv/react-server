import Parser from 'node-dbf';
import iconv  from 'iconv-lite';
import fs from 'fs';

import parseDBF from 'parsedbf';


exports.getAllData = callback => {
let a = [];
let dbfFile = fs.readFileSync('./db/NORDOC74.DBF');
let parsedDBF = parseDBF(dbfFile, 'win1251');

a.push(parsedDBF);

//console.log(a)
callback(a);
}

// let parser = new Parser('./db/NORDOC74.DBF','win1251','win1251');

// exports.getAllData = async callback =>{
//     let a =[] ;

//     parser.on('start', p =>{

//          console.log('Парсинг начат', p);
//      });

//     const h = parser.on('header', (h) => {
//       console.log('dBase file header has been parsed');
//       let a = h.fields;

//      // console.log(a);
//     //  callback (a);
      
//     });

//     parser.on('record', (record) => {
      
//         a.push(record.DOCNAME); 
//        // console.log('Name: ' + record.NORMDOCID + ' ' + record.DOCNAME); // Name: John Smith
//     });
     
//     parser.on('end', (p) => {
//         console.log('Finished parsing the dBase file');

//         callback(a);
//     });
//     //parser.options('ansi');
//     parser.parse();

// }