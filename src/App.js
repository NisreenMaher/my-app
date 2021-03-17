import { useEffect, useState } from "react";
import "./App.css";
import MyArtical from "./component/ArticleB";
import Form from "./component/form";

var articalsData = [];
for (var i = 0; i < 6; i++) {
  articalsData[i] = {
    title: "New Blog Title" + (i + 1),
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  };
}

function App() {
  if (localStorage.getItem("array") === null)
    localStorage.setItem("array", JSON.stringify(articalsData));
  const [array, setArray] = useState(JSON.parse(localStorage.getItem("array")));

  const addArticles = (data) => {
    const oldArray = JSON.parse(localStorage.getItem("array"));
    oldArray[oldArray.length] = data;
    setArray(oldArray);
    localStorage.setItem("array", JSON.stringify(oldArray));
    //setRandom(Math.random());
  };

  return (
    <div>
      <div>
        <Form addArticles={addArticles} />
        <div className="flex">
          {array.map((e, index) => {
            return (
              <MyArtical
                key={"art-" + index}
                title={e.title}
                body={e.body}
                onClick={() => alert(e.title + "\n" + e.body)}
              />
            );
          })}
        </div>
      </div>

      <br />
    </div>
  );
}

export default App;
