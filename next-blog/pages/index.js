import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";
export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}
function HomePage({ posts }) {
  console.log(posts);
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>Welcome To My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
export default HomePage;
// import Head from "next/head";
// import Link from "next/link";
// import { getPosts } from "../lib/posts";

// export async function getStaticProps() {
//   const posts = await getPosts();
//   return {
//     props: { posts },
//   };
// }

// function HomePage({ posts }) {
//   console.log("[index]:render", posts);
//   return (
//     <>
//       <Head>
//         <title>My Blog</title>
//         <meta name="description" value="This is My Blog"></meta>
//       </Head>
//       <main>
//         <h1>Andri's Blogs</h1>
//         <ul>
//           {posts.map((post) => (
//             <li key={post.slug}>
//               <Link href={`/posts/${post.slug}`}>
//                 <a>{post.title}</a>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </main>
//     </>
//   );
// }
// export default HomePage;
