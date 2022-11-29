const formEl = document.querySelector('.main-form');

// formEl.addEventListener('submit',  event = >{
//     event.preventDefault()
// })

formEl.addEventListener("submit", event => {
    event.preventDefault()

    const formData = new FormData(formEl);
    const data = new URLSearchParams(formData)
    //    console.log(formData.get('username'))
    fetch('https://regress.in/api/users', {
        method: "POST",
        body: data
    }).then(res => res.json())
       
})