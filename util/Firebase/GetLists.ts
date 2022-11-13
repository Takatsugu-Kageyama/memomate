import { doc, collection, getDocs, query, orderBy } from "@firebase/firestore";
import { ListSchema } from "../TypeDefinition/ListSchema";
import { db } from "./firebaseConfig";

//simple function
export const getLists = async () => {
  //TODO modifier path to `user/${userId}`
  const userDocRef = doc(db, "user/nOOHV65WG5CVS074tQoH");
  const queryList = query(collection(userDocRef, "list"));
  const listsSnapShot = await getDocs(queryList);
  const result: Array<ListSchema> = [];
  if (listsSnapShot) {
    listsSnapShot.forEach((doc) => {
      result.push(doc.data() as ListSchema);
    });
  }

  return result;
};

//sort by resent
export const getResentGetList = async () => {
  //TODO modifier path to `user/${userId}`
  const userDocRef = doc(db, "user/nOOHV65WG5CVS074tQoH");
  const queryList = query(collection(userDocRef, "list"),orderBy(""));
  const listsSnapShot = await getDocs(queryList);
};
