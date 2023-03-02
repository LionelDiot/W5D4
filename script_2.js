{ let nb = parseInt(prompt("Quel est ton nombre"))
let fac = 1

while (nb > 0) {
fac = fac * nb
nb -= 1
}
console.log("Le factoriel de ton nombre vaut " + fac )
}
