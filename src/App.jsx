import { useState } from "react";
import reactLogo from "/src/assets/react.svg";
import htmlData from "./HtmlData";
import Student from "./Student";
import Course from "./Course";

function App() {
  const [view, setView] = useState("hello");
  const [name, setName] = useState("");

  function getData() {
    return {
      name: "Riya",
      course: "B.Tech CSE"
    };
  }

  const data = getData();

  return (
    
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      {/* React Logo */}
      <img src={reactLogo} alt="React Logo" width="100" />

      <h1>My React App </h1>
      <input 
  type="text" 
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

      <button onClick={() => setView("hello")}>Hello</button>
      <button onClick={() => setView("student")}>Student</button>
      <button onClick={() => setView("html")}>HTML</button>

      <hr />

      {view === "hello" && <h1>Hello {name || "World"} 👋</h1>}

      {view === "student" && (
        <>
          <Student name={name || data.name} />
          <Course course={data.course} />
        </>
      )}

      {view === "html" && (
        <div dangerouslySetInnerHTML={{ __html: htmlData }} />
      )}

    </div>
  );
}

export default App;
<input 
  type="text" 
  placeholder="Enter your name" 
/>