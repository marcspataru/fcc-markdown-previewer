import { AppDispatch, RootState } from "@/redux/store";
import { changeText } from "@/redux/textSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Editor.module.css";

const Editor = () => {
  const text = useSelector((state: RootState) => state.text.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <textarea
      id="editor"
      onChange={(e) => dispatch(changeText(e.target.value))}
      value={text}
      className={styles.editor}
    ></textarea>
  );
};

export default Editor;
