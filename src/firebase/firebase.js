import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APPID
  };

firebase.initializeApp(config)

const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('expenses').push({
//     description: 'Water Bill',
//     note: '',
//     amount: 50.34,
//     createdAt: 16121212
// })

// ******* insert array of data ******* // 
// database.ref('notes').push({
//     tite: 'Activities',
//     body: 'going for run'
// })

// database.ref('notes/-MKleI83sVwZeeeedaHu').update({
//     body: 'going to gym'
// })


// ******* Fetch data from firebase everytime it changes ******* // 
// const onValueChange = database.ref().on('value', ((dataSnapshot) => {
//     const data = dataSnapshot.val()
//     console.log(data.name , 'is a ', data.job.title, ' at ', data.job.company)
// }))

// const onValueChange = database.ref().on('value', (dataSnapshot) => {
//     console.log(dataSnapshot.val())
// }, (e) => {
//     console.log('error: ', e.message)
// });


// ******** fetch data and convert into react read format ******** //
// database.ref('expenses').on('value',(snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// // ******** get the removed array using child_removed event ******** //
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // ******** get the removed array using child_changed event ******** //
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // ******** get the removed array using child_added event ******** //
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// setTimeout(() => {
//     database.ref('age').set(26)
// },3500)

// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// },3500)

// setTimeout(() => {
//     database.ref('age').set(29)
// },3500)


// // ******* Fetch data from firebase turn off ******* // 
// database.ref().off('value', (dataSnapshot) => {
//     console.log(dataSnapshot.val())
// })

// ******* Fetch data from firebase once ******* // 
// database.ref('job/title').
//   once('value').
//   then((dataSnapshot) => {
//     const val = dataSnapshot.val();
//     console.log(val)
//    }).catch((e) => {
//     console.log(e.message)
// })

// ******* insert data into firebase ******* // 
// database.ref().set({
//     name: 'Poorna Chandra',
//     age: 34,
//     stresslevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'google'
//     },
//     location: {
//         city: 'Bangalore',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('data saved successfully!')
// }).catch((e) => {
//     console.log('error: ', e)
// })


// ******* update data into firebase ******* //
// database.ref().update({
//     stresslevel: 9,
//     'job/company':'Amazon',
//     'location/city': 'Pune'
// })

// ******* insert specific column into firebase ******* //
// database.ref('attributes').set({
//     height: 172,
//     weight: 68
// }).then(()=> {
//     console.log('successful!!!!')
// }).catch((e) => {
//     console.log('error: ', e)
// })


// ******* remove data from firebase firebase ******* //
// database.ref('attributes/weight').remove().then(() => {
//     console.log('removed successfully!!')
// }).catch((e) => {
//     console.log('error: ', e.message)
// })