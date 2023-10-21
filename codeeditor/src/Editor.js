import React, { useState } from "react";
import "./Editor.css";

function Editor() {
  const [code, setCode] = useState("");
  const [isLocked, setIsLocked] = useState(false);

  // Here Function is used for copy the code from the Clipboard .
  function handleCopy() {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        alert("Code Copied");
      })
      .catch((error) => {
        console.error("Copy failed: ", error);
        alert("Copy failed. Please try again.");
      });
  }

  // Here Indentation code  is used to  adding the space at the Beginning of each line .
  function handleSave() {
    if (code) {
      const indentedCode = code
        .split("\n")
        .map((line) => "  " + line)
        .join("\n");
      setCode(indentedCode);
      alert("Code Saved");
    } else {
      alert("Your code is empty , please write the code !");
    }
  }

  // This Function is used for toggle the Lock/Unlock the button.
  function handleLock() {
    setIsLocked(!isLocked);
  }

  return (
    <div className="edit">
      <textarea
        value={code}
        onChange={(e) => !isLocked && setCode(e.target.value)}
        placeholder=" Enter the code"
        className="edit_input"
      />
      <div className="button-container">
        <button onClick={handleSave} className="BtnElement">
          Save
        </button>
        <button onClick={handleLock} className="BtnElement">
          {isLocked ? "Unlock" : "Lock"}
        </button>
        <button onClick={handleCopy} className="BtnElement">
          Copy
        </button>
      </div>
    </div>
  );
}

export default Editor;
