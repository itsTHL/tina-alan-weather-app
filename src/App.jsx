import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import { uid } from "uid";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  const [weatherStatus, setWeatherStatus] = useState(null);

  // fetch weather API on initial render only
  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        const weatherData = await response.json();
        console.log("Fetched Data as JSON: ", weatherData);

        setWeatherStatus(weatherData);

        const body = document.getElementById("body");
        body.style.backgroundImage =
          weatherData.isGoodWeather === true
            ? "url('/bg-goodWeather.jpg')"
            : "url('/bg-badWeather.jpg')";
      } catch (error) {
        console.error("Could not fetch data: ", error);
      }
    }

    fetchWeatherData();

    const intervalId = setInterval(fetchWeatherData, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // <-- on initial render only

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, key: uid() }]);
  }

  if (!weatherStatus) {
    return <p>Is it raining...?</p>;
  }

  // replacing global isGoodWeather variable
  // weather state should equal the response received from API
  const { isGoodWeather } = weatherStatus;

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  function handleDeleteActivity(key) {
    setActivities(activities.filter((activity) => activity.key !== key));
  }

  return (
    <>
      {/* add heading to display condition emoji and temperature */}
      <h1 className="theWeather">
        <span>{weatherStatus.condition}</span>
        <span>{weatherStatus.temperature}°C</span>
      </h1>
      <List
        activities={filteredActivities}
        weatherStatus={isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
