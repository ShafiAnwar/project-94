var firebaseConfig = {
      apiKey: "AIzaSyDO_YfpNNqO9_dDEoCbYLGoQGoZhrsFwu4",
      authDomain: "kwitter-8358a.firebaseapp.com",
      databaseURL: "https://kwitter-8358a-default-rtdb.firebaseio.com",
      projectId: "kwitter-8358a",
      storageBucket: "kwitter-8358a.appspot.com",
      messagingSenderId: "944199634166",
      appId: "1:944199634166:web:889978d16983487c7630d7"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
