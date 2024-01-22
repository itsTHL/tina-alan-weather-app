export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;

    const newActivity = {
      name: formElements.name.value,
      isForGoodWeather: formElements.isForGoodWeather.checked,
    };
    console.log(newActivity);

    onAddActivity(newActivity);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new Activity</h1>
      <label htmlFor="name">
        Name:
        <input name="name" type="text" id="name" />
      </label>
      <br />
      <label htmlFor="isForGoodWeather">
        Good-weather activity:
        <input name="isForGoodWeather" type="checkbox" id="isForGoodWeather" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
