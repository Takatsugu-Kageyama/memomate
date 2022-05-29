//import ChakraUI
import {Input} from '@chakra-ui/react'
//import styles
import styles from "../../styles/components/CerateList/ListTitle.module.scss"

const ListsTitle = () => {
    return <div className={styles.overall}>
        <Input className={styles.titleInput} focusBorderColor='none' placeholder='タイトルを入力'/>
    </div>;
};
export default ListsTitle;
