import { useEffect, useState } from "react";

export default function List({
  activities,
  weatherStatus,
  currentLocation,
  onDeleteActivity,
}) {
  const [activitiesList, setActivitiesList] = useState(false);

  const filteredActivitiesLocation = activities.filter(
    (activity) => activity.currentLocation === currentLocation
  );

  useEffect(() => {
    setActivitiesList(activities.length > 0);
  }, [activities]);

  if (!activitiesList) {
    return (
      <h4>
        {weatherStatus === true
          ? "The weather is awesome! What could you do today?"
          : "Bad weather outside. Any ideas for inside-activities?"}
      </h4>
    );
  }

  return (
    <>
      <h4>Great idea! Wanna add more to the list?</h4>
      <ul className="list">
        {filteredActivitiesLocation.map(({ key, name }) => (
          <li key={key}>
            {name}
            <button
              id="closeButton"
              type="button"
              onClick={() => onDeleteActivity(key)}
            >
              ✖️
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
