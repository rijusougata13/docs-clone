import { useState } from "react";
import EditorSection from "./components/EditorSection";
import Toolbar from "./components/Toolbar";
import "./styles/App.css";

function App() {
  const [toolbarOpen, setToolbarOpen] = useState<boolean>(true);

  return (
    <div className="app">
      <Toolbar toolbarOpen={toolbarOpen} />
      <EditorSection
        toolbarOpen={toolbarOpen}
        setToolbarOpen={setToolbarOpen}
      />
    </div>
  );
}

export default App;
