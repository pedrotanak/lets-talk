const firebaseConfig = {
  apiKey: "AIzaSyCDzbg0Dd8_O0yJ_ifz3b0U3HOiYCX1epk",
  authDomain: "site-social-ef5bd.firebaseapp.com",
  databaseURL: "https://site-social-ef5bd-default-rtdb.firebaseio.com",
  projectId: "site-social-ef5bd",
  storageBucket: "site-social-ef5bd.appspot.com",
  messagingSenderId: "1034806697829",
  appId: "1:1034806697829:web:4643ad37ec61c37f208b8c"
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
