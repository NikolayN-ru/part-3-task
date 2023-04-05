import "./App.css";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage";
import ButtonHeader from "./components/ButtonHeader/ButtonHeader";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Products /> */}
      <MainPage />
      <ButtonHeader />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
