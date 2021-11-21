import Page from "../components/Page";
import { getPosts } from "../lib/posts";
import PostsCard from "../components/PostsCard";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
}

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <Page title="Andri's">
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <li key={post.id}>
              <PostsCard post={post} />
            </li>
          ))}
        </ul>
      </Page>
    </>
  );
}
