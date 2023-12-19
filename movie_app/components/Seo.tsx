import Head from "next/head";

interface IfTitle {
    title: string;
}

export default function Seo({title}: IfTitle) {
    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    )
}
