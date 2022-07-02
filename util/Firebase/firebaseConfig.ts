import {
    arrayUnion,
    collection,
    doc, endAt, getDocs,
    getFirestore, orderBy, query, serverTimestamp,
    setDoc, startAt, updateDoc, where
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
        const memosId = doc(collection(userDocRef, "memo")).id
        await setDoc(doc(userDocRef, "memo", memosId), {
            memos_id: memosId,
            memos_title: memo_title,
            memos_contents: memo_contents,
            memos_upDate_time: serverTimestamp()
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
        lists_upDate_time: serverTimestamp(),
        list_id: listCollectionId　//Document ID of current data
    });

    return listCollectionId;
};

//The function upDate memos list Title:
export const upDateListsTitle = async (title: string, id: string) => {
    const listsPath = doc(collection(userDocRef, 'list'), id);
    await updateDoc(listsPath, {
        lists_title: title,
        lists_upDate_time: serverTimestamp()
    });
}

//The function upDate memos lists icon:
export const upDateListsIcon = async (emoji: string, id: string) => {
    const listsPath = doc(collection(userDocRef, 'list'), id);
    await updateDoc(listsPath, {
        lists_emoji: emoji,
        lists_upDate_time: serverTimestamp()
    })
}

//The function search lists memo
export const searchMemo = async (value: string) => {
    const queryMemo = query(collection(userDocRef, "memo"), orderBy('memos_title'), startAt(value), endAt(value + '\uf8ff'));
    const memoSnapshot = await getDocs(queryMemo);
    const resultMemosData: any = [];
    memoSnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        resultMemosData.push(doc.data())
    });
    if (resultMemosData.length !== 0) {
        return resultMemosData
    }
}

//The function add the memo is selected by user to the list:
export const addListsMemo = async (memosId:string,listsId:string) => {
    const listsPath = doc(collection(userDocRef, 'list'), listsId);

    await updateDoc(listsPath, {
        lists_memo: arrayUnion(memosId),
        lists_upDate_time: serverTimestamp()
    });
}
