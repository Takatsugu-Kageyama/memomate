//import styles
import styles from "../../styles/components/CerateList/ResultMemoCard.module.scss"
import { Button } from '@chakra-ui/react'
import {useState} from "react";
import {addListsMemo} from "../../util/Firebase/firebaseConfig";

const ResultMemoCard = ({memosValue,currentListId}: any) => {

    //console.log(memosValue)

    return <>

        {

            memosValue ? memosValue.map((memosData):any => {
                    return (
                        <div key={memosData.memos_id} className={styles.overall}>
                            <div className={styles.memosDetail}>
                                <p className={styles.memosTitle}>{memosData.memos_title}</p>
                                <Button colorScheme='blue' onClick={()=>{
                                    addListsMemo(memosData.memos_id,currentListId)
                                 //console.log(memosData.memos_id,currentListId);
                                 //addListsMemo(currentListId, memosId).then(null);
                                }} className={styles.memoAdd}
                                        _hover={{bg:"none", color:"#2FBFFF"}}
                                        _focus={{boxShadow: "none",bg:"none"}}>追加</Button>
                            </div>
                        </div>
                    )
                })
                :
                null


        }
    </>
};
export default ResultMemoCard;