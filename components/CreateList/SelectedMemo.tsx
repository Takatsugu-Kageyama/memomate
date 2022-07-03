//import ChakraUI
import {Input} from '@chakra-ui/react'
//import styles
import styles from "../../styles/components/CerateList/SelectedMemo.module.scss"
import React, {useState} from "react";
import {searchMemo} from "../../util/Firebase/firebaseConfig";
import ResultMemoCard from "./ResultMemoCard";
import SelectedMemoCard from "./SelectedMemoCard";


const SelectedMemo = ({currentListId}:any) => {
    const [memosValue, setMemosValue] = useState()
    const [selectedMemo,setSelectedMemo] = useState([{memos_id:"",memos_contents:"",memos_title:"",memos_upDate_time:""}])


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
        <SelectedMemoCard currentListId={currentListId}/>
        <p className={styles.listText}>追加したいメモを検索して、メモリストを作りましょう</p>
        <Input onInput={isInputChange} className={styles.memoSearch} focusBorderColor='none' placeholder='メモを検索'/>
        <ResultMemoCard memosValue={memosValue} currentListId={currentListId} selectedMemo={selectedMemo}/>
    </div>
};
export default SelectedMemo