// Importul modulelor Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";


// Configurația Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA7IownK2gtkVQ_b88zh9CbtjKreBfXM14",
    authDomain: "test-c5116.firebaseapp.com",
    databaseURL: "https://test-c5116-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-c5116",
    storageBucket: "test-c5116.appspot.com",
    messagingSenderId: "837255892064",
    appId: "1:837255892064:web:52dcc82afa70c4ca644705"
  };
// Initializează Firebase
const app = initializeApp(firebaseConfig);

// Referință la serviciile de autentificare și bază de date


// Funcția pentru salvarea rezervării în baza de date Firebase
// Funcția pentru salvarea rezervării în baza de date Firebase
function saveReservation(date, time, phoneNumber, terrainType) {
    // Obține o referință către Firestore
    const db = getFirestore(app);

    // Creează o referință către colecția "rezervari" în Firestore
    const reservationsRef = collection(db, 'rezervari');

    // Adaugă un nou document cu datele rezervării
    addDoc(reservationsRef, {
        date: date,
        time: time,
        phoneNumber: phoneNumber,
        terrainType: terrainType
    })
    .then((docRef) => {
        console.log('Rezervare salvată cu succes în Firestore cu ID-ul:', docRef.id);
    })
    .catch((error) => {
        console.error('Eroare la salvarea rezervării în Firestore:', error);
    });
}

// Gestionarea evenimentului de trimitere a formularului de rezervare
document.querySelector('button[type="button"]').addEventListener('click', function() {
    event.preventDefault(); // Evită trimiterea formularului

    // Obține valorile din formular
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var terrainType = document.getElementById('terrainType').value;

    // Verifică dacă toate câmpurile sunt completate
    if (date && time && phoneNumber && terrainType) {
        // Afișează valorile în consolă
        console.log('Data:', date);
        console.log('Ora:', time);
        console.log('Număr de telefon:', phoneNumber);
        console.log('Tip teren:', terrainType);

        // Salvează datele în baza de date Firebase
        saveReservation(date, time, phoneNumber, terrainType);
    } else {
        // Afișează un mesaj de eroare dacă nu sunt completate toate câmpurile
        console.error('Toate câmpurile trebuie completate!');
    }
});

// Obține data curentă și setează data minimă pentru câmpul de selectare a datei
var dateInput = document.getElementById('date');
var currentDate = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', currentDate);
