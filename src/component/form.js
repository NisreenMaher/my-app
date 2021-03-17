import { useState } from "react";
const Form = ({ addArticles }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleChangeTitle = (event) => setTitle(event.target.value);
  const handleChangeBody = (event) => setBody(event.target.value);
  const handleSumbit = (event) => {
    event.preventDefault();
    addArticles({ title: title, body: body });
  };
  return (
    <form onSubmit={handleSumbit}>
      <h1>Add Article</h1>
      <label>Enter title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChangeTitle}
      />
      <label>Enter body</label>
      <input
        type="text"
        name="body"
        style={{ width: "61%" }}
        value={body}
        onChange={handleChangeBody}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
export default Form;
