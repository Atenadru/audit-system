import Header from "./header";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <div className="main-wrap">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
