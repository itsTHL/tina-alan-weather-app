import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import { uid } from "uid";
import Form from "./components/Form";
import List from "./components/List";
import NavButtons from "./components/NavButtons";

function App() {
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  const [weatherStatus, setWeatherStatus] = useState(null);
  const [activitiesList, setActivitiesList] = useState(false);
  const [currentLocation, setCurrentLocation] = useLocalStorageState(
    "location",
    {
      defaultValue: "europe",
    }
  );

  const apiURL = `https://example-apis.vercel.app/api/weather/${currentLocation}`;

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(apiURL);
        const weatherData = await response.json();

        setWeatherStatus(weatherData);
        setActivitiesList(true);

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
  }, [apiURL]);

  function handleAddActivity(newActivity) {
    const isActivityThere = activities.some(
      (activity) =>
        activity.name.toLowerCase() === newActivity.name.toLowerCase()
    );

    if (isActivityThere) {
      alert(`You already added this activity!`);
    } else {
      setActivities([
        ...activities,
        { ...newActivity, key: uid(), currentLocation: currentLocation },
      ]);
    }
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
  console.log(activities);

  function handleLocation(location) {
    setCurrentLocation(location);
  }

  return (
    <>
      <nav>
        <NavButtons
          locations={["europe", "arctic", "sahara", "rainforest"]}
          onClick={handleLocation}
          currentLocation={currentLocation}
        />
      </nav>
      {/* add heading to display condition emoji and temperature */}
      <h1 className="theWeather">
        <span>{weatherStatus.condition}</span>
        <span>{weatherStatus.temperature}°C</span>
      </h1>
      <List
        activities={filteredActivities}
        weatherStatus={isGoodWeather}
        currentLocation={currentLocation}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
