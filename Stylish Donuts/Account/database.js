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
  firebase.initializeApp(firebaseConfig);

  // Reference for database
  var stylishDB = firebase.database().ref("/customer/");

  // Get signUp form
  document.getElementById("signUp").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    var firstName = getElementVal('firstname');
    var lastName = getElementVal('lastname');
    var streetAddress = getElementVal('streetaddress');
    var city = getElementVal('city');
    var state = getElementVal('state');
    var zipCode = getElementVal('zipcode');
    var phoneNo = getElementVal('phonenumber');
    var email = getElementVal('email');
    var username = getElementVal('username');
    var password = getElementVal('password');
    var passConfirm = getElementVal('password-confirm');

    saveUserInfo(firstName, lastName, streetAddress, city, state, zipCode, phoneNo, email, username, password, passConfirm);
  }

  const saveUserInfo = function(first, last, street, city, state, zip, phone, email, username, password, passConfirm){
    var newUser = stylishDB.push();

    newUser.set({
        userId: username,
        firstname: first, 
        lastname: last,
        streetaddress: street,
        city: city,
        state: state,
        zipcode: zip,
        phonenumber: phone,
        email: email,
        password: password,
        passwordconfirm: passConfirm
    });
  };

  const getElementVal = function(id){
    return document.getElementById(id).value;
  };