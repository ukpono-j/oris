const formEl = document.querySelector('.main-form');

// formEl.addEventListener('submit',  event = >{
//     event.preventDefault()
// })

formEl.addEventListener("submit", event => {
    event.preventDefault()

    const formData = new FormData(formEl);
       console.log(formData.get('username'))
    // fetch()
})