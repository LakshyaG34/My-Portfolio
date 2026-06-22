import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollToTop from "../utils/ScrollToTop";

const WebsiteLayout = () => {
  return (
    <>
      <Nav />
      <ScrollToTop />

      <div className="pt-18 md:pt-0">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default WebsiteLayout;