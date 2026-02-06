import facebook from "../assets/img/footer-facebook.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";
import pinterest from "../assets/img/footer-pinterest.png";
import periscope from "../assets/img/footer-periscope.png";

export default function Social() {
  return (
    <>
      <span>FOLLOW US</span>
      <ul id="socialList">
        <li>
          <img src={facebook} alt="Logo Social" />
        </li>
        <li>
          <img src={twitter} alt="Logo Social" />
        </li>
        <li>
          <img src={youtube} alt="Logo Social" />
        </li>
        <li>
          <img src={pinterest} alt="Logo Social" />
        </li>
        <li>
          <img src={periscope} alt="Logo Social" />
        </li>
      </ul>
    </>
  );
}
