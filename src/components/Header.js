import logo from "../img/starwars.png";
const Header = () => {
  return (
    <div className="ui internally celled centered grid">
      <h2 className="ui icon centered header" id="headerTop">
        <img src={logo} id="headerLogo"></img>
        <div className="content">Memory Game</div>
      </h2>
    </div>
  );
};

export default Header;
