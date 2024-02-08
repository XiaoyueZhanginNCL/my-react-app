import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    if (name === "title") {
      setNewNote((preValue) => {
        return {
          title: value,
          content: preValue.content,
        };
      });
    } else {
      setNewNote((preValue) => {
        return {
          title: preValue.title,
          content: value,
        };
      });
    }
  }

  function handleClick(event) {
    event.preventDefault();
    props.onAdd(newNote);
    //在form中的button点击后默认行为是刷新页面
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={newNote.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={newNote.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
