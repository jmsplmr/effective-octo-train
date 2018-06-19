/* eslint-disable no-console */
import fs from 'fs';

fs.readFile(process.argv[2], callback);

function callback (err, data) {
        const str = data.toString();
        const split = str.split('\n');

        console.log(split.length - 1);
}