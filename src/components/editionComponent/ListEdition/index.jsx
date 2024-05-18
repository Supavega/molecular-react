import { useState } from "react";
import { addContentToEnd } from "../../../utils/parser";
import { Button } from "primereact/button";
import useFileList from "../../../hooks/fileHook/listFileHook";


export default function ListEdition ({ ordered, mdcontent, fileId }) {
  const [items, setItems] = useState([""]);
  const { saveFile } = useFileList();

  const handleInputChange = (event, index) => {
    const newItems = [...items];
    newItems[index] = event.target.value;
    setItems(newItems);
  };

  const handleAddClick = () => {
    setItems([...items, ""]);
  };

  const addListContent = async () => {
    const listType = ordered ? 'ordered-list' : 'unordered-list';
    const res = addContentToEnd( mdcontent, listType, items);
    await saveFile(fileId, res);
  };

  return (
    <>
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
      <Button onClick={addListContent}>Add list content</Button>
    </>
  );
}