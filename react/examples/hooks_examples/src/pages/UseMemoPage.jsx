import { useMemo, useState } from "react";
import { styled } from "styled-components";
import Header from "../components/Header";

const WithUseMemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const expensiveCalculation = () => {
    console.log("expensiveCalculation");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  };

  const result = useMemo(() => {
    return expensiveCalculation();
  }, []);

  return (
    <div>
      <div>With useMemo</div>

      <div>{count}</div>
      <button onClick={handleClick}>Click me</button>

      <div>{result}</div>
    </div>
  );
};

const WithoutUseMemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const expensiveCalculation = () => {
    console.log("expensiveCalculation");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  };

  const result = expensiveCalculation();

  return (
    <div>
      <div>Without useMemo</div>

      <div>{count}</div>
      <button onClick={handleClick}>Click me</button>

      <div>{result}</div>
    </div>
  );
};

const DivFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

function UseMemoPage() {
  return (
    <>
      <Header />

      <div>UseMemoPage</div>
      <DivFlex>
        <WithUseMemo />
        <WithoutUseMemo />
      </DivFlex>
    </>
  );
}

export default UseMemoPage;
