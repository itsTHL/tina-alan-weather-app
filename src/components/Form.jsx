export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;

    const newActivity = {
      name: formElements.name.value,
      isForGoodWeather: formElements.isForGoodWeather.checked,
    };

    onAddActivity(newActivity);

    event.target.reset();
    event.target.elements.name.focus();
    console.log(newActivity);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Activity</h2>
      <section>
        <label htmlFor="name">
          Name:
          <input name="name" type="text" id="name" required />
        </label>
        <br />
        <label htmlFor="isForGoodWeather">
          Good-weather activity:
          <input
            name="isForGoodWeather"
            type="checkbox"
            id="isForGoodWeather"
          />
        </label>
      </section>
      <br />
      <button id="submitBtn" type="submit">
        Submit
      </button>
    </form>
  );
}
