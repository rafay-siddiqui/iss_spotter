const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  passTimes.forEach((flyover) => {
    const date = new Date(0);
    date.setUTCSeconds(flyover.risetime);
    const duration = flyover.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  });
});