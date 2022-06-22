import {
    addDoc,
    collection,
    doc,
    getFirestore,
    setDoc, updateDoc,
} from "@firebase/firestore";

//import type definition
import {app} from "./firenaseInit";
import {FirebaseApp, getApp, getApps} from "@firebase/app";

// Initialize Firebase
const firebase: FirebaseApp = !getApps().length ? app : getApp();

//FireStore Settings
const db = getFirestore(firebase);

//Define DB loot pass
//TODO modifier path to `user/${userId}`
const userDocRef = doc(db, "user/nOOHV65WG5CVS074tQoH");

//The function send memos data to database
export const sendMemoData = async (
    memo_title: string,
    memo_contents: string
) => {
    if (memo_title && memo_contents) {
        //Add memo
        await addDoc(collection(userDocRef, "memo"), {
            memo_title: memo_title,
            memo_contents: memo_contents,
        });
    }
};

//The function send memos list
export const createListDatabase = async () => {
    //Variable for obtaining a random document ID in advance
    const listCollectionId = doc(collection(userDocRef, "list")).id;
    await setDoc(doc(userDocRef, "list", listCollectionId), {
        lists_emoji: "",
        lists_title: "",
        lists_memo: [],
        list_id: listCollectionId　//Document ID of current data
    });

    return listCollectionId;
};

//The function upDate memos list Title

export const upDateListsTitle = async (title: string, id: string) => {
    const listsPath = doc(collection(db, 'list'), id);
    await setDoc(listsPath, {
        lists_title: title
    });
}