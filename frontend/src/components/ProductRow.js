import ProductCard from "./ProductCard";

const ProductRow = ({ title, products, addToCart }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h3>{title}</h3>

      <div style={{
        display: "flex",
        overflowX: "auto"
      }}>
        {products.map(p => (
          <ProductCard
            key={p._id}
            product={p}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductRow;
