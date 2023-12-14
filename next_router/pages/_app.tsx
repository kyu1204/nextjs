import {AppProps} from "next/app";
import NavBar from "@/componentes/NavBar";

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <div>
            <NavBar/>
            <Component {...pageProps} />
            <style jsx global>
                {`
                    a {
                        color: white;
                    }
                `}
            </style>
        </div>
    );
}
