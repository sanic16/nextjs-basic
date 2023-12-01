import PostCard from "@/components/PostCard";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  return posts;
}

type Props = {
  className?: string;
};

// React Server Component
export default async function PostPages(props: Props) {
  const posts = await loadPosts();

  return (
    <section>
      <h1>PostPages</h1>
      <section className="posts__wrapper">
        {posts.map((post: { id: number; title: string; body: string }) => (
          <PostCard post={post} key={post.id} className={props.className} />
        ))}
      </section>
    </section>
  );
}
