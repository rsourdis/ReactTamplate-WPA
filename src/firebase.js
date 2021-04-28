import firebase from 'firebase';

const firebaseConfig = {
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const storageRef = firebase.storage().ref();
const auth = firebase.auth();

export { db, auth, storage, storageRef };
