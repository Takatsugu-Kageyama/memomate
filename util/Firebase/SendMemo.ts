import { collection, doc, serverTimestamp, setDoc, updateDoc, arrayUnion } from "@firebase/firestore";
import { db } from "./firebaseConfig";
export const sendMemoData = async (title: string, contents: string, currentMemosId: string, selectedListId: string) => {
  //TODO modifier path to `user/${userId}`
  const userDocRef = doc(db, "user/nOOHV65WG5CVS074tQoH");
  let memosId = currentMemosId;
  class Memo {
    memosId: string;
    title: string;
    contents: string;
    constructor(memosId: string, title: string, contents: string) {
      this.memosId = memosId;
      this.title = title;
      this.contents = contents;
    }
  }
  // Store the memo's ID:
  if (!memosId) {
    //If currentMemosId is empty, create new ID:
    memosId = doc(collection(userDocRef, "memo")).id;
  }
  //Create memo's object:
  const memoData = new Memo(memosId, title, contents);
  if (selectedListId) {
    const selectedListPath = doc(userDocRef, "list", selectedListId);
    await updateDoc(selectedListPath, {
      "list.memos": arrayUnion({
        memos_contents: memoData.contents,
        memos_id: memoData.memosId,
        memos_title: memoData.title,
        memos_upDate_time:serverTimestamp(),
      }),
    });
  } else {
    await setDoc(doc(userDocRef, "memo", memosId), {
      memos_contents: memoData.contents,
      memos_id: memoData.memosId,
      memos_title: memoData.title,
      memos_upDate_time: serverTimestamp(),
    });
  }
  return memosId;
};
