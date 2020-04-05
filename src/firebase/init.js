import firebase from 'firebase'
import 'firebase/firestore'
import config from './prod-config'

const app = firebase.initializeApp(config)

export default app.firestore()
