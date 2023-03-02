{
  let nbTotal = parseInt(prompt("Combien d'etages veux tu pour la pyramide ? "))
  let etage = 1
  while (etage <= nbTotal ) {
    console.log(" ".repeat(nbTotal-etage)+"#".repeat(etage))
    etage++
  }
}

