//import styles
import { useEffect, useState } from "react";
import styles from "../../styles/components/InitalScreen/RecentList.module.scss";
import { ListSchema } from "../../util/TypeDefinition/ListSchema";

const RecentList = () => {
  const [recentList, setRecentList] = useState<Array<ListSchema>>();

  useEffect(()=>{
   
  },[])

  return (
    <div className={styles.recentListWrap}>
      <h2 className={styles.recentListHeader}>最近作成したリスト</h2>
      <div className={styles.recentContentsAreas}>
        <div className={styles.recentCardAreaOverall}>
          <div className={styles.recentCardWrap}>
            <div className={styles.recentListCardIconContainer}>
              <img className={styles.recentCardIcon} src="images/icon_1.png" />
            </div>
            <p className={styles.listName}>リスト#1</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecentList;
