// 해당 폴더에 index.tsx 만들게 되면 /movies 라우트에 해당하는 페이지가 됨.

import {useRouter} from "next/router";

export default function Detail() {
    const router = useRouter();

    return <h4>{router.query.title}</h4>;
}
