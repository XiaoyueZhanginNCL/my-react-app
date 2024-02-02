import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((v) => {
        return <Note key={v.key} title={v.title} content={v.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;

