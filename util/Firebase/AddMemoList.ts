import { arrayUnion, collection, doc, serverTimestamp, updateDoc,query } from "@firebase/firestore";
import { db } from "./firebaseConfig";

//The function add the memo is selected by user to the list:
export const addListsMemo = async (memosId: string, listsId: string) => {
  const userDocRef = doc(db, "user/nOOHV65WG5CVS074tQoH");
  const listsPath = doc(collection(userDocRef, "list"), listsId);

  await updateDoc(listsPath, {
    lists_memo: arrayUnion(memosId),
    lists_upDate_time: serverTimestamp(),
  });

  return memosId;
};

export const isMemoOnList = (memosId:string,listsId:string) => {
  const userDocRef = doc(db, "user/nOOHV65WG5CVS074tQoH");
  const listsPath = doc(collection(userDocRef, "list"), listsId);
  const queryMemos = query(
    collection(userDocRef, "List"),
  )
}
