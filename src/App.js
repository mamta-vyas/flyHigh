// App.js
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Body from "./components/Body";
import Hotels from "./components/Hotels";
import Flights from "./components/Flights";
import CarHire from "./components/CarHire";
import MainContainer from "./components/MainContainer";
import Login from "./components/Login";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
// import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./utils/firebase";
// import { addUser, removerUser } from "./utils/userSlice";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        index: true, // Use this for the default child route
        element: <Body />,
      },
      {
        path: "flights", // Remove the leading "/"
        element: <Flights />,
      },
      {
        path: "hotels", // Remove the leading "/"
        element: <Hotels />,
      },
      {
        path: "carhire", // Remove the leading "/"
        element: <CarHire />,
      },
      {
        path: "login", // Remove the leading "/"
        element: <Login />,
      },
    ],
  },
]);



function App() {


 

  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
      {/* Placing Footer here will make it available on all routes */}
    </Provider>
  );
}

export default App;
