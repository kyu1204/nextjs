import Seo from "@/components/Seo";
import {useEffect, useState} from "react";


const API_KEY = "";

interface IfMovie {
    id: number;
    original_title: string;
}

export default function Home() {
    const [movies, setMovies] = useState<IfMovie[]>();

    useEffect(() => {
        (async () => {
            const {results} = await (
                await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
                )
            ).json();
            setMovies(results);
        })();
    }, []);

    return (
        <div className="container">
            <Seo title="Home"/>
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie: IfMovie) => (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
        </div>
    )
}
