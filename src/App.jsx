import { useState } from "react";
import "./App.css";
import { uid } from "uid";
import Form from "./components/Form";

function App() {
  const [activities, setActivities] = useState("whatever");

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
