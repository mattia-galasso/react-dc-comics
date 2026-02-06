export default function Sites({ sites }) {
  return (
    <>
      <ul>
        {sites.map((listItem, index) => (
          <li key={index}>
            <a href={listItem.url}>{listItem.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
