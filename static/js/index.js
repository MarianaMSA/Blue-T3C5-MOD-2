let inputNome = document.querySelector('#nome') 
let inputEmail = document.querySelector('#email') 
let textareaMensagem = document.querySelector('#mensagem') 
let botaoEnviar = document.querySelector('#enviar') 
let nomeOk = false 
let emailOk = false 
let msgOk = false 
botaoEnviar.disabled = true 


inputNome.addEventListener('keydown', () => { 
   if(inputNome.value.length < 2){
      inputNome.style.borderColor = 'red'
      nomeOk = false
   } else {
      inputNome.style.borderColor = 'green' 
      nomeOk = true
   }

   if(inputNome.value == '' || inputNome.value == undefined || inputNome.value == null) {
      inputNome.style.borderColor = '#ccc'
   }

   
   if (nomeOk && emailOk && msgOk) {
      botaoEnviar.disabled = false
   } else {
      botaoEnviar.disabled = true
   }

})



inputEmail.addEventListener('keyup', () => {
   if(inputEmail.value.indexOf('@') == -1 || inputEmail.value.indexOf('.') == -1){
      inputEmail.style.borderColor = 'red'
      emailOk = false
   } else {
      inputEmail.style.borderColor = 'green'
      emailOk = true
   }  


   if (nomeOk && emailOk && msgOk) {
      botaoEnviardisabled = false
   } else { 
      botaoEnviar.disabled = true
   }
})


textareaMensagem.addEventListener('keyup', ()=>{
   
   if(textareaMensagem.value.length > 100){
      textareaMensagem.style.borderColor = 'red' 
      msgOk = false
   } else {
      textareaMensagem.style.borderColor = 'green' 
      msgOk = true
   }

  
   if (nomeOk && emailOk && msgOk) {
      botaoEnviar.disabled = false
   } else { 
      botaoEnviar.disabled = true
   }
})


botaoEnviar.addEventListener('click', () => {
   let carregamento = document.querySelector('#carregamento')
   carregamento.style.display = 'flex'
 
   let form = document.querySelector('form')
   form.style.display = 'none'
})


