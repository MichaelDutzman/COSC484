 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyANZsq5phZjZG_sCI4mVKeK7TDOAH4xS1A",
    authDomain: "stylishdonutdb.firebaseapp.com",
    databaseURL: "https://stylishdonutdb-default-rtdb.firebaseio.com",
    projectId: "stylishdonutdb",
    storageBucket: "stylishdonutdb.appspot.com",
    messagingSenderId: "1092500348557",
    appId: "1:1092500348557:web:8e3f265fcafa3e208f4cc4"
  };

 // Initialize database app
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const firestore = firebase.firestore();

  // Get signUp form
  const getElementVal = function(id){
    return document.getElementById(id).value;
  };
  const signForm = document.getElementById("signUp");
  signForm.addEventListener('submit', function(e){
    e.preventDefault();

    var email = getElementVal('email');
    var display = getElementVal('username');
    var password = getElementVal('password');

    auth.createUserWithEmailAndPassword(email, password)
    .then(function(cred){
      cred.user.updateProfile({
        displayName: username
      })
      return firestore.collection('users').doc(cred.user.uid).set({
        firstName: getElementVal('firstname'),
        lastName: getElementVal('lastname'),
        streetAddress: getElementVal('streetaddress'),
        city: getElementVal('city'),
        state: getElementVal('state'),
        zipCode: getElementVal('zipcode'),
        phoneNo: getElementVal('phonenumber'),
        email: email,
        displayName: display,
        password: password,
        passConfirm: getElementVal('password-confirm')
      });
    })
    .then(function(){
      location.href = "../Order/default.html";
      console.log("user created");
    })
    .catch(function(err) {
      console.log(err.message);
    });
  })
 

 