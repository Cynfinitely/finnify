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
      <div className="w-screen h-screen">
        <Header />
        <div className="flex w-screen h-3/4">
          <AsideMenu />
          <div className="w-5/6">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
