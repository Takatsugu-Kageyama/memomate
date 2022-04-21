import Navbar from "./Navbar";
import Footer from "./Footer";
import {LayoutSchema} from "../util/TypeDefinition/LayoutSchema";
import SearchArea from "./SearchArea";
import styles from "../styles/components/Layout.module.scss";

const Layout = ({children}: LayoutSchema) => {
    return (

        <div className={styles.layoutWrap}>
            <Navbar/>
            <div className={styles.rightSideWrap}>
                <SearchArea/>
                <main className={styles.main}>{children}</main>
            </div>
            <Footer/>
        </div>
    );
};
export default Layout;
