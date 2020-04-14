const admin = require('firebase-admin')

const prodServiceAccount = require('./prod-service-account.json')
const devServiceAccount = require('./dev-service-account.json')

const resources = [
  {
    created_at: new Date(),
    location: { anywhere: true, specific: 'Toronto' },
    updated_at: new Date(),
    description:
      'A roundup of over 50 free resources that may be of help to you as a social worker, mental health worker, and/or a social health educator during the COVID-19 pandemic',
    published_at: new Date(),
    approved: true,
    url: 'https://materialdesignicons.com/',
    company: 'Social Workers of Canada',
    name: 'COVID-19 Resources for Social Workers and Therapists',
    tags: ['free', 'resources', 'front-line'],
    category: ' 3XPwVvmldDcEUUlfsrG2'
  },
  {
    created_at: new Date(),
    location: { anywhere: true, specific: 'Montreal' },
    updated_at: new Date(),
    description:
      'A 2-hour workshop for trans survivors of sexual violence is a form of trauma care through reconnecting to a sense of self-worth and empowerment at a time when the added stress of the pandemic is often overwhelming our current care and coping strategies',
    published_at: new Date(),
    approved: true,
    url: 'https://www.instagram.com/p/B-dI67lAARX/',
    company: 'Dandelion Initiative',
    name: 'Trans Care for Resiliency',
    tags: ['free', 'resources'],
    category: ' 3XPwVvmldDcEUUlfsrG2'
  }
]

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
      .add(doc)
      .then(docRef => console.log('Document successfully added ', docRef.id))
      .catch(error => {
        console.error('Error adding document: ', error)
      })
  })
}

addToCollection('resources', resources, 'prod')
