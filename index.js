const { fetchMyIP, fetchCoordsbyIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsbyIP('99.245.100.82', (error, coords) => {
//   if (error) {
//     console.log('It didn't work!', error);
//     return;
//   }
//   console.log(coords);
// });

// fetchISSFlyOverTimes({ latitude: 43.5639, longitude: -79.7172 }, (error, times) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log(times);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  console.log(passTimes);
});