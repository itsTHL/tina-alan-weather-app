// import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import { uid } from "uid";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, key: uid() }]);
  }

  const isGoodWeather = true;

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <>
      <List activities={filteredActivities} weatherStatus={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
