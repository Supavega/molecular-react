import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import ListEdition from "../ListEdition";
import { addContentToEnd } from "../../../utils/parser";
import useFileList from "../../../hooks/fileHook/listFileHook";

export default function MarkdownAddContent({mdcontent, fileId}) {

  const [selectedType, setSelectedType] = useState("paragraph");
  const [contentValue, setContentValue] = useState("");
  const { saveFile } = useFileList();

  const types = [
    { name: "heading" },
    { name: "paragraph" },
    { name: "code" },
    { name: "ordered-list" },
    { name: "unordered-list"}
  ];

  const handleChangeContentValue = (e) => {
    setContentValue(e.target.value);
  };

  const createContent = async () => {
    const res = addContentToEnd(mdcontent, selectedType.name, contentValue);
    await saveFile(fileId, res);
  };



  const displayContentEditor = () => {
    if(selectedType) {
      switch (selectedType.name) {
        case "paragraph":
          return <InputTextarea value={contentValue} onChange={handleChangeContentValue} />;
        case "heading":
          return <InputTextarea value={contentValue} onChange={handleChangeContentValue} />;
        case "code":
          return <InputTextarea value={contentValue} onChange={handleChangeContentValue} />;
        case "ordered-list":
          return <ListEdition ordered mdcontent={mdcontent} fileId={fileId} />;
        case "unordered-list":
          return <ListEdition mdcontent={mdcontent} fileId={fileId} />;
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
      {(selectedType.name !== "ordered-list" && selectedType.name !== "unordered-list") && 
      <Button onClick={() => {createContent()}} label="add content"/>
    }
    </>
  )
}