const admin = require('firebase-admin')
var fs = require('fs')
const resources = require('./resources.json')
const tags = require('./tags.json')
const prodServiceAccount = require('./prod-service-account.json')
const devServiceAccount = require('./dev-service-account.json')

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

    let newData

    if (collection === 'resources') {
      newData = {
        ...doc,
        created_at: new Date(doc.created_at),
        updated_at: new Date(doc.updated_at),
        published_at: new Date(doc.published_at)
      }
    } else {
      newData = doc
    }

    db.collection(collection)
      .doc(id)
      .set(newData)
      .then(docRef => console.log('Document successfully added', docRef))
      .catch(error => {
        console.error('Error adding document: ', error)
      })
  })
}

const getDataFromCollection = (collection, env) => {
  const credential =
    env === 'dev'
      ? admin.credential.cert(devServiceAccount)
      : admin.credential.cert(prodServiceAccount)

  const db = admin
    .initializeApp({
      credential
    })
    .firestore()

  db.collection(collection)
    .get()
    .then(snapshot => {
      const data = []

      snapshot.forEach(doc => {
        data.push({ id: doc.ref.id, ...doc.data() })
      })

      let dataToWrite

      if (collection === 'resources') {
        dataToWrite = data.map(doc => ({
          ...doc,
          created_at: new Date(doc.created_at.toDate()),
          updated_at: new Date(doc.updated_at.toDate()),
          published_at: new Date(doc.published_at.toDate())
        }))
      } else {
        dataToWrite = [...data]
      }

      fs.writeFile(`${collection}.json`, JSON.stringify(dataToWrite), function (err) {
        if (err) throw err
        console.log('Saved!')
      })
    })
}

const getTags = (type, resourceTags) => {
  return resourceTags.filter(resourceTag => {
    return tags.find(tag => tag.id === resourceTag).type === type
  })
}

const reformatTags = () => {
  const credential = admin.credential.cert(prodServiceAccount)

  const db = admin
    .initializeApp({
      credential
    })
    .firestore()

  const firstResource = [resources[1]]

  firstResource.forEach(resource => {
    const newTags = {
      costTags: getTags('cost', resource.tags),
      topicTags: getTags('topic', resource.tags),
      formatTags: getTags('format', resource.tags),
      audienceTags: getTags('audience', resource.tags)
    }

    db.collection('resources')
      .doc(resource.id)
      .set(newTags, { merge: true })
      .then(() => console.log('Successfully updated resource ' + resource.id))
      .catch(() => console.error('Error updating resource ' + resource.id))
  })
}

addWithId('tags', tags, 'dev')
//getDataFromCollection('tags', 'prod')
//reformatTags()
