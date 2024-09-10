import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButtons";

const PostList = ()=>{

    const posts = useSelector(selectAllPosts);

    const orderedPost = posts.slice().sort((a,b)=> b.date.localeCompare(a.date));

    const Allpost = orderedPost.map(post=>{
        return(
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0,100)}</p>
                <p className="postCredit">
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>
                <ReactionButton post={post} />
            </article>

        );
    })

    return(
        <section>
            <h2>All Posts</h2>
            {Allpost}
        </section>
    )
}

export default PostList;