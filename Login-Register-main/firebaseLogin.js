import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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
const auth = getAuth(app);

// Funcție pentru autentificarea utilizatorilor
function loginUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Utilizatorul a fost autentificat cu succes
      const user = userCredential.user;
      alert('User logged in successfully!');
      // Poți adăuga aici cod pentru redirecționarea utilizatorului sau afișarea unui mesaj de succes
    })
    .catch((error) => {
      // Gestionează erorile
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Error: ' + errorMessage);
    });
}

window.loginUser = loginUser;

