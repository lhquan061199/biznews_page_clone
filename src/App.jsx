import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants";
import Layout from "./layouts";
import HomeView from "./views/HomeView";
import CategoryView from "./views/CategoryView";
import SingleNewsView from "./views/SingleNewsView";
import ContactView from "./views/ContactView";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route
              path={ROUTES.HOME}
              element={<HomeView></HomeView>}
            />
             <Route
              path={ROUTES.CATEGORY}
              element={<CategoryView></CategoryView>}
            />
             <Route
              path={ROUTES.SINGERNEWS}
              element={<SingleNewsView></SingleNewsView>}
            />
             <Route
              path={ROUTES.CONTACT}
              element={<ContactView></ContactView>}
            />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;

{
  /* <Routes>
<Route
path={ROUTES_AUTHEN.PAYMENT_COMPLETE}
element={<PaymentComplete />}
/> */
}
