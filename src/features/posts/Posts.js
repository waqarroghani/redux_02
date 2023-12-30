import { useSelector } from "react-redux";
import { selectAllPosts } from "./Postsslice.js";
import Author from "./Author.js";
import PostTime from "./PostTime.js";
import Reactions from "./Reactions.js";
import Forms from "./Forms.js";

const Posts = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <Author userId={post.userId} />``
                <PostTime timestamp={post.date} />
            </p>
            <Reactions post={post} />
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            <Forms/>
            {renderedPosts}
        </section>
    )
}
export default Posts
