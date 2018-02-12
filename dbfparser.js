import Parser from 'node-dbf';
import iconv from 'iconv-lite';
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

