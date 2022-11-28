import Header from "components/Header";
import Head from "next/head";

function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Handmade items from around the world are available here"
        />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
