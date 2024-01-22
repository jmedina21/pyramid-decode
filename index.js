const fs = require('fs');

const text = fs.readFileSync('./coding_qual_input.txt', 'utf-8');

function decode(text) {
    const lines = text.split('\n');
    
    let obj = {};
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].split(' ');
        obj = Object.assign(obj, { [line[0]]: line[1] });
    }

    const keys = Object.keys(obj);
    
    const pyramid = [];
    let currentNumber = 1;

    while (currentNumber <= keys.length) {
        let level = pyramid.length;
        let newRow = [];

        for (let i = 0; i <= level; i++) {
            newRow.push(currentNumber);
            currentNumber++;
        }

        pyramid.push(newRow);
    }


    let message = []

    for (let i = 0; i < pyramid.length; i++) {
        message.push(obj[pyramid[i].at(-1)]);
    }

    return message.join('');
}

console.log(decode(text))