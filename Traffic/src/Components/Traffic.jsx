import React, { useEffect, useState } from "react";

const Traffic = () => {
  const lights = ["red", "yellow", "green"];
  const durations = [30, 25, 5]; // Duration in seconds for each light
  const [active, setActive] = useState(0);
  const [timer, setTimer] = useState(durations[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          // Move to next light
          setActive((prevActive) => (prevActive + 1) % lights.length);
          return durations[(active + 1) % lights.length]; // Reset timer
        }
        return prev - 1; // Countdown
      });
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [active]);

  const styles = {
    container: {
      width: 80,
      padding: 10,
      background: "#111",
      borderRadius: 10,
      textAlign: "center",
    },
    light: {
      width: 60,
      height: 60,
      borderRadius: "50%",
      margin: "10px auto",
    },
    timer: {
      color: "#fff",
      background: "#333",
      fontSize: 20,
      marginTop: 10,
      width: 60,
      marginLeft: 20,
    },
  };

  return (
    <>
      <div style={styles.timer}>{timer}s</div>

      <div style={styles.container}>
        {lights.map((light, index) => (
          <div
            key={light}
            style={{
              ...styles.light,
              backgroundColor: active === index ? light : "#333",
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Traffic;
