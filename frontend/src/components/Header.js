import { logout } from "../utils/auth";
import logo from "../assets/omart-logo.svg";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 24px",
        background: "#0f0f0f",
      }}
    >
      {/* LOGO */}
      <img
        src={logo}
        alt="O-mart"
        style={{ height: "36px" }}
      />

      {/* LOGOUT */}
      <button
        onClick={logout}
        style={{
          background: "#E50914",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
