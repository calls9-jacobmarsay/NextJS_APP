import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
    return(
         <Fragment>
            <h1>The Main News Page</h1>
            <ul>
                <li>
                    <Link href="news/this-is-next-js">This is NextJs</Link>
                </li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;