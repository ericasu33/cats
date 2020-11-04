const fs = require("fs");

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // console.log("In readFile's Callback: it has the data");
    if (error) {
      functionToRunWhenThingsAreDone(data);
    } else {
      functionToRunWhenThingsAreDone(data);
    }
  });
};


// breedDetailsFromFile("Bombay", data => {
//   console.log("Return Value: ", data);
// });

module.exports = breedDetailsFromFile;