// import styles
import styles from "../styles/pages/CreateMemo.module.scss";
// import next.js materials
import Head from "next/head";
// import Chakra UI
import { Button, Textarea } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { sendMemoData } from "../util/Firebase/SendMemo";
import { getLists } from "../util/Firebase/GetLists";
import React, { useEffect, useState } from "react";
import { ListSchema } from "../util/TypeDefinition/ListSchema";

//send memo contents to database
const CreateMemo = () => {
  const [memoTitle, setMemoTitle] = useState<string>("");
  const [memoDetail, setMemoDetail] = useState<string>("");
  const [savedList, setSavedList] = useState<Array<ListSchema>>([]);

  const onChangeMemoDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setMemoDetail(e.target.value);
    console.log(memoDetail);
  };

  const onChangeMemoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMemoTitle(e.target.value);
  };

  useEffect(() => {
    getLists().then((value) => {
      if (typeof value !== "undefined") {
        setSavedList(value);
      }
      console.log(value);
    });
  }, []);

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
        <Button
          className={styles.submitBtn}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            sendMemoData(memoTitle, memoDetail).then(() => {
              setMemoTitle("");
              setMemoDetail("");
            });
          }}
        >
          保存する
        </Button>
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
          <select name="" id="">
            <option value="" selected hidden>リストを選択</option>
            <option value="">リストなし</option>
            {savedList ? (
              savedList.map((list) => {
                return (
                  <option key={list.listsId} value="">
                    {list.title}
                  </option>
                );
              })
            ) : (
              <option value="">リストなし</option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
};
export default CreateMemo;
