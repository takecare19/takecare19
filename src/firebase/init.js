import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './config'

export const app = firebase.initializeApp(config)
export const db = app.firestore()
