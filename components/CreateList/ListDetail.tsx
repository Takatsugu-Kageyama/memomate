//import styles
import styles from "../../styles/components/CerateList/ListDetail.module.scss";
// import types
import {HTMLButtonEvent} from "../../util/TypeDefinition/EventSchema"
import {Props} from "../../util/TypeDefinition/EmojiSchema";
// import emoji-picker
import {Picker} from "emoji-mart";
import {useEffect, useState} from "react";

const ListDetail = () => {
    const [clickFlg, onClickFlg] = useState(false)
    const DisplayEmojiCompo = () => {
        onClickFlg(true);
    }
    useEffect(DisplayEmojiCompo)
    return <div className={styles.overallListDetail} onClick={DisplayEmojiCompo}>
        {/*Display List Icon*/}
        <div className={styles.iconsArea}></div>
        {clickFlg ? <Picker/> : null}
        {/*Display List title and favorite button*/}
        <div className={styles.titleAndFavoriteArea}></div>
    </div>
};
export default ListDetail