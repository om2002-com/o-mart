import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <h4>{product.name}</h4>
        <p>₹{product.price}</p>
        <button>Add</button>
      </div>
    </div>
  );
}

export default ProductCard;
