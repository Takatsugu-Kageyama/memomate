import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from "@firebase/firestore";

//import type definition
import { app } from "./firenaseInit";
import { FirebaseApp, getApp, getApps } from "@firebase/app";

// Initialize Firebase
const firebase: FirebaseApp = !getApps().length ? app : getApp();

//FireStore Settings
const db = getFirestore(firebase);

//Define DB loot pass
//TODO modifier path to `user/${userId}`
const userDocRef = doc(db, "user/nOOHV65WG5CVS074tQoH");

//The function send memos data to database
export const sendMemoData = async (
  memo_title: string,
  memo_contents: string
) => {
  if (memo_title && memo_contents) {
    //Add memo
    await addDoc(collection(userDocRef, "memo"), {
      memo_title: memo_title,
      memo_contents: memo_contents,
    });
  }
};

//The function send memos list
export const createListDatabase = async () => {
  await addDoc(collection(userDocRef, "list"), {
    lists_emoji: "",
    lists_title: "",
    lists_memo: [],
  });
};
