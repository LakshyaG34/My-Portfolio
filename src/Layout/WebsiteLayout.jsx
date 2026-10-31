import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollToTop from "../utils/ScrollToTop";

const WebsiteLayout = () => {
  return (
    <>
      <Nav />
      <ScrollToTop />

      <main className="relative isolate min-h-[calc(100vh-5rem)] pt-18 md:pt-0">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default WebsiteLayout;
