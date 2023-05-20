import { EditorState } from "draft-js";
import { Dispatch, RefObject, SetStateAction } from "react";

export interface ToolbarProps {
  toolbarOpen: boolean;
}

export interface EditorSectionProps {
  toolbarOpen: boolean;
  setToolbarOpen: Function;
}
export interface EditorToolbarProps {
  toolbarOpen: boolean;
  setToolbarOpen: Function;
  editorState: EditorState;
  setEditorState: Dispatch<SetStateAction<EditorState>>;
}

export interface TextEditorProps {
  editor: RefObject<any>;
  editorState: EditorState;
  setEditorState: Dispatch<SetStateAction<EditorState>>;
}
