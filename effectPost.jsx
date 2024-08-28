// You can work here or download the template
// Your components go here
import { useState, useEffect } from "react";

const Card = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    let ignore = false;
    const getItem = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        if (!ignore) {
          setItem(data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    getItem();

    return () => {
      ignore = true;
    };
  }, []);

  return item.map((p) => {
    return (
      <div key={p.title}>
        <span>{p.title}</span>
        <br />
        <p>{p.body}</p>
      </div>
    );
  });
};

const App = () => {
  return <div>{<Card />}</div>;
};

export default App;
