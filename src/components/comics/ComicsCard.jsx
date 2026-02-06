export default function ComicsCard({ thumb, series }) {
  return (
    <li className="col col-2">
      <figure>
        <div className="comicImage">
          <img src={thumb} alt={series} />
        </div>
        <figcaption className="my-2">{series}</figcaption>
      </figure>
    </li>
  );
}
