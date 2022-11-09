import { collection, doc, serverTimestamp, setDoc, updateDoc, arrayUnion } from "@firebase/firestore";
import { MemoDataSchema } from "../TypeDefinition/firebaseSchema";
import { db } from "./firebaseConfig";
export const sendMemoData = async (title: string, contents: string, currentMemosId: string, selectedListId: string) => {
  //TODO modifier path to `user/${userId}`
  const userDocRef = doc(db, "user/nOOHV65WG5CVS074tQoH");
  let memosId = currentMemosId;
  const upDateTime = serverTimestamp();
  class Memo {
    memosId: string;
    title: string;
    contents: string;
    time: any;
    constructor(memosId: string, title: string, contents: string, time: any) {
      this.memosId = memosId;
      this.title = title;
      this.contents = contents;
      this.time = time;
    }
  }
  // Store the memo's ID:
  if (!memosId) {
    //If currentMemosId is empty, create new ID:
    memosId = doc(collection(userDocRef, "memo")).id;
  }
  const memoData = new Memo(memosId, title, contents, upDateTime);
  await setDoc(doc(userDocRef, "memo", currentMemosId), { memoData });
  if (!selectedListId) {
    const selectedListPath = doc(userDocRef, "memo", selectedListId);
    await updateDoc(selectedListPath, {
      lists_memo: arrayUnion({}),
      lists_upDate_time: serverTimestamp(),
    });
  }
  return memosId;
};
