//import styles
import styles from "../../styles/components/InitalScreen/FavoriteList.module.scss";
//import components
import FavoriteListCard from "./FavoriteListCard";

const FavoriteList = () => {
  return (
    <>
      <div className={styles.favorListWrap}>
        <h2 className={styles.favorListHeader}>お気に入りしたリスト</h2>
        <div className={styles.favorContentsAreas}>
          <FavoriteListCard />
        </div>
      </div>
    </>
  );
};
export default FavoriteList;
