{
  const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
  allRented = true
  books.forEach ( random => {
    if (random.rented == 0) {
      allRented = false
    }  
  })
  if (allRented) {
    console.log("Tous les livres ont été empruntés au moins une fois")
  }
  else {
    console.log("Au moins un livre n'a jamais été emprunté")
  }

  max = books[0].rented
  maxTitle = books[0].title
  books.forEach ( random => {
    if (random.rented > max) {
      max = random.rented
      maxTitle = random.title
    }
  })
  console.log("Le livre le plus emprunté est "+ maxTitle+ ". Il a été emprunté "+ max + " fois.")

  min = books[0].rented
  minTitle = books[0].title
  books.forEach ( random => {
    if (random.rented < max) {
      min = random.rented
      minTitle = random.title
    }
  })
  console.log("Le livre le moins emprunté est "+ minTitle+ ". Il a été emprunté "+ min + " fois.")

  books.forEach ( random => {
    if (random.id == 873495) {
      console.log (random.title + " est le livre avec l'id 873495")
    }
    if (random.id == 133712) {
      console.log (random.title + " est le livre avec l'id 133712 et va être supprimé du tableau ")
    }
    console.log(filteredBooks = books.filter(book => book.id !== 133712));
  })

  console.log(filteredBooks.sort((a,b) => a.title.localeCompare(b.title)))
  prompt("Fin du script_5")
}

