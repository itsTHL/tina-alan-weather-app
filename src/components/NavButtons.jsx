export default function NavButtons({ locations, onClick, currentLocation }) {
  return (
    <>
      {locations.map((location) => (
        <button
          key={location}
          type="button"
          className={
            location === currentLocation ? "locationBtn--focus" : "locationBtn"
          }
          onClick={() => onClick(location)}
        >
          {location}
        </button>
      ))}
    </>
  );
}
