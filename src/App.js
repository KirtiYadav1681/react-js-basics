import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import withLoader from "./components/withLoader";
import PromiseComponent from "./components/Promise";
import ReduxCounter from "./components/ReduxCounter";
import LazyLoadedImage from "./components/LazyLoadedImage";
import AbstractComponent from "./components/Abstraction";
import ThrottleScroll from "./components/ThrottleScroll";
import DebouncedScroll from "./components/DebouncedScroll";
import ThemeContextProvider from "./context/ThemeContextProvider";
import HigherOrderComponent from "./components/HigherOrderComponent";
import WindowingWithFetchCaching from "./components/WindowingWithFetchCaching";
import FetchingDataWithReactQuery from "./components/FetchingDataWithReactQuery";

const ReduxCounterWithLoader = withLoader(ReduxCounter);

const Windowing = lazy(() => import("./components/Windowing"));

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <Suspense fallback={<div>Loading ...</div>}>
          <Windowing />
        </Suspense>
        <WindowingWithFetchCaching />
        <FetchingDataWithReactQuery />
        <LazyLoadedImage />
        <PromiseComponent />
        <ThemeContextProvider>
          <ReduxCounterWithLoader />
        </ThemeContextProvider>
        <HigherOrderComponent />
        <AbstractComponent />
        <DebouncedScroll />
        <ThrottleScroll />
      </div>
    </Provider>
  );
};

export default App;
