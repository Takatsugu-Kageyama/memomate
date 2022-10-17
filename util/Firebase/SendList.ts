import { collection, doc, serverTimestamp, setDoc } from "@firebase/firestore";
import { db } from "./firebaseConfig";

export const sendList = async () => {
  //Define DB loot pass
  //TODO modifier path to `user/${userId}`
  const userDocRef = doc(db, "user/nOOHV65WG5CVS074tQoH");
  //Variable for obtaining a random document ID in advance
  const listCollectionId = doc(collection(userDocRef, "list")).id;
  await setDoc(doc(userDocRef, "list", listCollectionId), {
    lists_emoji: "",
    lists_title: "",
    lists_memo: [],
    lists_favorite: false,
    lists_upDate_time: serverTimestamp(),
    list_id: listCollectionId, //Document ID of current data
  });

  return listCollectionId;
};
