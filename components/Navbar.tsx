import SearchArea from "./SearchArea";
import Link from "next/link";
import styles from "../styles/components/Navabr.module.scss";

//Google Material Icons
import {
  HomeOutlined,
  GridViewOutlined,
  AddBoxOutlined,
  NoteAddOutlined,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className={styles.navbarWrap}>
      {/*Navigation Area*/}
      <div className={styles.navArea}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <img src="/images/MEMOMATE_logo.png" alt="" />
            </a>
          </Link>
        </div>
        <div className={styles.navListBox}>
          <ul className={styles.navList}>
            <Link href="/">
              <a>
                <li className={styles.navLink}>
                  <HomeOutlined className={styles.icon} />
                  ホーム
                </li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li className={styles.navLink}>
                  <GridViewOutlined className={styles.icon} />
                  マイリスト
                </li>
              </a>
            </Link>
            <Link href="CreateList">
              <a>
                <li className={styles.navLink}>
                  <AddBoxOutlined className={styles.icon} />
                  リスト作成
                </li>
              </a>
            </Link>
            <Link href="/CreateMemo">
              <a>
                <li className={styles.navLink}>
                  <NoteAddOutlined className={styles.icon} />
                  メモ作成
                </li>
              </a>
            </Link>
          </ul>
        </div>
        {/*Display All Memo which is written by user */}
        <div className={styles.memoSum}>
          <p className={styles.memoSumHead}>メモ一覧</p>
          <div className={styles.memoList}></div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
