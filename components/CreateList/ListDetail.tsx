//import styles
import styles from "../../styles/components/CerateList/ListDetail.module.scss";
//import components
import ListIcon from "./ListIcon";
//import Type definition
import { Props } from "../../util/TypeDefinition/EmojiSchema";
//import React
import React, { useState, VFC } from "react";
// import emoji-mart
import { Picker } from "emoji-mart";

const ListDetail: VFC<Props> = (props) => {
  const [displayEmojiList, setDisplayEmojiList] = useState(false);
  const displayEmojiListFunc = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.preventDefault();
    setDisplayEmojiList(true);
  };

  return (
    <div className={styles.overallListDetail}>
      {/*Display emoji-list*/}
      {/*Display Lists Icon*/}
      <button onClick={displayEmojiListFunc}>
        <ListIcon />
      </button>
      {/*Display List title and favorite button*/}
      <div className={styles.titleAndFavoriteArea}></div>
    </div>
  );
};
export default ListDetail;
