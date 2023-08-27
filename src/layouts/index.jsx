import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
	return (<>
		<Header></Header>
		{children}
		<Footer></Footer>
	</>);
}

export default Layout;