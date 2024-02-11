import "../styles/globals.css";
import Header from "../components/Header";
import AsideMenu from "../components/AsideMenu";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: any;
}) {
  return (
    <Provider store={store}>
      <>
        <div className="w-screen h-screen">
          <Header />
          <div className="flex w-screen h-3/4">
            <AsideMenu />
            <div className="w-5/6 h-full">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </>
    </Provider>
  );
}

export default MyApp;
