// import styles
import styles from "../styles/pages/CreateList.module.scss"
// import Component
import ListDetail from "../components/CreateList/ListDetail";
import SelectedMemo from "../components/CreateList/SelectedMemo";

const CreateList = () => {
    return <div className={styles.overall}>
        <ListDetail/>
        <SelectedMemo/>
    </div>
};
export default CreateList