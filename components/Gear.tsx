import useScrollPosition from "@react-hook/window-scroll";
import GearSVG from "./Gears/GearSVG";

const Gear = ({ invert = false, isBig = false, gearType = 1, className }) => {
  let scrollY = useScrollPosition(60);

  if (isBig) {
    scrollY /= 16;
  } else {
    scrollY /= 8;
  }
  return (
    <div
      className={` ${!isBig ? "w-16 h-16" : "w-24 h-24"} relative ${className}`}
    >
      {/* Back to front */}
      <GearSVG
        gearType={gearType}
        className={` ${
          !isBig ? "w-16 h-16" : "w-24 h-24"
        } opacity-90 absolute transform-gpu`}
        color="#fff"
        style={{
          transform: `rotate(${invert ? scrollY : -scrollY}deg)`,
          top: "6px",
        }}
      />
      <GearSVG
        gearType={gearType}
        className={` ${
          !isBig ? "w-16 h-16" : "w-24 h-24"
        } opacity-90 absolute top-1`}
        color="#D8B14D"
        style={{
          transform: `rotate(${invert ? scrollY : -scrollY}deg)`,
        }}
      />
      <GearSVG
        gearType={gearType}
        className={` ${!isBig ? "w-16 h-16" : "w-24 h-24"} absolute`}
        color="#643D00"
        style={{
          transform: `rotate(${invert ? scrollY : -scrollY}deg)`,
        }}
      />
      <GearSVG
        gearType={gearType}
        className={` ${
          !isBig ? "w-16 h-16" : "w-24 h-24"
        } opacity-90 absolute -top-2`}
        color="##6B4500"
        style={{
          transform: `rotate(${invert ? scrollY : -scrollY}deg)`,
        }}
      />
    </div>
  );
};

export default Gear;
