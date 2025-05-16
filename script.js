function generatePassword() {
 const lowercase = 'abcdefghijklmnopqrstuvwxy';
 const uppercase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const numbers = '0123456789'
 const symbols ='!@#$%^&*()_+-=[]{]|;:,.<>?';


let charset ='';
if (document.getElementById('lowercase').checked){
    charset += lowercase;
}
if (document.getElementById('uppercase').checked){
    charset += uppercase;
}
if (document.getElementById('numbers').checked){
    charset += numbers;
}
if (document.getElementById('symbols').checked){
    charset += symbols;
}
if(charset.length === 0){
    alert('Veuillez séléctionner au moins un type de caractère.');
    return;
}
const length = parseInt(document.getElementById('length').value);
if (length < 4 || length > 80000){
    alert('La longueur doit être entre 4 et 80000 caratères.');
    return;
}
let password ='';
for (let i = 0; i < length; i++){
    const randomIndex =Math.floor(Math.random()* charset.length);
    password += charset[randomIndex];
}
document.getElementById('password').value = password;
}
 function copyPassword(){
    const password = document.getElementById('password');
    if(password.value){
        navigator.clipboard.writeText(password.value).then(() => {
            alert('Mot de passe copié dans le presse-papiers !');
            }).catch(() => {
                alert('échec de la copie du mot de passe.')
            });
    }else{
        alert('Aucun mot de passe à copier !')
    }
        
   
    }
 
