export default function NavButtons({ locations, onClick, currentLocation }) {
  return (
    <>
      {locations.map((location, i) => (
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

// export default function NavButtons({ locations, onClick, currentLocation }) {
//   return (
//     <>
//       {locations.map((location) => (
//         <button
//           key={location}
//           type="button"
//           className={`locationBtn${
//             location === "europe" && currentLocation === "europe"
//               ? " locationBtnStart"
//               : ""
//           }`}
//           onClick={() => onClick(location)}
//           autoFocus
//         >
//           {location}
//         </button>
//       ))}
//     </>
//   );
// }
