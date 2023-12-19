import Seo from "@/components/Seo";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import Link from "next/link";

interface IfMovie {
    id: number;
    original_title: string;
    poster_path: string;
}

export default function Home({movies}: InferGetServerSidePropsType<GetServerSideProps>) {
    return (
        <div className="container">
            <Seo title="Home"/>
            {movies.map((movie: IfMovie) => (
                <Link href={{
                    pathname: `/movies/${movie.id}`, query: {title: movie.original_title}
                }} key={movie.id} as={`/movies/${movie.id}`}>
                    <div className="movie" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster"/>
                        <h4>{movie.original_title}</h4>
                    </div>
                </Link>
            ))}
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }

                .movie {
                    cursor: pointer;
                }

                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
                }

                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }

                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}


export async function getServerSideProps() {
    const {results} = await (
        await fetch(
            "http://localhost:3000/api/movies",
            {cache: "no-store"}
        )
    ).json();

    return {
        props: {
            movies: results
        }
    }
}
