export default function Dc({ dc }) {
  return (
    <>
      <ul>
        {dc.map((listItem, index) => (
          <li key={index}>
            <a href={listItem.url}>{listItem.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
