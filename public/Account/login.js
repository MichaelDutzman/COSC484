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

  
// TO PERFORM USER LOGIN
const loginForm = document.querySelector('#login')
loginForm.addEventListener('submit', function(e){
  e.preventDefault();

  //get user info
  const email = loginForm['email'].value;
  const password = loginForm['password'].value;

  auth.signInWithEmailAndPassword(email, password)
  .then(function(cred){
    //alert("Hello: " + cred.user.displayName);
    location.href = "../Order/default.html";
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  });
})