'use client'

import Link from "next/link";

type Props = {
    post: {
        id: number;
        title: string;
        body: string;
        
    },
    className?: string;
};

// React Client Component
const PostCard = (props: Props) => {
  return (
    <article className={props.className}>
      <h2>
        <Link href={`/posts/${props.post.id}`}>{props.post.id}. {props.post.title}</Link>
      </h2>
      <p>{props.post.body}</p>
      <button onClick={() => {console.log(props.post)}}>click</button>
    </article>
  );
};

export default PostCard;
