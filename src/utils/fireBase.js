// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  doc,
  updateDoc,
  setDoc,
  arrayUnion,
  getDoc,
  arrayRemove,
  getFirestore
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9T-BckJIlb-JG0cwm1U_cFc0xVpDnAt4",
  authDomain: "raffle-66529.firebaseapp.com",
  projectId: "raffle-66529",
  storageBucket: "raffle-66529.appspot.com",
  messagingSenderId: "162010313235",
  appId: "1:162010313235:web:c2ce85999766ff3cf205e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export async function docExist({ name, docId }) {
  const docRef = doc(db, name, docId);

  try {
    const docSnapshot = await getDoc(docRef);

    // Si el documento existe, retorna 'true', si no existe, retorna 'false'
    return docSnapshot.exists();
  } catch (error) {
    // Maneja errores durante la obtención del documento
    console.error("Error al obtener el documento:", error);
    // Retorna 'false' en caso de error para indicar que no existe
    return false;
  }
}

export const getData = async (raffleId) => {
  try {
    const docRef = doc(db, "raffle", raffleId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      // Si el documento existe, retorna el array 'recents'
      const userData = docSnapshot.data();
      return userData || [];
    } else {
      // Si el documento no existe, retorna un array vacío
      console.log("El documento no existe.");
      return [];
    }
  } catch (error) {
    // Maneja errores si ocurren durante el proceso de obtención de datos
    console.error("Error al obtener datos de Firestore:", error);
    return [];
  }
};
// FIN docExist  **