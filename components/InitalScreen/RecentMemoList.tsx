import styles from "../../styles/components/InitalScreen/RecentMemoList.module.scss";
import RecentListCard from "./RecentListCard";

const RecentMemoList = () => {
  return (
    <>
      <div className={styles.recentMemoListWrap}>
        <h2 className={styles.recentMemoListHeader}>最近作成したメモ</h2>
        <div className={styles.recentContentsAreas}>
          <RecentListCard />
        </div>
      </div>
    </>
  );
};
export default RecentMemoList;
