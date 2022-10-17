//import styles
import styles from "../../styles/components/CerateList/ResultMemoCard.module.scss";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { addListsMemo } from "../../util/Firebase/firebaseConfig";

const ResultMemoCard = ({ memosValue, currentListId, selectedMemo }: any) => {
  let latestMemosValue = memosValue;

  return (
    <>
      {latestMemosValue
        ? latestMemosValue.map((memosData: any) => {
            return (
              <div key={memosData.memos_id} className={styles.overall}>
                <div className={styles.memosDetail}>
                  <p className={styles.memosTitle}>{memosData.memos_title}</p>
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      addListsMemo(memosData.memos_id, currentListId);
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
    </>
  );
};
export default ResultMemoCard;
