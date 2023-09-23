import "./App.css";
import { Router } from "react-router"; // Import Router from 'react-router'
import { RouterProvider } from "react-router";
import Routes from "./Components/Routes/Routes";

function App() {
  return (
    <RouterProvider router={Routes}>
      <Router>
        {" "}
        {/* Wrap your app with Router */}
        {/* Your app content here */}
      </Router>
    </RouterProvider>
  );
}

export default App;
