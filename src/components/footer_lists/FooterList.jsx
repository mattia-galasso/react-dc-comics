import Dc from "./DC";
import DCComics from "./DCComics";
import Shop from "./Shop";
import Sites from "./Sites";

export default function FooterList() {
  const dcComicsList = [
    {
      url: "#",
      text: "Characters",
    },
    {
      url: "#",
      text: "Comics",
    },
    {
      url: "#",
      text: "Movies",
    },
    {
      url: "#",
      text: "TV",
    },
    {
      url: "#",
      text: "Games",
    },
    {
      url: "#",
      text: "Videos",
    },
    {
      url: "#",
      text: "News",
    },
  ];

  const shopList = [
    {
      url: "#",
      text: "Shop DC",
    },
    {
      url: "#",
      text: "Shop DC Collectibles",
    },
  ];

  const dcList = [
    {
      url: "#",
      text: "Terms Of Use",
    },
    {
      url: "#",
      text: "Privacy Policy (New)",
    },
    {
      url: "#",
      text: "Ad Choices",
    },
    {
      url: "#",
      text: "Advertising",
    },
    {
      url: "#",
      text: "Jobs",
    },
    {
      url: "#",
      text: "Subscriptions",
    },
    {
      url: "#",
      text: "Talent Workshops",
    },
    {
      url: "#",
      text: "CPSC Certificates",
    },
    {
      url: "#",
      text: "Ratings",
    },
    {
      url: "#",
      text: "Shop Help",
    },
    {
      url: "#",
      text: "Contact Us",
    },
  ];

  const sitesList = [
    {
      url: "#",
      text: "DC",
    },
    {
      url: "#",
      text: "MAD Magazine",
    },
    {
      url: "#",
      text: "DC Kids",
    },
    {
      url: "#",
      text: "DC Universe",
    },
    {
      url: "#",
      text: "DC Power Visa",
    },
  ];

  return (
    <>
      <div id="list-box">
        {/* DC COMICS COMPONENT */}
        <div className="listTitle">DC COMICS</div>
        <DCComics dcComics={dcComicsList} />

        {/* SHOP SECTION */}
        <div className="listTitle">SHOP</div>
        <Shop shop={shopList} />

        {/* DC SECTION */}
        <div className="listTitle">DC</div>
        <Dc dc={dcList} />

        {/* SITES SECTION */}
        <div className="listTitle">SITES</div>

        <Sites sites={sitesList} />
      </div>
    </>
  );
}
