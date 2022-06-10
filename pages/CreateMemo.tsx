// import styles
import styles from "../styles/pages/CreateMemo.module.scss";
// import next.js materials
import Head from "next/head";
// import Chakra UI
import {Button, Textarea} from "@chakra-ui/react";
import {Input} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import {sendMemoData} from "../util/Firebase/firebaseConfig";
import React, {useEffect, useState} from "react";
import {Router, useRouter} from "next/router";

//send memo contents to database
const CreateMemo = () => {
  //the State which save memo detail
  const [memoTitle, setMemoTitle] = useState("");
  const [memoContents, setMemoContents] = useState("");

  const onChangeMemoContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemoContents(e.target.value);
  };
  const onChangeMemoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemoTitle(e.target.value);
  };


  /*
    const router = useRouter();
  // router.events.on("routeChangeStart", saveMemo);
  useEffect(() => {
    const saveMemo = () => {
      sendMemoData(memoTitle, memoContents).then((r) => null);
    };

    router.events.on("routeChangeStart", saveMemo);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:

    return () => {
      router.events.off("routeChangeStart", saveMemo);
    };
  }, []);

   */

  return (
      <div className={styles.overall}>
        <Head>
          <title>メモ作成｜memomate</title>
          <meta name="viewport" content="initial-scale=1.0"/>
        </Head>
        <div className={styles.memoNameInputWrap}>
          {/*Memo's title*/}
          <Input
              _hover={{bg: "none"}}
              _expanded={{bg: "none"}}
              _focus={{boxShadow: "none"}}
              className={styles.memoNameInput}
              placeholder="メモ名を入力"
              onChange={onChangeMemoTitle}
          />
          {/*TODO Get times when Memo is updated by user and get time from database. */}
          <p className={styles.updateTimeText}>最終更新日：2022/02/06 13:32:98</p>
        </div>
        <div className={styles.memoContainer}>
          <div className={styles.memoContentsWrap}>
            {/*Memo contents*/}
            <Textarea
                className={styles.memoContentsInput}
                placeholder="メモを入力"
                onChange={onChangeMemoContents}
            />
          </div>
          <div className={styles.addListBtn}>
            {/*Add memo to the list*/}
            {/*TODO Get all  lists which is stored in database */}
            <Menu>
              <MenuButton
                  as={Button}
                  px={4}
                  py={2}
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="1px"
                  _hover={{bg: "#555555"}}
                  _expanded={{bg: "#282828"}}
                  _focus={{boxShadow: "outline"}}
              >
                リストに追加
              </MenuButton>
              <MenuList>
                <MenuItem>リスト#1</MenuItem>
                <MenuItem>リスト#2</MenuItem>
                <MenuItem>リスト#3</MenuItem>
                <MenuItem>リスト#4</MenuItem>
                <MenuItem>リスト#5</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
  );
};
export default CreateMemo;
