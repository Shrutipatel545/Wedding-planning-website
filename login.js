const username=document.getElementById('username')
const email=document.getElementById('email')
const form=document.getElementById('form')

form.addEventListener('submit',(e) =>{
    let messages=[]
    if(username.value === '' || username.value == null){
        messages.push('name is requird')
    }
    
    if(messages.length >0){
        e.preventDefault()
        errorElement.innerText=messages.join(',')
    }
})