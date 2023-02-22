import { Fragment } from "react";
import Link from "next/link";
const HomePage = () => {
    return(
        <Fragment>
            <h1>The Home Page</h1>
            <Link href="/news">News</Link>
        </Fragment>
    );
}

export default HomePage;