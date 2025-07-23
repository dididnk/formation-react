import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

export default function ListGroup({items, heading}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  if (items.length === 0) {
    return <p>No items found</p>;
  }

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        {items.map((city, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
