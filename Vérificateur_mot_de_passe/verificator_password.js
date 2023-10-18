let valider = document.querySelector("#valider")
valider.style.display = "none"

let majuscule = document.querySelector("#majuscule")
let minuscule = document.querySelector("#minuscule")
let chiffre = document.querySelector("#chiffre")
let caracteres = document.querySelector("#caractères")
let speciaux = document.querySelector("#speciaux")


let Test = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{12,})")

password = document.querySelector("#password")
// console.log(password)
let hasMaj = new RegExp("(?=.*[A-Z])")
let hasMin = new RegExp("(?=.*[a-z])")
let hasNum = new RegExp("(?=.*[0-9])")
let hasSpecialCars = new RegExp("(?=.*[^A-Za-z0-9])")
let hasCars = new RegExp("(?=.{12,})")


password.addEventListener("input",() => {
    console.log(password)
    if(hasMaj.test(password.value)){
        majuscule.classList.add("has")
    }
    else{
        majuscule.classList.remove("has")
    }
    if(hasMin.test(password.value)){
        minuscule.classList.add("has")
    }
    else{
        minuscule.classList.remove("has")
    }
    if(hasNum.test(password.value)){
        chiffre.classList.add("has")
    }
    else{
        chiffre.classList.remove("has")
    }
    if(hasCars.test(password.value)){
        caracteres.classList.add("has")
    }
    else{
        caracteres.classList.remove("has")
    }
    if(hasSpecialCars.test(password.value)){
        speciaux.classList.add("has")
    }
    else{
        speciaux.classList.remove("has")
    }
    if(Test.test(password.value)){
        valider.style.display = "block"
    }
})