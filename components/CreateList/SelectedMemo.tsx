//import ChakraUI
import { Input } from "@chakra-ui/react";
//import styles
import styles from "../../styles/components/CerateList/SelectedMemo.module.scss";
import React, { useEffect, useState } from "react";
import { searchMemo } from "../../util/Firebase/SearchMemo";
import { Button } from "@chakra-ui/react";
import { MemosType } from "../../util/TypeDefinition/MemosSchema";

const SelectedMemo = ({ currentListId }: any) => {
  //Store memo
  const [memosValue, setMemosValue] = useState<Array<MemosType>>([]);
  const [nonSelectedMemos, setNoneSelectedMemos] = useState<Array<MemosType>>([]);
  const [selectedMemo, setSelectedMemo] = useState<Array<MemosType>>([]);

  //Display all memo depends on keyword:
  const isInputChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const searchValue: string = e.target.value;
    console.log(searchValue);
    if (searchValue) {
      searchMemo(searchValue).then((value) => {
        if (typeof value !== "undefined") {
          setMemosValue(value);
          console.log(memosValue, typeof memosValue);
        }
      });
    }
  };

  useEffect(() => {
    setNoneSelectedMemos(
      memosValue.filter((memosRow) =>
        selectedMemo.filter((selectedMemosRow) => memosRow.memos_id === selectedMemosRow.memos_id).length === 0
      )
    );
  }, [memosValue, selectedMemo]);
  console.log(nonSelectedMemos);
  return (
    <div className={styles.overall}>
      <div className={styles.selectedMemos}>
        {selectedMemo
          ? selectedMemo.map((memos) => {
              return (
                <div key={memos.memos_id} className={styles.memosCard}>
                  <div className={styles.memosDetail}>
                    <p className={styles.memosTitle}>{memos.memos_title}</p>
                    <Button
                      colorScheme="blue"
                      onClick={() => {
                        setSelectedMemo(selectedMemo.filter((memo) => memo.memos_id !== memos.memos_id));
                      }}
                      className={styles.memoAdd}
                      _hover={{ bg: "none", color: "#2FBFFF" }}
                      _focus={{ boxShadow: "none", bg: "none" }}
                    >
                      削除
                    </Button>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <p className={styles.listText}>追加したいメモを検索して、メモリストを作りましょう</p>
      <Input onInput={isInputChange} className={styles.memoSearch} focusBorderColor="none" placeholder="メモを検索" />
      <div className={styles.searchOverall}>
        {nonSelectedMemos
          ? nonSelectedMemos.map((memosData: MemosType) => {
              return (
                <div key={memosData.memos_id} className={styles.memosCard}>
                  <div className={styles.memosDetail}>
                    <p className={styles.memosTitle}>{memosData.memos_title}</p>
                    <Button
                      colorScheme="blue"
                      onClick={() => {
                        // addListsMemo(memosData.memos_id, currentListId);
                        setSelectedMemo([...selectedMemo, memosData]);
                        console.log(selectedMemo);
                      }}
                      className={styles.memoAdd}
                      _hover={{ bg: "none", color: "#2FBFFF" }}
                      _focus={{ boxShadow: "none", bg: "none" }}
                    >
                      追加
                    </Button>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
export default SelectedMemo;
