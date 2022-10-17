import { collection, doc, serverTimestamp, setDoc } from "@firebase/firestore";
import { db } from "./firebaseConfig";
export const sendMemoData = async (memo_title: string, memo_contents: string) => {
  //TODO modifier path to `user/${userId}`
  const userDocRef = doc(db, "user/nOOHV65WG5CVS074tQoH");
  if (memo_title && memo_contents) {
    //Add memo
    const memosId = doc(collection(userDocRef, "memo")).id;
    await setDoc(doc(userDocRef, "memo", memosId), {
      memos_id: memosId,
      memos_title: memo_title,
      memos_contents: memo_contents,
      memos_upDate_time: serverTimestamp(),
    });
  }
};
