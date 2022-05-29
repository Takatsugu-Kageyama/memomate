//import ChakraUI
import {Input} from '@chakra-ui/react'
//import styles
import styles from "../../styles/components/CerateList/SelectedMemo.module.scss"

const SelectedMemo = () => {
    return <div className={styles.overall}>
        <p className={styles.listText}>追加したいメモを検索して、メモリストを作りましょう</p>
        <Input className={styles.memoSearch} focusBorderColor='none' placeholder='メモを検索'/>
    </div>
};
export default SelectedMemo