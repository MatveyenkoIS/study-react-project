import "./App.css";
import CartButton from "./components/CartButton/CartButton";
import ProfileButton from "./components/ProfileButton/ProfileButton";
import { Link, Route, Routes } from "react-router-dom";
import Catalog from "./pages/Catalog/Catalog";
import Profile from "./pages/Profile/Profile";
import ProductCounter from "./components/ProductCounter/ProductCounter";
import ProductList from "./components/ProductList/ProductList";
import Modal from "./components/Modal/Modal";
import CartedList from "./components/CartedList/CartedList";
import { useState } from "react";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);

  return (
    <>
      <header className="header">
        <Link className="logo" to="/">
          Online Store
        </Link>
        <div className="bar">
          <SearchInput onSearch={setSearchQuery} />
          <CartButton isCartOpen={modal} onModal={setModal} />
          <ProfileButton />
        </div>
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Catalog
                query={searchQuery}
                isCartVisible={modal}
                setIsCartVisible={setModal}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <footer className="footer">
        <p className="note">Made by Ilya Matveyenko, NUST MISIS 2026</p>
      </footer>
    </>
  );
}

export default App;
