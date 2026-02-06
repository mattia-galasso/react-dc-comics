export default function Shop({ shop }) {
  return (
    <>
      <ul>
        {shop.map((listItem, index) => (
          <li key={index}>
            <a href={listItem.url}>{listItem.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
