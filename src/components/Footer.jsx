import logoFooter from "../assets/img/dc-logo-bg.png";
import facebook from "../assets/img/footer-facebook.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";
import pinterest from "../assets/img/footer-pinterest.png";
import periscope from "../assets/img/footer-periscope.png";

export default function Footer() {
  return (
    <>
      <footer>
        <section id="DCFooter">
          <div className="container">
            <div id="footerMenu">
              {/* FIRST SECTION FOOTER */}
              <div>
                {/* DC COMICS FOOTER */}
                <div className="listTitle">DC COMICS</div>
                <ul>
                  <li>
                    <a href="#">Characters</a>
                  </li>
                  <li>
                    <a href="#">Comics</a>
                  </li>
                  <li>
                    <a href="#">Movies</a>
                  </li>
                  <li>
                    <a href="#">TV</a>
                  </li>
                  <li>
                    <a href="#">Games</a>
                  </li>
                  <li>
                    <a href="#">Videos</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                </ul>

                {/* SHOP FOOTER */}
                <div className="listTitle">SHOP</div>
                <ul>
                  <li>
                    <a href="#">Shop DC</a>
                  </li>
                  <li>
                    <a href="#">Shop DC Collectibles</a>
                  </li>
                </ul>
              </div>
              {/* SECOND FOOTER SECTION */}
              <div>
                {/* DC SECTION */}
                <div className="listTitle">DC</div>
                <ul>
                  <li>
                    <a href="#">Terms Of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy (New)</a>
                  </li>
                  <li>
                    <a href="#">Ad Choices</a>
                  </li>
                  <li>
                    <a href="#">Advertising</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Subscriptions</a>
                  </li>
                  <li>
                    <a href="#">Talent Workshops</a>
                  </li>
                  <li>
                    <a href="#">CPSC Certificates</a>
                  </li>
                  <li>
                    <a href="#">Ratings</a>
                  </li>
                  <li>
                    <a href="#">Shop Help</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              {/* THIRD FOOTER SECTION */}
              <div>
                <div className="listTitle">SITES</div>
                <ul>
                  <li>
                    <a href="#">DC</a>
                  </li>
                  <li>
                    <a href="#">MAD Magazine</a>
                  </li>
                  <li>
                    <a href="#">DC Kids</a>
                  </li>
                  <li>
                    <a href="#">DC Universe</a>
                  </li>
                  <li>
                    <a href="#">DC Power Visa</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* LOGO FOOTER */}
            <img src={logoFooter} alt="Logo DC" id="logoFooter" />
          </div>
        </section>

        {/* SOCIAL */}
        <section id="socialSection">
          <div className="container" id="socialBox">
            <button className="btn btn-outline-primary" id="btnSignUp">
              SIGN-UP NOW!
            </button>
            <section>
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
            </section>
          </div>
        </section>
      </footer>
    </>
  );
}
