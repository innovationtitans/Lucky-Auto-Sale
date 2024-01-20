// import { useRouteError } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";

const ErrorPage = () => {
  //   const error = useRouteError();
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto my-20">
        <div id="error-page tex-center">
          <h1 className="text-center">Oops!</h1>
          <p className="text-center">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="text-center my-4 font-Roboto text-4xl">
            404. The Page Or URL Requested Wasnt Found On This Page.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
