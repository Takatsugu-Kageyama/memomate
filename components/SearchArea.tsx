import { Input } from "@chakra-ui/react";
import styles from "../styles/components/SearchArea.module.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchArea = () => {
  return (
    <div className={styles.searchAreaWrap}>
      <div className={styles.searchAreaContainer}>
        <Input
          className={styles.searchArea}
          placeholder="メモ名、リスト名など"
          height="40px"
        />
        <i className={styles.searchIconBox}>
          <SearchOutlinedIcon className={styles.searchIcon} />
        </i>
      </div>
    </div>
  );
};
export default SearchArea;
