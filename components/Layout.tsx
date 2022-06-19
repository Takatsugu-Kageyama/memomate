import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchArea from "./SearchArea";
import styles from "../styles/components/Layout.module.scss";
import {ReactElement} from "react";

type LayoutProps = Required<{
    readonly children: ReactElement
}>

const Layout = ({children}: LayoutProps) => {
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
