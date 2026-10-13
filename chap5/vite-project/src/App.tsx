import { useEffect, useState } from "react";
import "./App.css";
import type { UserType } from "./Home";
import type { ChangeEvent } from "react";
import Home from "./Home";



function App() {
const [id, setId] = useState("");
const [users, setUsers] = useState<UserType[]>();

useEffect(() => {
const idToGet = `https://jsonplaceholder.typicode.com/posts/${id}`;
fetch(idToGet).then((result) => {
      result.json().then((users) => {
console.log ("users updated", users);
setUsers(Array.isArray(users) ? users : [users]);
      });
    });
  }, [id]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
setId(e.target.value);
  };
 return (
<div>
<input value={message} onChange={onChange} />
<button onClick={onClick}>add</button>
<ul style={{ listStyleType: "none" }}>
          {optimisticMessages.map((m, i) => (
<li key={i}>{m.message}</li>
          ))}
</ul>
</div>
    );
  }
