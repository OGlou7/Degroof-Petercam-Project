import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCZvQEVC_bKMBRzjAxQH1t1vRhc_AVQ8dI",
    authDomain: "degroofpc.firebaseapp.com",
    databaseURL: "https://degroofpc.firebaseio.com",
    projectId: "degroofpc",
    storageBucket: "",
    messagingSenderId: "981010193119"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;
