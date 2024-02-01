import "../styles/globals.css";
import Header from "../components/Header";
import AsideMenu from "../components/AsideMenu";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: any;
}) {
  return (
    <>
      <Header />
      <div className="flex">
        <AsideMenu />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
