import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout home>
        <Head>
          <title>First Post</title>
        </Head>
        <footer>
          <Link href="/">
            <a>Home</a>
          </Link>
        </footer>
      </Layout>
    </>
  );
}
