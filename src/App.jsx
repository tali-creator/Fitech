import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

//page import
import Details, { userDetails } from "./tali/details";
import Dashboard from "./dashboard";
import About from "./tali and obed/navigations/about";
import Service from "./tali and obed/navigations/service";
import Events, { eventData } from "./tali and obed/navigations/event";
import LoginPage from "./tali and obed/navigations/login";
import SignInPage from "./tali and obed/navigations/signin";
import Recovery from "./tali and obed/navigations/recovery";

//layouts
import RootLayout from "./RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* others should put their code in dashboard.jsx */}
      <Route index element={<Dashboard />}  />
      <Route path="about" element={<About />} />
      <Route path="service" element={<Service />} />
      <Route path="event" element={<Events />} loader={eventData}  />
      <Route path="login" element={<LoginPage />} />
      <Route path="recovery" element={<Recovery />} />
      <Route path="signIn" element={<SignInPage />} />
      <Route path="user/:id"  element={<Details />} loader={userDetails} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
