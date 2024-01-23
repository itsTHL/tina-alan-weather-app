export default function NavButtons({ locations, onClick }) {
  return (
    <>
      {locations.map((location) => (
        <button
          key={location}
          type="button"
          className="locationBtn"
          onClick={() => onClick(location)}
        >
          {location}
        </button>
      ))}
    </>
  );
}
