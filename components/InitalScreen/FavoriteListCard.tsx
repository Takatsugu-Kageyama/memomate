import styles from "../../styles/components/InitalScreen/ListCard.module.scss";

const FavoriteListCard = () => {
  return (
      <div className={styles.recentCardAreaOverall}>
        <div className={styles.recentCardWrap}>
          <div className={styles.recentListCardIconContainer}>
            {/*ToDo -add icon*/}
            <img className={styles.recentCardIcon} src="images/icon_1.png" />
          </div>
          <p className={styles.listName}>リスト#1</p>
        </div>
        <div className={styles.recentCardWrap}>
          <div className={styles.recentListCardIconContainer}>
            {/*ToDo -add icon*/}
            <img className={styles.recentCardIcon} src="images/icon_2.png" />
          </div>
          <p className={styles.listName}>リスト#2</p>
        </div>
        <div className={styles.recentCardWrap}>
          <div className={styles.recentListCardIconContainer}>
            {/*ToDo -add icon*/}
            <img className={styles.recentCardIcon} src="images/icon_3.png" />
          </div>
          <p className={styles.listName}>リスト#3</p>
        </div>
        <div className={styles.recentCardWrap}>
          <div className={styles.recentListCardIconContainer}>
            {/*ToDo -add icon*/}
            <img className={styles.recentCardIcon} src="images/icon_4.png" />
          </div>
          <p className={styles.listName}>リスト#4</p>
        </div>
        <div className={styles.recentCardWrap}>
          <div className={styles.recentListCardIconContainer}>
            {/*ToDo -add icon*/}
            <img className={styles.recentCardIcon} src="images/icon_5.png" />
          </div>
          <p className={styles.listName}>リスト#5</p>
        </div>
        <div className={styles.recentCardWrap}>
          <div className={styles.recentListCardIconContainer}>
            {/*ToDo -add icon*/}
            <img className={styles.recentCardIcon} src="images/icon_6.png" />
          </div>
          <p className={styles.listName}>リスト#6</p>
        </div>
        <div className={styles.recentCardWrap}>
          <div className={styles.recentListCardIconContainer}>
            {/*ToDo -add icon*/}
            <img className={styles.recentCardIcon} src="images/icon_7.png" />
          </div>
          <p className={styles.listName}>リスト#7</p>
        </div>
        <div className={styles.recentCardWrap}>
          <div className={styles.recentListCardIconContainer}>
            {/*ToDo -add icon*/}
            <img className={styles.recentCardIcon} src="images/icon_8.png" />
          </div>
          <p className={styles.listName}>リスト#8</p>
        </div>
      </div>
  );
};
export default FavoriteListCard;
