export default function List({ activities, weatherStatus, onDeleteActivity }) {
  return (
    <>
      <h4>
        {weatherStatus === true
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside. Here's what you can do now:"}
      </h4>
      <ul className="list">
        {activities.map(({ key, name }) => (
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
