import { useCallback, useEffect, useState } from "react";
import Header from "../components/Header";

const WithUseCallback = () => {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState([]);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    console.log("handleClick changed");
    setLogs((prev) => [...prev, "handleClick changed"]);
  }, [handleClick]);

  return (
    <div>
      <div>With useCallback</div>
      <div>{count}</div>
      <button onClick={handleClick}>Click me</button>
      <ul>
        {" "}
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

const WithoutUseCallback = () => {
  const [count, setCount] = useState(0);
  /*
  const [logs, setLogs] = useState([]);
*/
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("handleClick changed");
    //setLogs((prev) => [...prev, "handleClick changed"]);
  }, [handleClick]);

  return (
    <>
      <div>Without UseCallback</div>
      <div>{count}</div>

      <button onClick={handleClick}>Click me</button>
      {/*}
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
      */}
    </>
  );
};

function UseCallbackPage() {
  return (
    <>
      <Header />
      <div>UseCallbackPage</div>

      <WithUseCallback />
      <WithoutUseCallback />
    </>
  );
}

export default UseCallbackPage;
