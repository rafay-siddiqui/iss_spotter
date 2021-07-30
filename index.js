const { fetchMyIP, fetchCoordsbyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsbyIP('99.245.100.82', (error, data) => {
//   if (error) {
//     console.log('It didn't work!', error);
//     return;
//   }
//   console.log(data);
// });