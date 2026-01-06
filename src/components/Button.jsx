function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "14px 28px",
        borderRadius: "10px",
        border: "none",
        background: "linear-gradient(135deg, #7c3aed, #22d3ee)",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      }}
    >
      {text}
    </button>
  );
}

export default Button;
