function user(nom,prenom,pseudonyme,email,password){
    this.identifiants = [nom,prenom,pseudonyme]
    this.mail = email
    this.password = password
}

let users = []

let inputs = document.querySelectorAll("#input")