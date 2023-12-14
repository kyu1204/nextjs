import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav className={styles.nav}>
            <Link href={"/"} style={{color: router.pathname === "/" ? "red" : "blue"}}>
                Home
            </Link>
            |
            <Link href={"/about"} style={{color: router.pathname === "/about" ? "red" : "blue"}}>
                About
            </Link>
        </nav>
    )
}
