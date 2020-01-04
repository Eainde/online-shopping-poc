import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB3zt45c6BGMEnoPhz2mF1RkNZzhdE_pDI",
    authDomain: "crwn-db-4c9a0.firebaseapp.com",
    databaseURL: "https://crwn-db-4c9a0.firebaseio.com",
    projectId: "crwn-db-4c9a0",
    storageBucket: "",
    messagingSenderId: "128635122114",
    appId: "1:128635122114:web:ccb9cd00ab53ea9996265b",
    measurementId: "G-91713SFJP0"
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;