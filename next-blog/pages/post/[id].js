import Page from "../../components/Page";
import Image from "next/dist/client/image";
import { getPosts, getPost } from "../../lib/posts";
import { ApiError } from "../api/api";

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map((post) => ({
      params: { id: post.id.toString() },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { id } }) {
  try {
    const post = await getPost(id);
    return {
      props: { post },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS),
    };
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      return { notFound: true };
    }
    throw err;
  }
}

export default function PostPageDetail({ post }) {
  console.log(post);
  return (
    <Page title="Detail Post">
      <div className="flex flex-col lg:flex-row">
        <div>
          <Image
            src={post.pictureUrl}
            alt={post.pictureUrl}
            width={320}
            height={240}
          />
        </div>
        <div className="flex-1 lg:ml-4">
          <p className="text-sm">{post.body}</p>
          {/* <p className="text-lg font-bold mt-2">{post.author}</p> */}
          {/* <p>{user.name}</p> */}
        </div>
      </div>
    </Page>
  );
}
