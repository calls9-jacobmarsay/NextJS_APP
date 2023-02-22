import { useRouter } from "next/router";

const NewsBlog = () => {
    const router = useRouter();
    const newsItem = router.query.newsId;
    return(
        <h1>News Details Page</h1>
    );
}

export default NewsBlog;