//import styles
import styles from "../../styles/components/CerateList/ResultMemoCard.module.scss"


const ResultMemoCard = ({memosValue}: any) => {

    console.log(memosValue)
    return <>
        {

            memosValue ? memosValue.map(memosData => {
                    return (
                        <div key={memosData.memos_id} className={styles.overall}>
                            <div className={styles.memosDetail}>
                                <p>{memosData.memos_title}</p>
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