//import styles
import styles from "../styles/pages/CreateList.module.scss";
import React, { useCallback, useEffect, useState } from "react";
//import Chakra UI
import { Input } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import SelectedMemo from "../components/CreateList/SelectedMemo";
import { upDateListsFavorite, upDateListsIcon } from "../util/Firebase/firebaseConfig";
//import TypeDefinition
import { ListSchema } from "../util/TypeDefinition/ListSchema";
import { EmojiSchema } from "../util/TypeDefinition/EmojiSchema";
//import GUI
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const CreateList = () => {
  const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });
  //! Per lists detail state:
  //store lists title
  const [listsTitle, setListsTitle] = useState<string | null>();
  //store Emojis object:
  const [chosenEmoji, setChosenEmoji] = useState<EmojiSchema | null>(null);
  //store favorite:
  const [isFavorite, setIsFavorite] = useState(false);

  //!store Lists contents:
  const [listContents, setListsContents] = useState<ListSchema>({
    title: null,
    emoji: chosenEmoji,
    memos: [],
    favorite: isFavorite,
  });

  console.log(listContents);

  const [currentListId, setCurrentListId] = useState("");
  //check whether Piker is open or not:
  const [isOpenPiker, setIsOpenPiker] = useState(false);
  //Provide Emoji
  const onEmojiClick = (event: React.MouseEvent<Element, MouseEvent>, emojiObject: EmojiSchema) => {
    event.stopPropagation();
    setListsContents({ ...listContents, emoji: emojiObject });
    setChosenEmoji(emojiObject);
    setIsOpenPiker(false);
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

  // const testObj: {
  //   title: string;
  //   array: Array<{ title: string; contents: string }>;
  // } = {
  //   title: "test",
  //   array: [
  //     {
  //       title: "こんにちは",
  //       contents: "this is test.",
  //     },
  //   ],
  // };
  // console.log(testObj.array[0]);

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
            <div
              className={styles.emojiList}
              onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                e.stopPropagation();
              }}
            >
              <Picker onEmojiClick={onEmojiClick} />
            </div>
          ) : null}
        </div>
        {/*Tittle Area*/}
        <div className={styles.titleArea}>
          <Input
            className={styles.titleInput}
            focusBorderColor="none"
            placeholder="タイトルを入力"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.preventDefault();
              // setListTitle(e.target.value);
            }}
          />
          <button
            className={styles.favorBtn}
            onClick={() => {
              if (!isFavorite) {
                setIsFavorite(true);
                // upDateListsFavorite(true, currentListId);
              } else {
                setIsFavorite(false);
                // upDateListsFavorite(false, currentListId);
              }
            }}
          >
            {isFavorite ? <StarIcon className={styles.favored} /> : <StarBorderIcon className={styles.favorite} />}
          </button>
          <button onClick={() => {}} className={styles.saveBtn}>
            保存する
          </button>
        </div>
      </div>
      <SelectedMemo currentListId={currentListId} />
    </div>
  );
};
export default CreateList;
