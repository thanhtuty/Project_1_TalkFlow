import { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const checkBackend = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/health");

      if (!response.ok) {
        throw new Error("Backend trả về lỗi");
      }

      const data = await response.json();

      setMessage(data.message);
    } catch {
      setError("Không kết nối được backend. Hãy kiểm tra server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>TaskFlow</h1>

      <button onClick={checkBackend} disabled={loading}>
        {loading ? "Đang kiểm tra..." : "Kiểm tra backend"}
      </button>

      {message && <p>{message}</p>}
      {error && <p role="alert">{error}</p>}
    </main>
  );
};

export default App;
