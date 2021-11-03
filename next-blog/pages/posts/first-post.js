// import { readFile } from "fs/promises";
import { getPost } from "../../lib/posts";
// async function getData(slug) {
//   const data = await readFile(`contents/posts/${slug}.json`, "utf8");
//   //   console.log("data :", data);
//   return JSON.parse(data);
// }

export async function getStaticProps() {
  //   console.log("[FistPost] getStaticProps()");
  const post = await getPost("first-post");
  console.log(post);
  return {
    props: { post },
  };
}

function FirstPost({ post }) {
  console.log("[Fist Post]:render", post);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
export default FirstPost;
