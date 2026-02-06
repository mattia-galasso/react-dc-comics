import FooterList from "./footer_lists/FooterList";
import logoFooter from "../assets/img/dc-logo-bg.png";
import Social from "./social";

export default function Footer() {
  return (
    <>
      <footer>
        <section id="DCFooter">
          <div className="container">
            <div id="footerMenu">
              <FooterList />
              {/* LOGO FOOTER */}
              <img src={logoFooter} alt="Logo DC" id="logoFooter" />
            </div>
          </div>
        </section>

        {/* SOCIAL */}
        <section id="socialSection">
          <div className="container" id="socialBox">
            <button className="btn btn-outline-primary" id="btnSignUp">
              SIGN-UP NOW!
            </button>
            <section>
              <Social />
            </section>
          </div>
        </section>
      </footer>
    </>
  );
}
