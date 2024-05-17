import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import PropTypes from "prop-types";
import MarkdownEditor from "../../editionComponent/MarkdownEditor";


export default function MarkdownSideBar({ visible, mdcontent, onHide, parsedContent }) {

  return (
    <Sidebar visible={visible} onHide={onHide}>
      <MarkdownEditor content={mdcontent} parsedContent={parsedContent}/>
    </Sidebar>
  )
}

MarkdownSideBar.propTypes = {
  visible: PropTypes.bool.isRequired,
  mdcontent: PropTypes.object,
  onHide: PropTypes.func
};