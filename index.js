// const admin = require( 'firebase-admin' );
// const express = require( 'express' );
// const serviceAccount = require( './bth4-d5049-firebase-adminsdk-5z1j5-71aaa39e73.json' );

// const app = express();
// app.use( express.json() );

// admin.initializeApp( {
//   credential: admin.credential.cert( serviceAccount )
// } );
// // const message = {
// //   notification: {
// //     title: 'Hello World',
// //     body: 'This is a notification that will be displayed ASAP.'
// //   },
// //   token: tokenUser

// // };
// // admin.messaging().send( message ).then( ( result ) => {
// //   console.log( '====================================' );
// //   console.log( { result } );
// //   console.log( '====================================' );
// // } ).catch( ( err ) => {

// // } );
// app.post( '/send', ( req, res ) => {
//   console.log( '====================================' );
//   console.log( req.body.tokens );
//   console.log( '====================================' );
//   const tokenUser = req.body.tokens;
//   const message = {
//     notification: {
//       title: 'Hello World',
//       body: 'New '
//     },
//     token: tokenUser

//   };
//   admin.messaging().send( message ).then( ( result ) => {
//     console.log( '====================================' );
//     console.log( { result } );
//     console.log( '====================================' );
//   } ).catch( ( err ) => {
//     console.log( { err } );
//   } );
// } );
// app.listen( 3000, () => {
//   console.log( 'listening on port 3000' );
// } );

const admin = require( 'firebase-admin' );
const express = require( 'express' );

const app = express();
app.use( express.json() );
const serviceAccount = require( './fir-24393-firebase-adminsdk-rgz7s-130563c6a6.json' );

admin.initializeApp( {
  credential: admin.credential.cert( serviceAccount ),
  databaseURL: 'https://bth4-d5049-default-rtdb.firebaseio.com'
} );
const message = {
  notification: {
    title: 'Hello World',
    body: JSON.stringify( { id: '123' } )
  },
  data: { id: '123' },
  token: 'eaDXre0aTvqy_snKtt69dG:APA91bGBkoa5ofFc4rOdDgqcVzNK1yS_U2gab9PwmTlpXURf-AxtmNpJda5dL74UzkVfZYcdv2uciEQPhWmRdBqAAGFQd9_YovHGW_9cgOKYDHFgvBxN9Zx2lmcVKdJnlvB-_D4828Hn'

};
admin.messaging().send( message ).then( ( result ) => {
  console.log( '====================================' );
  console.log( { result } );
  console.log( '====================================' );
} ).catch( ( err ) => {
  console.log( { err } );
} );

// app.post( '/send', ( req, res ) => {
//   const datas = {
//     type: req.body.type || 0,
//     date: req.body.date || Date.now(),
//     title: req.body.title || '',
//     body: req.body.body || ''
//   };
//   const message = {
//     notification: {
//       title: req.body.title || '',
//       body: req.body.body || ''
//     },
//     data: datas,
//     token: req.body.tokens

//   };
//   admin.messaging().send( message ).then( ( result ) => {
//   } ).catch( ( err ) => {
//   } );
//   res.send( 'Thanh cong' );
// } );
// get api
app.get( '/get', ( req, res ) => {
  res.send( ' day thay cong' );
} );

app.listen( 3000, () => {
  console.log( 'listening on port 3000' );
} );
