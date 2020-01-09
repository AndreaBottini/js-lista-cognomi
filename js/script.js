// alert("funziona?")

// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi, stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.


//Chiedi all'utente il cognome
var cognomePersona = prompt ("Inserisci il tuo cognome all'interno del box");
cognomePersona = cognomePersona.charAt(0).toUpperCase() + cognomePersona.slice(1);
// console.log(cognomePersona);

// inseriscilo in un array con altri cognomi
var variCognomi = ["Alberti", "Rossi", "Grandi", "Baglioni", "Arrighi", "Camilli", "Genovesi", "Zoncoli", "Sampietri"];
// console.log(variCognomi);
variCognomi.push(cognomePersona);

//stampa la lista ordinata alfabeticaente.
variCognomi.sort()
console.log(variCognomi)


// Scrivi anche la posizione della lista in cui il nuovo utente si trova.
for (var i = 0; i < variCognomi.length; i++) {
  document.getElementById('lista_cognomi').innerHTML =
  document.getElementById('lista_cognomi').innerHTML + "<li>" + variCognomi[i] + "</li>"
}

var numeroPosizione = (variCognomi.indexOf(cognomePersona) + 1);
document.getElementById('posizione').innerHTML = numeroPosizione;

//Eliminazione punti elenco
document.getElementById('lista_cognomi').classList.add("list_style_none");
