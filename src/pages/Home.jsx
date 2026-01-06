import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <div style={styles.glow}></div>

      <h1 style={styles.title}>
        Dev<span style={{ color: "#22d3ee" }}>Source</span>
      </h1>

      <p style={styles.text}>
        A developer-first community where learning meets real-world
        building. We grow by shipping, failing, and improving together.
      </p>

      {/* Buttons */}
      <div style={styles.buttonGroup}>
        <Button
          text="Lead Portfolio"
          onClick={() => navigate("/khushi")}
        />
      </div>
    </div>
  );
}

export default Home;

/* ---------- styles ---------- */
const styles = {
  wrapper: {
    width: "100vw",
    minHeight: "100vh",
    background: "#0b0b0f",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px",
    position: "relative",
    overflow: "hidden",
  },
  glow: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background:
      "radial-gradient(circle, rgba(124,58,237,0.35), transparent 60%)",
    filter: "blur(80px)",
    top: "-100px",
    left: "-100px",
  },
  title: {
    fontSize: "56px",
    fontWeight: "800",
    marginBottom: "20px",
  },
  text: {
    maxWidth: "600px",
    fontSize: "18px",
    color: "#cbd5f5",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  buttonGroup: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};
