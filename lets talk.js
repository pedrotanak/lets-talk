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
  
  userName = localStorage.getItem("userName");
  dataC=localStorage.getItem("dataC");
  document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";
  
  function addRoom() {
    roomName = document.getElementById("roomName").value;
  
    firebase.database().ref("/").child(roomName).update({
     acao: "adicionar nome de sala",
     criador:userName,
     data:dataC
    });
  
    localStorage.setItem("roomName", roomName);
    localStorage.setItem("criador", criador)
    window.location = "kwitterPage.html";
  }
  
  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        roomNames = childKey;
        dados=childSnapshot.val();
        console.log("Nome da Sala - " + roomNames);
        row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >criado por: "+dados.criador+" #" + roomNames + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
  }
  
  function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location = "index.html";
  }
  