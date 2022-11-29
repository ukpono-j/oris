// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpSCbCwWT0IhSCEHGueXWxxqihc5HXdPg",
    authDomain: "new-oris.firebaseapp.com",
    databaseURL: "https://new-oris-default-rtdb.firebaseio.com",
    projectId: "new-oris",
    storageBucket: "new-oris.appspot.com",
    messagingSenderId: "503295160155",
    appId: "1:503295160155:web:328fb14bc98be176ec347e"
};
//initialize firebase
firebase.initializeApp(firebaseConfig);

//referrence your database
var userDetailsDb = firebase.database().ref('userDetails')

document.getElementById("userDetails").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getElementVal("name")
    var telephoneid = getElementVal("telephoneid")
    var interestTwoid = getElementVal("interestTwoid")
    var interestFourid = getElementVal("interestFourid")
    var carsid = getElementVal("carsid")

    saveDetails(name, telephoneid, interestFourid, interestTwoid, carsid)
    // console.log(name, telephoneid, interestFourid, interestTwoid); 

    // enable alert
    document.querySelector(".alert").style.display = "block";

    //remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none"
    }, 3000);

    document.getElementById("userDetails").reset()

}

    const saveDetails = (name, telephoneid, interestFourid, interestTwoid, carsid) => {
        var newUserDeatails = userDetailsDb.push();

        newUserDeatails.set({
            name: name,
            telephoneid: telephoneid,
            interestFourid: interestFourid,
            interestTwoid: interestTwoid,
            cars: carsid

        })
    }
    const getElementVal = (id) => {
        return document.getElementById(id).value;
    }

