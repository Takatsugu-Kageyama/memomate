// import styles
import styles from "../../styles/MainPage.module.scss";
// import components
import RecentList from "../../components/InitalScreen/RecentList";
import FavoriteList from "../../components/InitalScreen/FavoriteList";
import RecentMemoList from "../../components/InitalScreen/RecentMemoList";

const MainPage = () => {
  return (
    <>
      <div className={styles.overall}>
        {/*Recent List Area*/}
        <RecentList />
        {/*Favorite List Area*/}
        <FavoriteList />
        {/*Recent Memos' list*/}
        <RecentMemoList />
      </div>
    </>
  );
};
export default MainPage;
