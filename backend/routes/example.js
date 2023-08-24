
import fs from 'fs'; 
//Fs följer med node.js behöver ej npm install 

//const fs = require('fs'); //Varför fungerar det inte att importera med Require.

// Ange sökvägen till textfilen
const filePath = 'example.txt';

// Läs innehållet i textfilen
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Fel vid läsning av filen:', err);
        return;
    }

    // Skriv ut innehållet i textfilen
    console.log('Innehåll i textfilen:');
    console.log(data);
});


// Skriv till en fil, namnet på filen, sedan meddelandet
fs.writeFile('example.txt', 'Här skriver jag något om pippilångstrump.', (err) => {
    if (err) {
        console.error('Fel vid skrivning till filen:', err);
        return;
    }
    console.log('Filen skapades och innehållet skrevs.');
});
