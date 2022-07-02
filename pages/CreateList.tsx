//import styles
import styles from "../styles/pages/CreateList.module.scss";
import React, {useCallback, useEffect, useState} from "react";
//import Chakra UI
import {Input} from "@chakra-ui/react";
import Picker from "emoji-picker-react";
import dynamic from "next/dynamic";
import SelectedMemo from "../components/CreateList/SelectedMemo";
import {useRouter} from "next/router";
import {EmojiSchema} from "../util/TypeDefinition/EmojiSchema";
import {createListDatabase, upDateListsIcon, upDateListsTitle} from "../util/Firebase/firebaseConfig";

const CreateList = () => {
    const Picker = dynamic(() => import("emoji-picker-react"), {ssr: false});

    //Create state
    const [chosenEmoji, setChosenEmoji] = useState<EmojiSchema | null >(null);
    const [isOpenPiker, setIsOpenPiker] = useState(false);
    const [listTile, setListTitle] = useState("");
    const [currentListId, setCurrentListId] = useState('');

    //Provide Emoji
    const onEmojiClick =   (
        event: React.MouseEvent<Element, MouseEvent>,
        emojiObject: EmojiSchema
    ) => {
        event.stopPropagation();
        setChosenEmoji(emojiObject);
        setIsOpenPiker(false);
        if (emojiObject.emoji != null) {
            upDateListsIcon(emojiObject.emoji, currentListId).then(null)
        }
    };
    //Define Modal
    const onClosePicker = useCallback(() => {
        setIsOpenPiker(false);
        document.removeEventListener("click", onClosePicker);
    }, []);

    const onOpenPicker = (e: React.MouseEvent<Element, MouseEvent>) => {
        setIsOpenPiker(true);
        {
            isOpenPiker ? setIsOpenPiker(false) : setIsOpenPiker(true);
        }
        document.addEventListener("click", onClosePicker);
        e.stopPropagation();
    };

    useEffect(() => {
        return () => {
            document.removeEventListener("click", onClosePicker);
        };
    }, [onClosePicker]);

    //Define function that connects to firebase

    //when user visits this page
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            if (router.pathname === "/CreateList") {
                console.log("Created New List Data base!!");
                createListDatabase().then(listId => setCurrentListId(listId));
            }
        };
        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    });

    //Database function
    const sendListTitle = () => {
        //TODO create function send data to firebase
        upDateListsTitle(listTile, currentListId).then(null);
    };

    return (
        <div className={styles.overall}>
            <div className={styles.upper}>
                {/*emoji area*/}
                <div className={styles.emojiArea} onClick={onOpenPicker}>
                    {chosenEmoji ? (
                        <span className={styles.emoji}>{chosenEmoji.emoji}</span>
                    ) : (
                        <img src="images/CreateList/non_icon.png" alt=""/>
                    )}
                </div>
                <div className={styles.picker}>
                    {isOpenPiker ? (
                        <div
                            className={styles.emojiList}
                            onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                                e.stopPropagation();
                            }}
                        >
                            <Picker onEmojiClick={onEmojiClick}/>
                        </div>
                    ) : null}
                </div>
                {/*Tittle Area*/}
                <Input
                    className={styles.titleInput}
                    focusBorderColor="none"
                    placeholder="タイトルを入力"
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                        e.preventDefault();
                        setListTitle(e.target.value);
                    }}
                    onBlur={sendListTitle}
                />
            </div>
            <SelectedMemo currentListId={currentListId}/>
        </div>
    );
};
export default CreateList;
