//import styles
import styles from "../../styles/components/InitalScreen/RecentList.module.scss";
// import components
import RecentListCard from "./RecentListCard";

const RecentList = () => {
  return (
    <>
      <div className={styles.recentListWrap}>
        <h2 className={styles.recentListHeader}>最近作成したリスト</h2>
        <div className={styles.recentContentsAreas}>
          <RecentListCard />
        </div>
      </div>
    </>
  );
};
export default RecentList;
