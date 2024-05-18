import { useState } from "react";

export default function ListEdition ({ ordered }) {
  const [items, setItems] = useState([""]);

  const handleInputChange = (event, index) => {
    const newItems = [...items];
    newItems[index] = event.target.value;
    setItems(newItems);
  };

  const handleAddClick = () => {
    setItems([...items, ""]);
  };

  return (
    <div>
      {items.map((item, index) => (
        <input
          key={index}
          value={item}
          onChange={(event) => handleInputChange(event, index)}
        />
      ))}
      <button onClick={handleAddClick}>Add new item</button>
      {ordered ? (
        <ol>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}