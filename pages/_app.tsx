import React, { useEffect } from "react";
import App, { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "@redux/store";
import { appWithTranslation } from "@i18n";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "@styles/main.scss";
import "@public/assets/css/aos.css";
import "nprogress/nprogress.css";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import Layout from "@components/layout";
import AOS from "aos";
Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 0,
      duration: 1000,
    });
  }, []);
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="iso-8859-2" className="next-head" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="facebook-domain-verification"
          content="ic3yy2f4uuybiyie3g0t824c2zu2wn"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          name="google-site-verification"
          content="xIRkbTBBPXox2hEMGBlqzAXr4YLpftPRpgak8oVAE7c"
        />
        <meta property="og:title" content="TFAP dashboard" />
        <meta property="og:site_name" content="TFAP dashboard" />
        <meta property="og:description" content="TFAP dashboard" />
        <meta property="og:image" content="/assets/images/logo.png" />
        <link rel="SHORTCUT ICON" href="/assets/images/logo.png" />
        <meta name="description" content="" />
        <meta name="rating" content="Safe For Kids" />
        <meta content="index" name="googlebot" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="TFAP dashboard" />
        <title>TFAP Holding</title>
        <link rel="app-touch-startup-image" href="/assets/images/logo.png" />
        <link
          rel="app-touch-icon"
          href="/assets/images/logo.png"
          sizes="48x48"
        />
        <link
          rel="app-touch-icon"
          href="/assets/images/logo.png"
          sizes="72x72"
        />
        <link
          rel="app-touch-icon"
          href="/assets/images/logo.png"
          sizes="96x96"
        />
        <link
          rel="app-touch-icon"
          href="/assets/images/logo.png"
          sizes="144x144"
        />
        <link
          rel="app-touch-icon"
          href="/assets/images/logo.png"
          sizes="168x168"
        />
        <link
          rel="app-touch-icon"
          href="/assets/images/logo.png"
          sizes="192x192"
        />
        <link
          rel="app-touch-icon"
          href="/assets/images/logo.png"
          sizes="256x256"
        />
        <link
          rel="app-touch-icon"
          href="/assets/images/logo.png"
          sizes="512x512"
        />
        <meta name="theme-color" content="#8b5cf6" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={4}
        />
      </Layout>
    </Provider>
  );
}
// export async function getServerSideProps({ locale }: any) {
//   return {
//     props: {
//       locale,
//     }, // will be passed to the page component as props
//   };
// }
// MyApp.getInitialProps = async (appContext: any) => {
//   let pageProps: any = { appProps: null, locale: null };
//   let appProps = await App.getInitialProps(appContext);

//   pageProps = {
//     ...pageProps,
//     appProps,
//   };
//   return { ...pageProps };
// };
export default MyApp;
