export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    event.target.reset();
    event.target.elements.name.focus();
  }

  onAddActivity(data);

  return (
    <>
      <h1>I am a activity</h1>
      <label htmlFor="name">
        <input name="name" type="text" id="name" />
      </label>

      <label htmlFor="isForGoodWeather">
        <input name="isForGoodWeather" type="checkbox" id="isForGoodWeather" />
      </label>
      <button type="submit">Submit</button>
    </>
  );
}
