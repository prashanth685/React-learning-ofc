import React, { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("en");
  const translations = {
    en: {
      title: "Welcome to Our Website",
      about: "This is a simple information page.",
      contact: "Contact Us",
      description: "We provide web development services.",
    },
    hi: {
      title: "हमारी वेबसाइट में आपका स्वागत है",
      about: "यह एक साधारण जानकारी पृष्ठ है।",
      contact: "संपर्क करें",
      description: "हम वेब डेवलपमेंट सेवाएं प्रदान करते हैं।",
    },
  };

  const t = translations[language];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>

      <h1>{t.title}</h1>
      <p>{t.about}</p>
      <p>{t.description}</p>
      <button>{t.contact}</button>
    </div>
  );
}
