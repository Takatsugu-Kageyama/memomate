//import styles
import styles from "../styles/pages/CreateList.module.scss";
import React, { useCallback, useEffect, useState } from "react";
//import Chakra UI
import { Input } from "@chakra-ui/react";
import Picker from "emoji-picker-react";
import dynamic from "next/dynamic";
import SelectedMemo from "../components/CreateList/SelectedMemo";

const CreateList = () => {
  const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });
  //Create state
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [isOpenPiker, setIsOpenPiker] = useState(false);

  const onEmojiClick = (
    event: React.MouseEvent<Element, MouseEvent>,
    emojiObject: any
  ) => {
    event.stopPropagation();
    setChosenEmoji(emojiObject);
    setIsOpenPiker(false);
  };
  const onClosePicker = useCallback(() => {
    setIsOpenPiker(false);
    document.removeEventListener("click", onClosePicker);
  }, []);
  const onOpenPicker = (e: React.MouseEvent<Element, MouseEvent>) => {
    setIsOpenPiker(true);
    document.addEventListener("click", onClosePicker);
    e.stopPropagation();
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("click", onClosePicker);
    };
  }, [onClosePicker]);

  return (
    <div className={styles.overall}>
      <div className={styles.upper}>
        {/*emoji area*/}
        <div className={styles.emojiArea} onClick={onOpenPicker}>
          {chosenEmoji ? (
            <span className={styles.emoji}>{chosenEmoji.emoji}</span>
          ) : (
            <img src="images/CreateList/non_icon.png" alt="" />
          )}
        </div>
        <div className={styles.picker}>
          {isOpenPiker ? (
            <div className={styles.emojiList}>
              <Picker onEmojiClick={onEmojiClick} />
            </div>
          ) : null}
        </div>
        {/*Tittle Area*/}
        <Input
          className={styles.titleInput}
          focusBorderColor="none"
          placeholder="タイトルを入力"
        />
      </div>
      <SelectedMemo />
    </div>
  );
};
export default CreateList;
