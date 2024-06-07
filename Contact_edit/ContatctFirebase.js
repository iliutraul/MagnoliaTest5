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

// Inițializează Firebase
const app = initializeApp(firebaseConfig);

// Obține o referință către baza de date Firestore
const db = getFirestore(app);

// Găsește formularul de contact
// Găsește formularul de contact
const form = document.querySelector('form');

// Adaugă un eveniment de ascultare pentru trimiterea formularului
form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Previne trimiterea formularului

    // Obține valorile din formular
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    // Verifică dacă toate câmpurile sunt completate
    if (name && email && message) {
        // Trimite datele la Firestore
        try {
            // Adaugă un document în colecția "mesaje"
            await addDoc(collection(db, 'mesaje'), {
                nume: name,
                email: email,
                mesaj: message
            });

            // Afisează un mesaj de succes
            alert('Mesajul tău a fost trimis cu succes!');

            // Șterge conținutul formularului
            form.reset();
        } catch (error) {
            console.error('Eroare la trimiterea mesajului:', error);
            alert('A apărut o eroare. Te rugăm să încerci din nou mai târziu.');
        }
    } else {
        // Afisează un mesaj de eroare dacă nu sunt completate toate câmpurile
        alert('Toate câmpurile trebuie completate!');
    }
});
