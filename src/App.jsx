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
  console.log(activities);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, key: uid() }]);
  }

  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
