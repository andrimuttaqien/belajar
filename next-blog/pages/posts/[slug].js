// import { readFile } from "fs/promises";
import { getPost, getSlugs } from "../../lib/posts";
import Head from "next/head";
// async function getData(slug) {
//   const data = await readFile(`contents/posts/${slug}.json`, "utf8");
//   //   console.log("data :", data);
//   return JSON.parse(data);
// }
export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    // paths: [
    //   { params: { slug: "first-post" } },
    //   { params: { slug: "second-post" } },
    // ],
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  console.log("[FistPost] getStaticProps()", slug);
  const post = await getPost(slug);
  //   console.log(post);s
  return {
    props: { post },
  };
}

function FirstPost({ post }) {
  //   console.log("[Fist Post]:render", post);
  return (
    <>
      <Head>
        <title>
          {post.title}-My Blog-{post.date}
        </title>
      </Head>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.body }}></article>
    </>
  );
}
export default FirstPost;
