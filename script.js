// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6yjOF22mbdMwTHWJjGic9y_hMhh8Gx30",
    authDomain: "fir-project-cb35a.firebaseapp.com",
    databaseURL: "https://fir-project-cb35a-default-rtdb.firebaseio.com",
    projectId: "fir-project-cb35a",
    storageBucket: "fir-project-cb35a.appspot.com",
    messagingSenderId: "725110036136",
    appId: "1:725110036136:web:f65dc846214ca4ef4c549d",
    measurementId: "G-V1DLK5JJH6"
  };
  firebase.initializeApp(firebaseConfig);

var score = 0;
function addScore(){
    score =score+1;
    document.getElementById("score").innerHTML = score;
}
function save(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        score : score,
        purpose : "adding_score"
    });
}
