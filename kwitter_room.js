var firebaseConfig = {
    apiKey: "AIzaSyBPBjvbO8qdrzss_0RncYYgYPTtHnC8jbE",
    authDomain: "kwitter-project-7c728.firebaseapp.com",
    databaseURL: "https://kwitter-project-7c728-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-7c728",
    storageBucket: "kwitter-project-7c728.appspot.com",
    messagingSenderId: "1001453503646",
    appId: "1:1001453503646:web:b1aa094feee2ded540278f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id='"+ Room_names+"' onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}