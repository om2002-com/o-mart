const Navbar = () => {
  return (
    <div style={{
      background: "#000",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2 style={{ color: "#e50914" }}>LocalMart</h2>
      <div>
        <button>Cart</button>
      </div>
    </div>
  );
};

export default Navbar;
