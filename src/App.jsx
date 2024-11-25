import { useEffect, useState } from "react";
import db from "./assets/db";
import "./assets/own.css";
import ItemCard from "./components/ItemCard";
import Modal from "./components/Modal";
import ModalLogin from "./components/ModalLogin";
import Navbar from "./components/Navbar";
import ShowCarts from "./components/ShowCarts";

function App() {
  const [dummys, setDummy] = useState(db);
  const [clickedItem, setClickedItem] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoginUser, setIsLoginUser] = useState(false);

  function searchDummys(val) {
    const regex = new RegExp(val.target.value.toLowerCase());
    let builder = db.filter((e) => {
      if (e.name.toLowerCase().match(regex)) {
        return e;
      }
    });

    setDummy(builder);
  }

  function addCartItem(item) {
    const closeModalProduct = document.getElementById("closeModalProduct");
    Swal.fire({
      icon: "success",
      text: "Berhasil Menambahkan Barang!",
    });
    closeModalProduct.click();
    setCartItems([...cartItems, item]);
  }

  function deleteCartItem(index) {
    let cart = [...cartItems];
    cart.splice(index, 1);
    setCartItems(cart);
    Swal.fire({
      icon: "success",
      text: "Berhasil Menghapus Barang!",
    });
  }

  return (
    <>
      <Navbar isLoginUser={isLoginUser} />
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            
          <div className="py-1">
              <div className="input-group mb-3 mt-3">
                <span className="input-group-text" id="basic-addon1">
                  🔍
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={searchDummys}
                />
              </div>
            </div>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {dummys.map((e) => {
                return <ItemCard setClickData={setClickedItem} item={e} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Modal isLoginUser={isLoginUser} item={clickedItem} addCartItem={addCartItem} />
      <ModalLogin loginFunction={setIsLoginUser} />
      <ShowCarts cartItems={cartItems} deleteCartItem={deleteCartItem} />
    </>
  );
}

export default App;
