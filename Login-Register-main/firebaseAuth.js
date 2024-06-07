import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

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

// Referință la serviciile de autentificare și bază de date
const auth = getAuth(app);
const database = getDatabase(app);

// Funcție pentru înregistrarea utilizatorilor
function registerUser() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const phone = document.getElementById('phone').value;

  // Înregistrează utilizatorul cu Firebase Authentication
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Obține user-ul înregistrat
      const user = userCredential.user;

      // Salvează informațiile suplimentare în Realtime Database
      set(ref(database, 'users/' + user.uid), {
        name: name,
        email: email,
        phone: phone
      });

      // Poți adăuga aici cod pentru a redirecționa utilizatorul sau a afișa un mesaj de succes
      alert('User registered successfully!');
    })
    .catch((error) => {
      // Gestionează erorile
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Error: ' + errorMessage);
    });
}

// Exportă funcția pentru a fi utilizată în altă parte
export { registerUser };
