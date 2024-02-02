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
      <div className="w-100 h-100">
        <Header />
        <div className="flex w-full h-3/4">
          <AsideMenu />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
