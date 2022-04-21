//import next
import Head from 'next/head'
// import styles
import styles from "../../styles/pages/MainPage.module.scss";
// import components
import RecentList from "../../components/InitalScreen/RecentList";
import FavoriteList from "../../components/InitalScreen/FavoriteList";
import RecentMemoList from "../../components/InitalScreen/RecentMemoList";

const MainPage = () => {
    return (
        <>
            <Head>
                <title>ホーム｜memomate</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <div className={styles.overall}>
                {/*Recent List Area*/}
                <RecentList/>
                {/*Favorite List Area*/}
                <FavoriteList/>
                {/*Recent Memos' list*/}
                <RecentMemoList/>
            </div>
        </>
    );
};
export default MainPage;
