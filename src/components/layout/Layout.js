import Header from "./Header";

const Layout = ({ children, ...rest }) => {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
