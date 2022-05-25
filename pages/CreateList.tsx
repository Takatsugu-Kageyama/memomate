// import styles
import styles from "../styles/pages/CreateList.module.scss";
// import Component
import SelectedMemo from "../components/CreateList/SelectedMemo";
import SelectedEmoji from "../components/CreateList/SelectedEmoji";
import ListsTitle from "../components/CreateList/ListsTitle";

const CreateList = () => {
  return (
    <>
      <SelectedEmoji />
      <ListsTitle />
      <SelectedMemo />
    </>
  );
};
export default CreateList;
