import Head from "next/head";
export const siteTitle = "家守舎桃ノ音 アカリ";

const Layout: React.FC<{}> = (props) => {
  return (
    <>
      {/* <Head>
        <title>{siteTitle}</title>
      </Head> */}
      <div>
        <header>
          <p>header</p>
        </header>
        <main>{props.children}</main>
        <footer>
          <p>footer</p>
        </footer>
      </div>
    </>
  );
};
export default Layout;
