import { doc, collection, endAt, getDocs, orderBy, query, startAt } from "@firebase/firestore";
import { db } from "./firebaseConfig";

//The function search lists memo
export const searchMemo = async (value: string) => {
  //Define DB loot pass
  //TODO modifier path to `user/${userId}`
  const userDocRef = doc(db, "user/nOOHV65WG5CVS074tQoH");
  const queryMemo = query(
    collection(userDocRef, "memo"),
    orderBy("memos_title"),
    startAt(value),
    endAt(value + "\uf8ff")
  );
  const memoSnapshot = await getDocs(queryMemo);
  const resultMemosData: any = [];
  memoSnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    resultMemosData.push(doc.data());
  });
  if (resultMemosData.length !== 0) {
    return resultMemosData;
  }
};
