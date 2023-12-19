// 해당 폴더에 index.tsx 만들게 되면 /movies 라우트에 해당하는 페이지가 됨.

import {GetServerSideProps, GetStaticPropsContext, InferGetServerSidePropsType} from "next";
import Seo from "@/components/Seo";

export default function Detail({params}: InferGetServerSidePropsType<GetServerSideProps>) {
    const [title, id] = params;

    return (
        <div>
            <Seo title={title}/>
            <h4>{title}</h4>
        </div>
    );
}

interface IfParams {
    params: {
        params: GetStaticPropsContext
    }
}

export function getServerSideProps({params: {params}}: IfParams) {
    return {
        props: {
            params
        }
    }
}
