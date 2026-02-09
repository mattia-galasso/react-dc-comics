import DCLogo from "../assets/img/dc-logo.png";

export default function Header() {
  return (
    <>
      <header className="container">
        <div className="navbarContainer">
          {/* LOGO IMAGE */}
          <div className="logo-container">
            <img className="DCLogoImage" src={DCLogo} alt="Logo DC" />
          </div>

          {/* NAVBAR */}
          <ul id="navbarList">
            <li>
              <a href="#">CHARACTERS</a>
            </li>
            <li className="active">
              <a href="#">COMICS</a>
            </li>
            <li>
              <a href="#">MOVIES</a>
            </li>
            <li>
              <a href="#">TV</a>
            </li>
            <li>
              <a href="#">GAMES</a>
            </li>
            <li>
              <a href="#">COLLECTIBLES</a>
            </li>
            <li>
              <a href="#">VIDEOS</a>
            </li>
            <li>
              <a href="#">FANS</a>
            </li>
            <li>
              <a href="#">NEWS</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
