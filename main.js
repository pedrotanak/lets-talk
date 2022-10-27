const firebaseConfig = {
    apiKey: "AIzaSyDsd41rQb_nxndIjwebf9hIVcEmdIcrYZQ",
    authDomain: "lets-talk-17c0c.firebaseapp.com",
    databaseURL: "https://lets-talk-17c0c-default-rtdb.firebaseio.com",
    projectId: "lets-talk-17c0c",
    storageBucket: "lets-talk-17c0c.appspot.com",
    messagingSenderId: "454362534091",
    appId: "1:454362534091:web:b55817f5b5829de9b78b4e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
   userName=document.getElementById("userName").value;
   firebase.database().ref("/").child(userName).update({
       acao:"Novo Usuário",
       senha:document.getElementById("senha").value
   });
  }