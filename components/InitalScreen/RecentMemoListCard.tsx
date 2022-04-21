// import styles
import styles from "../../styles/components/InitalScreen/RecentMemoListCard.module.scss";

const RecentMemoListCard = () => {
    return <>
        <div className={styles.memoListCardOverall}>
            <div className={styles.memoListCardWrap}>
                <p className={styles.listName}>リスト#1</p>
            </div>
            <div className={styles.memoListCardWrap}>
                <p className={styles.listName}>リスト#1</p>
            </div>
            <div className={styles.memoListCardWrap}>
                <p className={styles.listName}>リスト#1</p>
            </div>
            <div className={styles.memoListCardWrap}>
                <p className={styles.listName}>リスト#1</p>
            </div>
            <div className={styles.memoListCardWrap}>
                <p className={styles.listName}>リスト#1</p>
            </div>
            <div className={styles.memoListCardWrap}>
                <p className={styles.listName}>リスト#1</p>
            </div>
        </div>
    </>;
};
export default RecentMemoListCard;
