function ItemCard(props) {
  const { item, setClickData } = props;

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setClickData(item)}
        className="card transition card-shop p-0 border-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <div className="card-body p-0">
          <div className="image-frame">
            <img loading="lazy" src={item.image} className="item-photo" alt="" />
          </div>
          <div className="p-2">
            <small className="card-name">{item.name}</small>
            <small className="fw-bold d-block">💲 {item.salePrice}</small>
            <small className="card-name">
              ⭐ {item.bestSellingRank} |{" "}
              {Intl.NumberFormat("en", { notation: "compact" }).format(
                item.customerReviewCount
              )}
              + Ulasan
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
