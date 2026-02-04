import React, { useEffect, useState } from "react";
import axios from "axios";

const Captcha = () => {
  const [captcha, setCaptcha] = useState("");
  const [captchaId, setCaptchaId] = useState("");
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  const loadCaptcha = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/captcha");
      setCaptcha(res.data.captcha);
      setCaptchaId(res.data.id);
      setUserInput("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setMessage("Cannot load CAPTCHA. Is backend running?");
    }
  };

  useEffect(() => {
    loadCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/verify-captcha", {
        id: captchaId,
        userInput,
      });
      setMessage(res.data.message);
      loadCaptcha(); // refresh after success
    } catch (err) {
      setMessage(err.response?.data?.message || "Error verifying CAPTCHA");
      loadCaptcha(); // refresh after failure
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple CAPTCHA</h2>
      <div style={{ fontSize: "24px", fontWeight: "bold", margin: "20px" }}>
        {captcha}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter CAPTCHA"
          required
        />
        <button type="submit" style={{ marginLeft: "10px" }}>
          Verify
        </button>
      </form>
      <button onClick={loadCaptcha} style={{ marginTop: "10px" }}>
        Refresh CAPTCHA
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Captcha;
