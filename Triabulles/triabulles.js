var tableau = []

for(var i = 0; i <20; i++){
    var valeur = Math.floor(Math.random() * 101)
    tableau.push(valeur)
}
console.log(tableau)

let pivot = 0
// let tab = []
for(i=0; i<tableau.length-1; i++){
    for(j=0; j<tableau.length-1; j++){
        if(tableau[j]<=tableau[j+1]){
        }
        else{
            pivot = tableau[j]
            tableau[j] = tableau[j+1]
            tableau[j+1] = pivot
        }
    }
}

console.log(tableau)

// Méthode du professeur:
let permutation;
do {
    permutation = false;

 for(let i =0; i< toolbar.length; i++) {
    if (tab[i+1] < tab[i]){
        var tmp = tab[i];
        tab[i] = tab[i+ 1];
        tab[i+1] = tmp;
    }
 }
} while(permutation);

console.log(tab);
// Méthode du professeur:


