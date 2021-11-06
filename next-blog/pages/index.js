import Head from "next/head";
import Link from "next/link";
function HomePage() {
  console.log("[index]:render");
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" value="This is My Blog"></meta>
      </Head>
      <main>
        <h1>Andri's Blogs</h1>
        <ul>
          <li>
            <Link href="/posts/fist-post">
              <a>First Post</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/second-post">
              <a>Second Post</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/third-post">
              <a>Third Post</a>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
export default HomePage;
