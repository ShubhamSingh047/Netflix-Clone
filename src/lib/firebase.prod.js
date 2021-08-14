import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDip6ihrPXd3C4Rnab1FQVucpNDsMDNNjM',
  authDomain: 'netflix-8f597.firebaseapp.com',
  projectId: 'netflix-8f597',
  storageBucket: 'netflix-8f597.appspot.com',
  messagingSenderId: '637353985920',
  appId: '1:637353985920:web:cde4034882e777917ea365',
};

const firebase = Firebase.initializeApp(config);

// Only oncomment once and chcek in firebase for data then comment again otherwise this will create dunlicate data.
// seedDatabase(firebase);

export { firebase };
