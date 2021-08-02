const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = (passTimes) => {
  passTimes.forEach((flyover) => {
    const date = new Date(0);
    date.setUTCSeconds(flyover.risetime);
    const duration = flyover.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  });
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  })