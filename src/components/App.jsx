import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, setArr] = useState([]);

  function addNote(note) {
    setArr((preValue) => {
      return [...preValue, note];
    });
  }

  function deleteNote(key) {
    console.log(key);
    setArr(() => {
      return arr.filter((item, index) => {
        return index !== key;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {arr.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
