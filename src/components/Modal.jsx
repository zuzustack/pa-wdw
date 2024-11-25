import { useEffect, useState } from "react";

function Modal(props) {
    const { item, addCartItem, isLoginUser } = props;
    return (
      <div
        class="modal modal-lg fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Information Product
              </h1>
              <button
                type="button"
                id="closeModalProduct"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-4">
                  <div className="image-frame">
                    <img src={item.image} className="item-photo" alt="" />
                  </div>
                </div>
                <div className="col-8">
                  <small className="fs-5">{item.name}</small>
                  <small className="fs-6 fw-bold d-block">
                    💲 {item.salePrice}
                  </small>
                  <small className="card-name">
                    ⭐ {item.bestSellingRank} |{" "}
                    {Intl.NumberFormat("en", { notation: "compact" }).format(
                      item.customerReviewCount
                    )}
                    + Ulasan
                  </small>
                  <hr className="mb-0" />
                  <small className="d-block">Description</small>
                  <p>{item.shortDescription}</p>
                  <small className="d-block">Categories</small>
                  <ul>
                    {item.categories
                      ? item.categories.map((e) => {
                          return <li>{e}</li>;
                        })
                      : "-"}
                  </ul>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              {
                isLoginUser ? <button
                 type="button"
                 onClick={() => {
                   addCartItem(item);
                 }}
                 class="btn btn-success"
               >
                 Add to Cart
               </button> : ""
              }
              
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Modal