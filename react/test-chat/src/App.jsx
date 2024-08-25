import Header from "./components/Header";
import Footer from "./components/Footer";
import RoundBorder from "./components/RoundBorder";
import FlexboxContainer from "./components/FlexboxContainer";

function App() {
  return (
    <div>
      <RoundBorder color={"red"}>
        <Header content={"Hello World"} />
      </RoundBorder>

      <RoundBorder color={"blue"}>
        <Footer content={"Made with React"} />
      </RoundBorder>

      <FlexboxContainer>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim optio
            assumenda atque accusantium odit. Assumenda iure architecto
            veritatis maiores consequuntur necessitatibus dolore laboriosam
            voluptate minus, sapiente placeat blanditiis consectetur fugiat.
          </p>
        </div>

        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim optio
            assumenda atque accusantium odit. Assumenda iure architecto
            veritatis maiores consequuntur necessitatibus dolore laboriosam
            voluptate minus, sapiente placeat blanditiis consectetur fugiat.
          </p>
        </div>
      </FlexboxContainer>
    </div>
  );
}

export default App;
