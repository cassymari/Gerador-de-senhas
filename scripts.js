const password = document.getElementById("password")
const generate = document.getElementById("generate")
const copy = document.getElementById("copy")

const length = document.getElementById("length")
const lengthValue = document.getElementById("lengthValue")

const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")

const strengthBar = document.getElementById("strengthBar")

length.addEventListener("input", () => {
lengthValue.innerText = length.value
})

function gerarSenha(){

let chars = ""

if(uppercase.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
if(lowercase.checked) chars += "abcdefghijklmnopqrstuvwxyz"
if(numbers.checked) chars += "0123456789"
if(symbols.checked) chars += "!@#$%&*"

let senha = ""

for(let i = 0; i < length.value; i++){
senha += chars.charAt(Math.floor(Math.random() * chars.length))
}

password.value = senha

verificarForca(senha)

}

function verificarForca(senha){

let forca = 0

if(senha.length >= 8) forca++
if(/[A-Z]/.test(senha)) forca++
if(/[0-9]/.test(senha)) forca++
if(/[!@#$%&*]/.test(senha)) forca++

const cores = ["red","orange","yellow","green"]

strengthBar.style.width = (forca * 25) + "%"
strengthBar.style.background = cores[forca-1] || "red"

}

copy.addEventListener("click", () => {

navigator.clipboard.writeText(password.value)

alert("Senha copiada!")

})

generate.addEventListener("click", gerarSenha)