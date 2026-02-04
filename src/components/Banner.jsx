import digitalComics from "../assets/img/buy-comics-digital-comics.png";
import merchandise from "../assets/img/buy-comics-merchandise.png";
import subscription from "../assets/img/buy-comics-subscriptions.png";
import shopLocator from "../assets/img/buy-comics-shop-locator.png";
import powerVisa from "../assets/img/buy-dc-power-visa.svg";

export default function Banner() {
  return (
    <>
      <section id="bannerSection">
        <div className="container">
          <ul id="bannerList">
            <li>
              <img className="iconComics" src={digitalComics} alt="Icon" />
              DIGITAL COMICS
            </li>
            <li>
              <img className="iconBanner" src={merchandise} alt="Icon" />
              DC MERCHANDISE
            </li>
            <li>
              <img className="iconBanner" src={subscription} alt="Icon" />
              SUSCRIPTION
            </li>
            <li>
              <img className="iconLocator" src={shopLocator} alt="Icon" />
              COMIC SHOP LOCATOR
            </li>
            <li>
              <img className="iconBanner" src={powerVisa} alt="Icon" />
              DC POWER VISA
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
