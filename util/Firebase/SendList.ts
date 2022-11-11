import { collection, doc, setDoc } from "@firebase/firestore";
import { ListSchema } from "../TypeDefinition/ListSchema";
import { db } from "./firebaseConfig";

export const sendList = async (list: ListSchema, listId: string) => {
  //Define DB loot pass
  //TODO modifier path to `user/${userId}`
  const userDocRef = doc(db, "user/nOOHV65WG5CVS074tQoH");
  //Store memos list ID:
  let listCollectionId: string = "";

  if (!listId) {
    //If "listId" has not value
    listCollectionId = doc(collection(userDocRef, "list")).id;
    //Add lists id  to the list obj
    list.listsId = listCollectionId;
    await setDoc(doc(userDocRef, "list", listCollectionId), {
      title: list.title,
      emoji: list.emoji,
      memos: list.memos,
      favorite: list.favorite,
      listId: list.listsId,
    });
  } else {
    //If "listId" has value
    await setDoc(doc(userDocRef, "list", listId), {
      title: list.title,
      emoji: list.emoji,
      memos: list.memos,
      favorite: list.favorite,
      listId: list.listsId,
    });
  }

  return listCollectionId;
};
