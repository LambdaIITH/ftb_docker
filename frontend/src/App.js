import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(function () {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:8000/");

        const resData = await response.json();

        setData(resData.message);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    }
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);
  return (
    <div>
      {isLoading ? <div>loading...</div> : <div className="main">{data}</div>}
    </div>
  );
}

export default App;
