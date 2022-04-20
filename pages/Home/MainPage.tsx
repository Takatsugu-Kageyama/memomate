import styles from "../../styles/components/MainPage.module.scss";
import RecentListCard from "../../components/RecentListCard";

const MainPage = () => {
  return (
    <>
      <div className={styles.overall}>
        {/*Recent List Area*/}
        <div className={styles.recentListWrap}>
          <div className={styles.recentListContainer}>
            <h2>最近作成したリスト</h2>
            <div className={styles.recentContentsAreas}>
              <RecentListCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainPage;
