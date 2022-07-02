import Footer from "../statics/Footer";
import Header from "../statics/Header";

const Layout = props => {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  );
};

export default Layout;
