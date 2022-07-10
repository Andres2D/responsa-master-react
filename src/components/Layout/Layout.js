import Footer from "../statics/Footer";
import Header from "../statics/Header";

const Layout = props => {
  return (
    <>
      <div style={{minHeight: '100vh'}}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
