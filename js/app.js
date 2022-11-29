// fetch("https://new-oris-default-rtdb.firebaseio.com")
// .then((resp)=>console.log(resp))
// .catch(err=>console.log(err))


const userName = document.querySelector("#name");
const telephone = document.querySelector("#telephoneid");
const cars = document.querySelector("#carsid");
const interestTwo = document.querySelector("#interestTwoId");
const submitButton = document.querySelector("#submit");

const receiver_name = document.querySelector(".receiver_name")
const receiver_telephone = document.querySelector(".receiver_telephone")
const receiver_cars = document.querySelector(".receiver_cars")
const receiver_interest = document.querySelector(".receiver_interest")



const data = {
    userName,
    telephone,
    cars,
    interestTwo,
}



submitButton.addEventListener("click", ()=>{

localStorage.setItem("userName", userName.value);
localStorage.setItem("telephone", telephone.value);
localStorage.setItem("cars",cars.value);
localStorage.setItem("interestTwo", interestTwo.value);





})



