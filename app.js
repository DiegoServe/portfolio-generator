const fs = require('fs');

const profileDataArgs = process.argv.slice(2);

const generatePage = (Name: Diego, Github: DiegoServe) => {
    return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};
  
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);
    console.log('Portfolio complete! Check out index.html to see the output!');

const [name, github] = profileDataArgs;
console.log(generatePage(name, github));


  });
  
  module.exports = generatePage;
