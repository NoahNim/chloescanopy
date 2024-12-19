import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebaseConfiguration from "@/config/firebaseConfiguration";

const app = initializeApp(firebaseConfiguration);
export const db = getFirestore(app);
export const auth = getAuth(app);