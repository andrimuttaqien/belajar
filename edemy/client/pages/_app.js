import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../styles/global.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Components
import TopNav from "../components/layout/TopNav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer position="top-center" />
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
