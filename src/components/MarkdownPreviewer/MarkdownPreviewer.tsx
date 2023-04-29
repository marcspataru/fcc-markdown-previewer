import React from "react";
import Editor from "../Editor/Editor";
import Preview from "../Preview/Preview";
import styles from "./MarkdownPreviewer.module.css";

const MarkdownPreviewer = () => {
  return (
    <div className={styles.markdownPreviewer}>
      <Editor></Editor>
      <Preview></Preview>
    </div>
  );
};

export default MarkdownPreviewer;
