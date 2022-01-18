
var firebaseConfig = {
      apiKey: "AIzaSyBUUWXZ-ZBKQRYI4yY4tdF3Xm7Q5glN8PQ",
  authDomain: "kwitter-3f584.firebaseapp.com",
  databaseURL: "https://kwitter-3f584-default-rtdb.firebaseio.com",
  projectId: "kwitter-3f584",
  storageBucket: "kwitter-3f584.appspot.com",
  messagingSenderId: "987372899693",
  appId: "1:987372899693:web:136a8fbfdb39d3261d1e64"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    function addRoom()
{
      room_name = document.getElementById("add_room_input").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;     
      //End code
      });});}
getData();



function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"

}
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html"
}