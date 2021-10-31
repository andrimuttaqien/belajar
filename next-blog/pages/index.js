import Head from "next/head";
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
            </main>
        </>
    );
}
export default HomePage;
