import Head from "next/dist/shared/lib/head";
import Navbar from "./navbar";
import Title from "./Title";
export default function Page({ title, children }) {
  return (
    <>
      <Head>
        <title>{title} - Next Blog</title>
      </Head>
      <Navbar />
      <main className="px-6 py-4">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
}
