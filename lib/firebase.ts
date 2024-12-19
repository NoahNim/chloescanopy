import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebaseConfiguration from "@/config/firebaseConfiguration";

const app = initializeApp(firebaseConfiguration);
export const auth = getAuth(app);
export const db = getFirestore(app);