// alert("funziona?")

// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi, stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.


//Chiedi all'utente il cognome
var cognomePersona = prompt ("Inserisci il tuo cognome all'interno del box");
// console.log(cognomePersona);

// inseriscilo in un array con altri cognomi
var variCognomi = ["Alberti", "Rossi", "Grandi", "Baglioni", "Arrighi", "Rossi", "Genovesi", "Zoncoli", "Sampietri"];
// console.log(variCognomi);
variCognomi.push(cognomePersona);

//stampa la lista ordinata alfabeticaente.
variCognomi.sort()
console.log(variCognomi)


// Scrivi anche la posizione della lista in cui il nuovo utente si trova.
for (var i = 0; i < variCognomi.length; i++) {
  document.getElementById('lista_cognomi').innerHTML = 
  document.getElementById('lista_cognomi').innerHTML + "<li>" + variCognomi[i] + " " + (i+1) + "</li>"
}

document.getElementById('lista_cognomi').classList.add("list_style_none");
