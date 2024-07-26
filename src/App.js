import logo from './logo.svg';
import './index.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import Watchpage from './components/Watchpage';
import Shorts from './components/Shorts';
const appRouter = createBrowserRouter([{
  path : "/",
  element : <Body/>,
  children : [
    {
      path : "/",
      element : <Maincontainer/>
    },
    {
     path : "watch",
     element : <Watchpage/>
    },
    {
      path : "shorts",
      element : <Shorts/>
     }
  ]
}])
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <button className='bg-slate-100'>Test</button>
    <Head/>
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
