import Header from "./Header";
import Footer from "./Footer";
import { getCategory } from "../service/categoriesService";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Layout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const category = useSelector((state) => state.category);

  const categories = category.categories;
  return (
    <>
      <Header category={categories}></Header>
      {children}
      <Footer category={categories}></Footer>
    </>
  );
}

export default Layout;
