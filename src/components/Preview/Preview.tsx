import { RootState } from "@/redux/store";
import { marked } from "marked";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import * as DOMPurify from "dompurify";
import styles from "./Preview.module.css";

const Preview = () => {
  const text = useSelector((state: RootState) => state.text.value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref || !ref.current) return;
    ref.current.innerHTML = DOMPurify.sanitize(
      marked.parse(text, { breaks: true })
    );
  }, [text]);

  return <div id="preview" ref={ref} className={styles.preview}></div>;
};

export default Preview;
