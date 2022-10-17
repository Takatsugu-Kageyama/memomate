import {
  arrayUnion,
  collection,
  doc,
  endAt,
  getDocs,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  startAt,
  updateDoc,
  where,
} from "@firebase/firestore";

//import type definition
import { app } from "./firenaseInit";
import { FirebaseApp, getApp, getApps } from "@firebase/app";

// Initialize Firebase
const firebase: FirebaseApp = !getApps().length ? app : getApp();

//FireStore Settings
export const db = getFirestore(firebase);

//Define DB loot pass
//TODO modifier path to `user/${userId}`
const userDocRef = doc(db, "user/nOOHV65WG5CVS074tQoH");

//The function upDate memos list Title:
export const upDateListsTitle = async (title: string, id: string) => {
  const listsPath = doc(collection(userDocRef, "list"), id);
  await updateDoc(listsPath, {
    lists_title: title,
    lists_upDate_time: serverTimestamp(),
  });
};

//The function upDate memos lists icon:
export const upDateListsIcon = async (emoji: string, id: string) => {
  const listsPath = doc(collection(userDocRef, "list"), id);
  await updateDoc(listsPath, {
    lists_emoji: emoji,
    lists_upDate_time: serverTimestamp(),
  });
};

//The function upDate memos lists favorite:
export const upDateListsFavorite = async (favorValue: boolean, id: string) => {
  const listsPath = doc(collection(userDocRef, "list"), id);
  await updateDoc(listsPath, {
    lists_favorite: favorValue,
    lists_upDate_time: serverTimestamp(),
  });
};

//The function add the memo is selected by user to the list:
export const addListsMemo = async (memosId: string, listsId: string) => {
  const listsPath = doc(collection(userDocRef, "list"), listsId);

  await updateDoc(listsPath, {
    lists_memo: arrayUnion(memosId),
    lists_upDate_time: serverTimestamp(),
  });

  return memosId;
};

//The function get all memos on databse:

export const getAllMemo = async () => {
  const queryAllMemo = query(collection(userDocRef, "memo"), orderBy("lists_upDate_time"));
  const allMemoSnapshot = await getDocs(queryAllMemo);
  const allMemoData: any[] = [];
  allMemoSnapshot.forEach((doc) => {
    allMemoData.push(doc.data());
  });

  return allMemoData;
};
