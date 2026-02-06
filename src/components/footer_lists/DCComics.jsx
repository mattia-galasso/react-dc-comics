export default function DCComics({ dcComics }) {
  return (
    <>
      <ul>
        {dcComics.map((listItem, index) => (
          <li key={index}>
            <a href={listItem.url}>{listItem.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
