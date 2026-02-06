import ComicsCard from "./ComicsCard";

export default function ComicsList({ comics }) {
  return (
    <ul className="row gx-0 gy-3" id="comics-list">
      {comics.map((comic) => (
        <ComicsCard key={comic.id} thumb={comic.thumb} series={comic.series} />
      ))}
    </ul>
  );
}
