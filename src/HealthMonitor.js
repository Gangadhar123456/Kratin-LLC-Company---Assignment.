import React, { useState, useEffect } from "react";

const HealthMonitor = () => {
  const [heartRate, setHeartRate] = useState(0);
  const [bloodPressure, setBloodPressure] = useState({ systolic: 0, diastolic: 0 });

  useEffect(() => {
    // Simulate fetching data from an external source
    const fetchData = async () => {
      const heartRateData = await fetchHeartRate();
      const bloodPressureData = await fetchBloodPressure();
      setHeartRate(heartRateData);
      setBloodPressure(bloodPressureData);
    };

    fetchData();
  }, []);

  const fetchHeartRate = () => {
    // Simulate an API call to fetch heart rate data
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomHeartRate = Math.floor(Math.random() * (100 - 60 + 1) + 60);
        resolve(randomHeartRate);
      }, 1000);
    });
  };

  const fetchBloodPressure = () => {
    // Simulate an API call to fetch blood pressure data
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomSystolic = Math.floor(Math.random() * (140 - 120 + 1) + 120);
        const randomDiastolic = Math.floor(Math.random() * (90 - 70 + 1) + 70);
        resolve({ systolic: randomSystolic, diastolic: randomDiastolic });
      }, 1000);
    });
  };

  const analyzeHealth = () => {
    // Perform health analysis based on the collected data
    // You can add your logic here to analyze the health parameters and provide feedback/recommendations
    // For this prototype, we will simply display the current values
    console.log("Heart Rate:", heartRate);
    console.log("Blood Pressure:", bloodPressure);
  };

  return (
    <div>
      <h2>Health Monitor</h2>
      <p>Heart Rate: {heartRate}</p>
      <p>Blood Pressure: {bloodPressure.systolic}/{bloodPressure.diastolic}</p>
      <button onClick={analyzeHealth}>Analyze Health</button>
    </div>
  );
};

export default HealthMonitor;
