import "./Ad.tsx";

interface Props {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
}

const Ad = ({ flavor, fontSize, darkTheme }: Props) => {
  return (
    <div className={`Ad ${darkTheme ? "dark-theme" : ""}`}>
      <p className=" flavorVotes" style={{ fontSize: fontSize + "px" }}>
        {flavor}
      </p>
    </div>
  );
};

export default Ad;
