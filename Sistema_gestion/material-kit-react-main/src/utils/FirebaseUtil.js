//funciones comunes para el resto del proyecto
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import{ collection,deleteDoc,doc,getDoc,getDocs,getFirestore,setDoc} from "firebase/firestore";
//import { uuid } from 'uuidv4';
import uuid from "react-uuid";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export function firebaseConfig(){
const config = {
  apiKey: "AIzaSyDlMTp4wg3zKyr83etB5nI4kxDrmU5fdXI",
  authDomain: "sistema-af534.firebaseapp.com",
  projectId: "sistema-af534",
  storageBucket: "sistema-af534.appspot.com",
  messagingSenderId: "858141621813",
  appId: "1:858141621813:web:1f61061dbb5962f2a1bb7c",
  measurementId: "G-QBW1Q7JS3Z"
};

// Initialize Firebase
const app = initializeApp(config);
//const analytics = getAnalytics(app);
}

export function firebaseRegistrarUsuario(email,password){
  createUserWithEmailAndPassword(getAuth(),email,password)
  .then(credenciales=>{
    //credenciales.user.
  })

}

export async function firebaseIniciarSesion(email,password){
  try{
    let credenciales= await signInWithEmailAndPassword(getAuth(),email,password)
    //credenciales.user
  }catch(e){
    return false;
  }
 
  return true;
}

export async function firebaseBuscar(coleccionABuscar){
  let listado=[];
  let consulta=collection(getFirestore(),coleccionABuscar);
  let resultado= await getDocs(consulta);
  resultado.forEach(documento=>{
    
    let objeto=documento.data(); //trae un obj con info(email, phone etc)
    objeto.id=documento.id; //trae el id del cliente;insertar el id
    listado.push(objeto);
  });
  return listado;
}

export function firebaseCrear(coleccion,objeto){

  objeto.id=uuid();
  let referencia=doc(getFirestore(),coleccion,objeto.id);
  
  setDoc(referencia,objeto);
  
}

export async function firebaseEliminar(coleccion,id){
  await deleteDoc(doc(getFirestore(),coleccion, id));
}