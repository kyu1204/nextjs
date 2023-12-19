import Head from "next/head";
import React from "react";


interface IfTitle {
    title: string;
    children?: React.ReactNode;
}

export default function Seo({title}: IfTitle) {
    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    )
}
