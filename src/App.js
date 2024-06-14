import React, {Suspense, lazy} from 'react';
import LazyLoadedImage from './components/LazyLoadedImage';
import PromiseComponent from './components/Promise';
import store from './redux/store'
import {Provider} from 'react-redux';
import ReduxCounter from './components/ReduxCounter';
import HigherOrderComponent from './components/HigherOrderComponent';
import AbstractComponent from './components/Abstraction';
import withLoader from './components/withLoader';
import ThemeContextProvider from './context/ThemeContextProvider';
import DebouncedScroll from './components/DebouncedScroll';
import ThrottleScroll from './components/ThrottleScroll';

const ReduxCounterWithLoader = withLoader(ReduxCounter);

const Windowing = lazy(() => import('./components/Windowing'))

const App = () => {
  return (
    <Provider store={store}>
    <div style={{display: 'flex', flexWrap:'wrap', gap:"20px"}}>
      <Suspense fallback={<div>Loading ...</div>}>
        <Windowing />
      </Suspense>
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
  )
}

export default App