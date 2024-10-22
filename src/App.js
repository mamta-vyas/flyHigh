// App.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Hotels from './components/Hotels';
import Flights from './components/Flights';
import CarHire from './components/CarHire';
import MainContainer from './components/MainContainer';
import Login from './components/Login';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },

      {
        path: "/flights",
        element: <Flights />,
      },
      {
        path: "/hotels",
        element: <Hotels />,
      },
      {
        path: "/carhire",
        element: <CarHire />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="flex flex-col">
 
    <RouterProvider router={appRouter}/>
      
  
    </div>
  );
}

export default App;
