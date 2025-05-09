import "./Header.css";

interface Props {
  user: string;
}

const Header = ({ user }: Props) => {
  return (
    <header className="Header">
      <h1> Icecream Wars</h1>
      <p>Welcome, {user} </p>
    </header>
  );
};

export default Header;
