//import ChakraUI
import {Input} from '@chakra-ui/react'
//import styles
import styles from "../../styles/components/CerateList/SelectedMemo.module.scss"
import React, {useState} from "react";
import {searchMemo} from "../../util/Firebase/firebaseConfig";
import ResultMemoCard from "./ResultMemoCard";


const SelectedMemo = () => {
    const [memosValue, setMemosValue] = useState()

    const isInputChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
        const searchValue = e.target.value;
        if (searchValue) {
            searchMemo(searchValue).then((value) => {
                if (typeof value !== "undefined") {
                    setMemosValue(value)
                    console.log(memosValue, typeof memosValue)
                }
            })
        }
    }
    return <div className={styles.overall}>
        <p className={styles.listText}>追加したいメモを検索して、メモリストを作りましょう</p>
        <Input onInput={isInputChange} className={styles.memoSearch} focusBorderColor='none' placeholder='メモを検索'/>
        <ResultMemoCard memosValue={memosValue}/>
    </div>
};
export default SelectedMemo