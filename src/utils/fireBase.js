// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
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
    console.error('Error al obtener el documento:', error);
    // Retorna 'false' en caso de error para indicar que no existe
    return false;
  }
}

export const getData = async (raffleId) => {
  try {
    const docRef = doc(db, 'raffle', raffleId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      // Si el documento existe, retorna el array 'recents'
      const userData = docSnapshot.data();
      return userData || [];
    } else {
      // Si el documento no existe, retorna un array vacío
      console.log('El documento no existe.');
      return [];
    }
  } catch (error) {
    // Maneja errores si ocurren durante el proceso de obtención de datos
    throw error;
  }
};
// FIN docExist  **
