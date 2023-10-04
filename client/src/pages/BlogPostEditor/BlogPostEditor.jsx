import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../graphql/mutations";
import ReactQuill from "react-quill";
import { ActionButton } from "../../components";
import { modules, formats } from "./editorOptions";
import "react-quill/dist/quill.snow.css";
import utilStyles from "../../styles/utilities.module.css";
import styles from "./BlogPostEditor.module.css";
import "./textEditor.css";

function BlogPostEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createPost, { loading }] = useMutation(CREATE_POST);

  const processContent = (content) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = content;
    const codeBlocks = wrapper.querySelectorAll("pre");

    codeBlocks.forEach((block) => {
      const codeEl = document.createElement("code");
      codeEl.innerHTML = block.innerHTML;
      codeEl.classList.add("language-javascript");
      block.innerHTML = "";
      block.appendChild(codeEl);
    });
    return wrapper.innerHTML;
  };

  const handleClick = () => {
    const processedContent = processContent(content);
    createPost({ variables: { title, content: processedContent } });
  };

  return (
    <div className={`${utilStyles.minHeight} ${styles.pageContainer}`}>
      <h1 className={styles.heading}>Create New Blog Post</h1>
      <div className={styles.textEditorContainer}>
        <form className={styles.titleInputGroup}>
          <label htmlFor="title">
            <h3>Blog Post Title</h3>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
        <ReactQuill
          className={styles.textEditor}
          theme="snow"
          value={content}
          onChange={(content) => setContent(content)}
          modules={modules}
          formats={formats}
        />
      </div>
      <div className={styles.saveButtonContainer}>
        <ActionButton
          text="Save Post"
          backgroundColor={"var(--color-button)"}
          handleClick={handleClick}
          isLoading={loading}
        />
      </div>
    </div>
  );
}

export default BlogPostEditor;
