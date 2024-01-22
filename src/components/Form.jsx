export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    event.target.reset();
    event.target.elements.name.focus();
    onAddActivity(data);
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
