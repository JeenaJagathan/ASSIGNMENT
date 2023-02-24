import React, { useState } from "react";

function Product({ url,title,description,type,price,rating }) {
  const [liked, setLiked] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [shared, setShared] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };

  const handleShare = () => {
    setShared(!shared);
  };

  const handlePurchase = () => {
    setPurchased(!purchased);
    !purchased ? console.log("Order placed") : console.log("Cancelled");
  };

  return (
    <div className="pdt">
      <img src={url} width="90" height="90" alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      <p>Type:{type}</p>
      <p>Price: ${price}</p>
      <p>Rating: {rating}/5</p>
      <button onClick={handleLike}>{liked ? "Unlike" : "Like"}</button>
      <button onClick={handleShare}>{shared ? "Unshare" : "Share"}</button>
      <button onClick={handlePurchase}>
        {purchased ? "Cancel" : "Purchase"}
      </button>
      <br />
    </div>
  );
}

export default Product;
