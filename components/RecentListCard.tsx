import styles from "../styles/components/RecentListCard.module.scss";

const RecentListCard = () => {
  return (
    <>
      <div className={styles.recentCardWrap}>
        <div className={styles.recentListCardIconContainer}>
          {/*ToDo -add icon*/}
          <img className={styles.recentCardIcon} src="" />
        </div>
        <p className={styles.listName}>リスト#1</p>
      </div>
    </>
  );
};
export default RecentListCard;
