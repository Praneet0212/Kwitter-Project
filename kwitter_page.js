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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}