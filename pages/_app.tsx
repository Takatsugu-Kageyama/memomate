import "../styles/globals.css";
import type {AppProps} from "next/app";
import Layout from "../components/Layout";
import {ChakraProvider} from "@chakra-ui/react";
import React from "react";

function MyApp({Component}: AppProps) {
    return (
        <>
            <ChakraProvider>
                <Layout>
                    <Component/>
                </Layout>
            </ChakraProvider>
        </>
    );
}

export default MyApp;
