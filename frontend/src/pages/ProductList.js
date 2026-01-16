import { useEffect, useState } from "react";
import API from "../api/axios";
import Header from "../components/Header";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products", err);
    }
  };

  return (
    <>
      <Header />

      <div style={{ padding: "20px", background: "#000", minHeight: "100vh" }}>
        <h2 style={{ color: "white" }}>Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((p) => (
            <div
              key={p._id}
              style={{
                background: "#111",
                padding: "15px",
                borderRadius: "10px",
                color: "white",
              }}
            >
              <img
                src={p.image || "https://via.placeholder.com/200"}
                alt={p.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <h3>{p.name}</h3>
              <p>₹{p.price}</p>

              <button
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "8px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
