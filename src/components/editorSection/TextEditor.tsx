import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "draft-js/dist/Draft.css";
import "../../styles/editorSection/TextEditor.css";

import { TextEditorProps } from "../../types/propTypes";
import { useEffect } from "react";

function TextEditor({ editorState, setEditorState, editor }: TextEditorProps) {
  useEffect(() => {
    editor.current?.focusEditor();
  }, []);

  return (
    <main className="editor">
      <section className="editor__page">
        <Editor
          ref={editor}
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbarHidden
          placeholder="Type @ to insert"
        />
      </section>
    </main>
  );
}

export default TextEditor;
