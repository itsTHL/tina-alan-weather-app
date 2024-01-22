export default function List({ activities }) {
  return (
    <ul className="list">
      {activities.map(({ key, name }) => (
        <li key={key}>{name}</li>
      ))}
    </ul>
  );
}
