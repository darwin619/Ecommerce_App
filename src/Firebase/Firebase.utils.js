import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
	    apiKey: "AIzaSyCUBI7-PrkMR_G2hRdZgpNRNTBsohXY25w",
	    authDomain: "ecommerce-app-by-shivam.firebaseapp.com",
	    databaseURL: "https://ecommerce-app-by-shivam.firebaseio.com",
	    projectId: "ecommerce-app-by-shivam",
	    storageBucket: "",
	    messagingSenderId: "796261777601",
	    appId: "1:796261777601:web:f3f9d750b44b11d7"
  };

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;
	
	const userRef = firestore.doc(`users/${userAuth.uid}`)

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date()

		try {
		await userRef.set({
			displayName,
			email,
			createdAt,
			...additionalData              
		})
		}
		catch(error) {
			console.log(`${error} User Can't be registered`)
		}
		
	}
	return userRef;
}


export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};


export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};


firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
 
export default firebase;