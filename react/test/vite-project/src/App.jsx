import Card from "./components/Card/Card";
import Main from "./components/Main/Main";
import AllTodos from "./components/AllTodos/AllTodos";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Main />
      <h2>Liste TODOS</h2>
      <AllTodos otherProps="blalba">
        <p>Hello world</p>
        <ul>
          <li>Blablo</li>
        </ul>
      </AllTodos>

      <Card title="mon titre">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          voluptatem magni, vero laboriosam sunt facere delectus nobis quisquam
          nam. Labore!
        </p>
        <p>Lorem, ipsum.</p>
      </Card>
    </>
  );
}

export default App;
