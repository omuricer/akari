import Head from "./head";

const Layout: React.FC<{}> = (props) => {
  return (
    <>
      <Head />
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
