// import styles
import styles from "../styles/pages/CreateMemo.module.scss";
// import next.js materials
import Head from "next/head";
// import Chakra UI
import { Button, Textarea } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { sendMemoData } from "../util/Firebase/SendMemo";
import { getLists } from "../util/Firebase/GetLists";
import React, { useEffect, useState } from "react";
import { ListSchema } from "../util/TypeDefinition/ListSchema";
import { useRouter } from "next/router";

//send memo contents to database
const CreateMemo = () => {
  const [memoTitle, setMemoTitle] = useState<string>("");
  const [memoDetail, setMemoDetail] = useState<string>("");
  const [savedList, setSavedList] = useState<Array<ListSchema>>([]);
  const [selectedListId, setSelectedListId] = useState<string>("");
  const [currentMemosId, setCurrentMemosId] = useState<string>("");
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const router = useRouter();

  const onChangeMemoDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setMemoDetail(e.target.value);
    setIsSaved(false);
    // console.log(memoDetail);
  };

  const onChangeMemoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsSaved(false);
    setMemoTitle(e.target.value);
  };

  useEffect(() => {
    getLists().then((value) => {
      if (typeof value !== "undefined") {
        setSavedList(value);
      }
    });
  }, []);

  //Page Handler
  const pageChangeHandler = () => {
    const alert = window.confirm("入力内容が保存されていません、本当にページを離れますか？");
    if (!alert) {
      throw "Abort route";
    }
  };
  const beforeUnloadHandler = (e: any) => {
    e.returnValue = "入力内容が保存されていません、本当にページを離れますか？";
  };
  //When user reload this page if contents is not saved:
  useEffect(() => {
    if (!isSaved) {
      router.events.on("routeChangeStart", pageChangeHandler);
      window.addEventListener("beforeunload", beforeUnloadHandler);
      return () => {
        router.events.off("routeChangeStart", pageChangeHandler);
        window.removeEventListener("beforeunload", beforeUnloadHandler);
      };
    }
  }, [!isSaved]);

  return (
    <div className={styles.overall}>
      <Head>
        <title>メモ作成｜memomate</title>
        <meta name="viewport" content="initial-scale=1.0" />
      </Head>
      <div className={styles.memoNameInputWrap}>
        {/*Memo's title*/}
        <Input
          _hover={{ bg: "none" }}
          _expanded={{ bg: "none" }}
          _focus={{ boxShadow: "none" }}
          className={styles.memoNameInput}
          value={memoTitle}
          placeholder="メモ名を入力"
          onChange={onChangeMemoTitle}
        />
        {/*TODO Get times when Memo is updated by user and get time from database. */}
        {!isSaved ? (
          <Button
            className={styles.submitBtn}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault();
              setIsSaved(true);
              console.log(selectedListId);
              sendMemoData(memoTitle, memoDetail, currentMemosId, selectedListId).then((memosId) => {
                if (memosId) {
                  setCurrentMemosId(memosId);
                }
              });
            }}
          >
            保存する
          </Button>
        ) : (
          <Button className={styles.savedBtn}>保存済み</Button>
        )}
      </div>
      <div className={styles.memoContainer}>
        <div className={styles.memoContentsWrap}>
          {/*Memo contents*/}
          <Textarea
            className={styles.memoContentsInput}
            placeholder="メモを入力"
            onChange={onChangeMemoDetail}
            value={memoDetail}
          />
        </div>
        <div className={styles.addListBtn}>
          {/*Add memo to the list*/}
          {/*TODO Get all  lists which is stored in database */}
          <Select
            className={styles.listSelect}
            placeholder="リストを選択"
            onChange={(e) => {
              setSelectedListId(e.target.value);
              setIsSaved(false);
            }}
          >
            <option value="">リストなし</option>
            {savedList ? (
              savedList.map((list) => {
                return (
                  <option key={list.listsId} value={list.listsId}>
                    <span className={styles.listsIcon}>{list.emoji}</span>
                    {list.title}
                  </option>
                );
              })
            ) : (
              <option value="">リストなし</option>
            )}
          </Select>
        </div>
      </div>
    </div>
  );
};
export default CreateMemo;
