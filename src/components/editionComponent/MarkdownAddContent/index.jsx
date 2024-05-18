import { addContent } from "../../../utils/parser";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { useState, useEffect } from "react";

export default function MarkdownAddContent({mdcontent}) {

  const [selectedType, setSelectedType] = useState(null);
  const [contentValue, setContentValue] = useState(null);

  const types = [
    { name: "heading" },
    { name: "paragraph" },
    { name: "code" },
    { name: "ordered-list" },
    { name: "unordered-list"}
  ];

  /**
   * type : String, to chose the type content 
   * value : the value of the content 
   * ordered: Only if it's a list 
   * code : "to add code"
   */
  const createContent = (type, value, ordered) => {
    addContent(mdcontent, type, value, ordered)
  };

  useEffect(() => {
    console.log("selectedType", selectedType)
  }, [selectedType])

  const displayContentEditor = () => {
    if(selectedType) {
      switch (selectedType.name) {
        case "paragraph":
          return <InputTextarea value="my paragraph" />;
        case "heading":
          return <InputTextarea value="heading" />;
        case "code":
          return <InputTextarea value="my code" />;
        case "ordered-list":
          return <InputTextarea value="make list component" />;
        case "unordered-list":
          return <InputTextarea value="unordered list" />;
      }
    }
  };

  return (
    <>
      <Dropdown 
        value={selectedType}
        onChange={(e) => setSelectedType(e.value)}
        options={types}
        optionLabel="name"
        placeholder="Select a type"
      />
      {displayContentEditor()}
      <Button label="add content"/>
    </>
  )
}