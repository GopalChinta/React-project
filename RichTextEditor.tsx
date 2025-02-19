import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "./RichTextEditor.css";

export default function RichTextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div className="editor-container">
      <h2>Rich Text Editor</h2>
      <div
        className="editor-box"
        onClick={() => document.getElementById("editor")?.focus()}
      >
        <Editor editorState={editorState} onChange={setEditorState} />
      </div>
    </div>
  );
}
