import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <header className="container">
        <Nav />
      </header>
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
