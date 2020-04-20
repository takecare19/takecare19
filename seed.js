const admin = require('firebase-admin')
var fs = require('fs')
const resources = require('./resources.json')
const prodServiceAccount = require('./prod-service-account.json')
const devServiceAccount = require('./dev-service-account.json')
// const { categories, resources, locations, tags } = require('./data.js')

const addToCollection = (collection, data, env) => {
  const credential =
    env === 'dev'
      ? admin.credential.cert(devServiceAccount)
      : admin.credential.cert(prodServiceAccount)

  const db = admin
    .initializeApp({
      credential
    })
    .firestore()

  data.forEach(doc => {
    db.collection(collection)
      .add({
        ...doc,
        created_at: new Date(doc.created_at),
        updated_at: new Date(doc.updated_at),
        published_at: new Date(doc.published_at)
      })
      .then(docRef => console.log('Document successfully added ', docRef.id))
      .catch(error => {
        console.error('Error adding document: ', error)
      })
  })
}

const addWithId = (collection, data, env) => {
  const credential =
    env === 'dev'
      ? admin.credential.cert(devServiceAccount)
      : admin.credential.cert(prodServiceAccount)

  const db = admin
    .initializeApp({
      credential
    })
    .firestore()

  data.forEach(doc => {
    const id = doc.id
    delete doc.id
    db.collection(collection)
      .doc(id)
      .set({
        ...doc,
        created_at: new Date(doc.created_at),
        updated_at: new Date(doc.updated_at),
        published_at: new Date(doc.published_at)
      })
      .then(docRef => console.log('Document successfully added', docRef))
      .catch(error => {
        console.error('Error adding document: ', error)
      })
  })
}

const getDataFromCollection = collection => {
  admin
    .initializeApp({
      credential: admin.credential.cert(prodServiceAccount)
    })
    .firestore()
    .collection(collection)
    .get()
    .then(snapshot => {
      const data = []

      snapshot.forEach(doc => {
        data.push({ id: doc.ref.id, ...doc.data() })
      })

      const withDates = data.map(doc => ({
        ...doc,
        created_at: new Date(doc.created_at),
        updated_at: new Date(doc.updated_at),
        published_at: new Date(doc.published_at)
      }))

      fs.writeFile(`${collection}.js`, JSON.stringify(withDates), function (err) {
        if (err) throw err
        console.log('Saved!')
      })
    })
}

//getDataFromCollection('resources')
addWithId('resources', resources, 'prod')
