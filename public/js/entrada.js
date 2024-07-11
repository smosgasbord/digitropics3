var fruits = ["cuidensecompitas"]

function onCheck(form) {
  if (fruits.indexOf(form.pass.value) !== -1) {

       alert("Haciendo la conectasión")
       console.log('adelante')
       return true

     } else {

       alert("Revisa la contraseña")
       return false

     }

   }