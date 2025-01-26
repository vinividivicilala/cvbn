// dark- hard, medium, pale, soft
// light- hard, medium, soft
// preview on https://highlightjs.org/static/demo/
import type { AppProps /*, AppContext */ } from "next/app";
// import { useRouter } from "next/dist/client/router";
// import { useEffect } from "react";
// import vhCheck from "vh-check";
import "../styles/globals.css";

function Garage({ Component, pageProps }: AppProps): JSX.Element {
  // const router = useRouter();
  // useEffect(() => {
  //   vhCheck();
  // }, []);

  // const isBlogPost = router.pathname.startsWith("/blog/");

  return (
    <div className="relative garage">
      <Component {...pageProps} />

      {/* can't nest bottom button inside #top div because then clicking top button wont' go to 0,0 top */}
      {/* {isBlogPost && (
        <>
          <div id="top" className="absolute top-0 left-0" />

          <div
            id="bottom"
            className="absolute bottom-0 right-0 mb-4 mr-2 md:mr-4"
          >
            <a href="#top" className="goto-button ">
              top
            </a>
          </div>

          <div
            id="jembottom"
            className="absolute bottom-0 left-0 mb-4 ml-2 md:ml-4"
          >
            <a href="#top" className="goto-button">
              j-top
            </a>
          </div>
        </>
      )} */}
    </div>
  );
}

export default Garage;
