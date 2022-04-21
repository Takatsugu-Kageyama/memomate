// import styles
import styles from "../../styles/components/InitalScreen/RecentMemoList.module.scss";
// import component
import RecentMemoListCard from "./RecentMemoListCard";

const RecentMemoList = () => {
    return (
        <>
            <div className={styles.recentMemoListWrap}>
                <h2 className={styles.recentMemoListHeader}>最近作成したメモ</h2>
                <div className={styles.recentContentsAreas}>
                    <RecentMemoListCard/>
                </div>
            </div>
        </>
    );
};
export default RecentMemoList;
