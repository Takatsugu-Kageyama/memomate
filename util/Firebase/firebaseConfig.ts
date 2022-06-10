import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from "@firebase/firestore";

//import type definition
import { MemoDataSchema } from "../TypeDefinition/firebaseSchema";
import { app } from "./firenaseInit";
import { FirebaseApp, getApp, getApps } from "@firebase/app";

// Initialize Firebase
const firebase: FirebaseApp = !getApps().length ? app : getApp();

//The function send memos data to database
export const sendMemoData = async (
  memo_title: string,
  memo_contents: string
) => {
  const db = getFirestore(firebase);
  // Add a new memo document with a generated id.
  //TODO modifier path to `user/${userId}`
  const userDocRef = doc(db, "user/nOOHV65WG5CVS074tQoH");
  //Add memo
  await addDoc(collection(userDocRef, "memo"), {
    memo_title: memo_title,
    memo_contents: memo_contents,
  });
};

//The function send memos list
export const sendMemoList = async () => {
  const db = getFirestore(firebase);
};
