import { createRef, useState } from "react";
import { Editor, EditorState } from "draft-js";
import "../styles/EditorSection.css";
import { EditorSectionProps } from "../types/propTypes";
import Sidebar from "./Sidebar";
import TextEditor from "./editorSection/TextEditor";
import EditorToolbar from "./editorSection/EditorToolbar";

function EditorSection({ toolbarOpen, setToolbarOpen }: EditorSectionProps) {
  const editor = createRef<Editor>();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <section className="editorSection">
      <main className="editorSection__toolbar_and_textarea">
        <EditorToolbar
          toolbarOpen={toolbarOpen}
          setToolbarOpen={setToolbarOpen}
          editorState={editorState}
          setEditorState={setEditorState}
        />
        <TextEditor
          editorState={editorState}
          setEditorState={setEditorState}
          editor={editor}
        />
      </main>
      <Sidebar />
    </section>
  );
}

export default EditorSection;
