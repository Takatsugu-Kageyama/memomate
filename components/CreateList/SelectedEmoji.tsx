//import Emoji-Piker
import Picker from "emoji-picker-react";
//import React
import React, {useEffect, useState} from "react";
import dynamic from "next/dynamic";
//import styles
import styles from "../../styles/components/CerateList/SelectedEmoji.module.scss";

const SelectedEmoji = () => {
    //Define Documentation
    const Picker = dynamic(() => import("emoji-picker-react"), {ssr: false});
    //Define State
    const [displayEmojiPicker, setDisplayEmojiPicker] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    //Get emoji is user selected
    const onEmojiClick = (
        event: React.MouseEvent<Element, MouseEvent>,
        emojiObject: any
    ) => {
        event.preventDefault();
        setChosenEmoji(emojiObject);
        setDisplayEmojiPicker(false);
    };

    const onDisplayEmojiPicker = () => {
        setDisplayEmojiPicker(true);
    };

    // @ts-ignore
    return (
        <>
            <div className={styles.overall} onClick={onDisplayEmojiPicker}>
                <div className={styles.emojiArea}>
                    {chosenEmoji ? (
                        <span className={styles.emoji}>{chosenEmoji.emoji}</span>
                    ) : (
                        <img src="images/CreateList/non_icon.png" alt=""/>
                    )}
                </div>
            </div>
            <div className={styles.picker}>
                {displayEmojiPicker ? (
                    <div className={styles.emojiList}>
                        <Picker onEmojiClick={onEmojiClick}/>
                    </div>
                ) : null}
            </div>
        </>
    );
};
export default SelectedEmoji;
