const sortName = document.getElementById('sort-name')
const sortRate = document.getElementById('sort-rate')
const bodyTable = document.getElementById('body-table')
const form = document.getElementById('form-add-movie')
const inputName = document.getElementById('name-input')
const inputRate = document.getElementById('rate-input')
const validError = document.getElementById('valid-error')
const submitForm = document.getElementById('submit-form')

inputRate.addEventListener('input' , (e)=>{
    const number = Number(e.target.value)
        if (number > 5 || number < 0 || !number ) {
        inputRate.classList.add('error-input')
        validError.innerText = "please enter a valid number between 0 / 5"
        validError.style.color="red"
        submitForm.setAttribute('disabled' , true)
    }else{
        validError.innerText = ""
        submitForm.removeAttribute('disabled' )
        inputRate.classList.remove('error-input')
    }
})