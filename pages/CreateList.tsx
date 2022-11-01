//import styles
import styles from "../styles/pages/CreateList.module.scss";
//import React
import React, { useCallback, useEffect, useState } from "react";
//import Chakra UI
import { Input } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import SelectedMemo from "../components/CreateList/SelectedMemo";
//import TypeDefinition
import { ListSchema } from "../util/TypeDefinition/ListSchema";
import { EmojiSchema } from "../util/TypeDefinition/EmojiSchema";
//import GUI
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useRouter } from "next/router";
import { MemosType } from "../util/TypeDefinition/MemosSchema";
import { sendList } from "../util/Firebase/SendList";
import { EmojiObjects } from "@mui/icons-material";
import { type } from "os";

const CreateList = () => {
  const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });
  const router = useRouter();
  //! Per lists detail state:
  //store lists title
  const [listsTitle, setListsTitle] = useState<string | null>("");
  //store Emojis object:
  const [chosenEmoji, setChosenEmoji] = useState<string>("");
  //store favorite:
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  //store selected memos
  const [selectedMemos, setSelectedMemos] = useState<Array<MemosType>>([]);

  //!store Lists contents:
  const [listContents, setListsContents] = useState<ListSchema>({
    title: listsTitle,
    emoji: chosenEmoji,
    memos: selectedMemos,
    favorite: isFavorite,
    listsId: "",
  });

  //Check whether the required are items set or not:
  const [isSave, setIsSave] = useState(false);
  //Store Current List ID:
  const [currentListId, setCurrentListId] = useState("");
  //check whether Piker is open or not:
  const [isOpenPiker, setIsOpenPiker] = useState(false);
  //Provide Emoji
  const onEmojiClick = (event: React.MouseEvent<Element, MouseEvent>, emojiObject: any) => {
    event.stopPropagation();
    setChosenEmoji(emojiObject.emoji);
    setListsContents({ ...listContents, emoji: emojiObject });
    setIsOpenPiker(false);
  };
  //Define Modal
  const onClosePicker = useCallback(() => {
    setIsOpenPiker(false);
    document.removeEventListener("click", onClosePicker);
  }, []);
  //Page Handler
  const pageChangeHandler = () => {
    const alert = window.confirm("入力内容が保存されていません、本当にページを離れますか？");
    if (!alert) {
      throw "Abort route";
    }
  };
  const beforeUnloadHandler = (e) => {
    e.returnValue = "入力内容が保存されていません、本当にページを離れますか？";
  };
  //When user reload this page if contents is not saved:
  useEffect(() => {
    if (!isSave) {
      router.events.on("routeChangeStart", pageChangeHandler);
      window.addEventListener("beforeunload", beforeUnloadHandler);
      return () => {
        router.events.off("routeChangeStart", pageChangeHandler);
        window.removeEventListener("beforeunload", beforeUnloadHandler);
      };
    }
  }, [!isSave]);
  //Piker Setting Func:
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

  const changedData = (): void => {
    setIsSave(false);
  };

  const upDateListsMemos = (memo: Array<MemosType>): void => {
    setSelectedMemos(memo);
  };
  useEffect(changedData, [listsTitle, chosenEmoji, isFavorite]);

  return (
    <div className={styles.overall}>
      <div className={styles.upper}>
        {/*emoji area*/}
        <div className={styles.emojiArea} onClick={onOpenPicker}>
          {chosenEmoji ? (
            <span className={styles.emoji}>{chosenEmoji}</span>
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
              setListsTitle(e.target.value);
            }}
          />
          <button
            className={styles.favorBtn}
            onClick={() => {
              if (!isFavorite) {
                setIsFavorite(true);
              } else {
                setIsFavorite(false);
              }
            }}
          >
            {isFavorite ? <StarIcon className={styles.favored} /> : <StarBorderIcon className={styles.favorite} />}
          </button>
          {!isSave ? (
            <button
              onClick={() => {
                if (!listContents.title && !listContents.emoji) {
                  listContents.title = listsTitle;
                  listContents.emoji = chosenEmoji;
                  listContents.favorite = isFavorite;
                  listContents.memos = selectedMemos;
                  setIsSave(true);
                  sendList(listContents, currentListId).then((listId) => {
                    if (!currentListId) {
                      setCurrentListId(listId);
                    }
                  });
                  console.log(listContents);
                } else {
                  window.alert("リストのタイトルと絵文字は記入が必須です。");
                }
              }}
              className={styles.saveBtn}
            >
              保存する
            </button>
          ) : (
            <button className={styles.savedBtn}>保存済み</button>
          )}
        </div>
      </div>
      <SelectedMemo changedData={changedData} upDateListsMemos={upDateListsMemos} />
    </div>
  );
};
export default CreateList;
