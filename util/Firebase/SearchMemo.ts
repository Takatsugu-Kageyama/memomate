import { doc, collection, endAt, getDocs, orderBy, query, startAt } from "@firebase/firestore";
import { db } from "./firebaseConfig";
import { MemosType } from "../TypeDefinition/MemosSchema";

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
  const memoSnapshot = await getDocs(queryMemo)
  if (memoSnapshot) {
    const resultMemosData:Array<MemosType> = [];
    memoSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      resultMemosData.push(doc.data() as MemosType);
    }); 
    if (resultMemosData.length !== 0) {
      return resultMemosData;
    }
  }
};
