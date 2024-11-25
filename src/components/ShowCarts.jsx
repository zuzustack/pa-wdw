import { useEffect, useState } from "react";

function ShowCarts(props) {
    const { cartItems, deleteCartItem } = props;
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
      let totalPrice = 0;
      cartItems.forEach((e) => {
        totalPrice += e.salePrice;
      });
      setTotalPrice(totalPrice.toFixed(2));
    });
  
    return (
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Carts
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          {cartItems.length > 0
            ? cartItems.map((e, i) => (
                <div className="row">
                  <div className="col-2">
                    <img className="w-100 h-50" src={e.thumbnailImage} alt="" />
                  </div>
                  <div className="col-5">
                    <p>{e.name}</p>
                  </div>
                  <div className="col-3">
                    <small className="fs-6 fw-bold d-block">
                      💲 {e.salePrice}
                    </small>
                  </div>
                  <div className="col-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCartItem(i)}
                    >
                      🚮
                    </button>
                  </div>
                </div>
              ))
            : ""}
            <hr />
          <div className="row">
            <div className="col-8">
              <p>Total</p>
            </div>
            <div className="col-4">
              <small className="fs-6 fw-bold d-block">💲 {totalPrice}</small>
            </div>
            <div className="col-12">
              <div className="btn btn-success">✅ Checkout</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default ShowCarts;