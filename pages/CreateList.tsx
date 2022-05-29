// import styles
import styles from "../styles/pages/CreateList.module.scss";
// import Component
import SelectedMemo from "../components/CreateList/SelectedMemo";
import SelectedEmoji from "../components/CreateList/SelectedEmoji";
import ListsTitle from "../components/CreateList/ListsTitle";

const CreateList = () => {
    return (
        <div className={styles.overall}>
            <div className={styles.upper}>
                <SelectedEmoji/>
                <ListsTitle/>
            </div>
            <SelectedMemo/>
        </div>
    );
};
export default CreateList;
