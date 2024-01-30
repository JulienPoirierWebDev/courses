import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./components/Article";
import FlexboxContainer from "./components/FlexboxContainer";
import RoundBorder from "./components/RoundBorder";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <MainContainer>
      <FlexboxContainer
        justifyContent="space-between"
        alignItems="stretch"
        Wrap
        column
      >
        <Header title="Hello World" />
        <FlexboxContainer
          justifyContent="space-between"
          alignItems="stretch"
          wrap
        >
          <RoundBorder>
            <Article
              title={"La longue marche des chats"}
              imgPath={
                "https://focus.nouvelobs.com/2021/02/09/430/0/4197/2098/633/306/75/0/8fdf6f2_713581386-033-6378888-5fa6d2561fe23.jpg"
              }
              imgAlt={"Un petit chat tout mignon"}
            >
              <p>Les petits chats mignon envahissent internet</p>

              <h3>
                C'est un vrai phénomène de société, selon le Politologue Alain
                Chabat
              </h3>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                animi ducimus, eos cum sapiente tempora et praesentium
                necessitatibus soluta ipsa repellat, dolorum possimus maiores
                temporibus iure obcaecati vero. Delectus, culpa.
              </p>
            </Article>
          </RoundBorder>
          <RoundBorder>
            <Article
              title={"La longue marche des chats"}
              imgPath={
                "https://focus.nouvelobs.com/2021/02/09/430/0/4197/2098/633/306/75/0/8fdf6f2_713581386-033-6378888-5fa6d2561fe23.jpg"
              }
              imgAlt={"Un petit chat tout mignon"}
            >
              <p>Les petits chats mignon envahissent internet</p>

              <h3>
                C'est un vrai phénomène de société, selon le Politologue Alain
                Chabat
              </h3>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                animi ducimus, eos cum sapiente tempora et praesentium
                necessitatibus soluta ipsa repellat, dolorum possimus maiores
                temporibus iure obcaecati vero. Delectus, culpa. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Sit animi ducimus,
                eos cum sapiente tempora et praesentium necessitatibus soluta
                ipsa repellat, dolorum possimus maiores temporibus iure
                obcaecati vero. Delectus, culpa.
              </p>
            </Article>
          </RoundBorder>
          <RoundBorder>
            <Article
              title={"La longue marche des chats"}
              imgPath={
                "https://focus.nouvelobs.com/2021/02/09/430/0/4197/2098/633/306/75/0/8fdf6f2_713581386-033-6378888-5fa6d2561fe23.jpg"
              }
              imgAlt={"Un petit chat tout mignon"}
            >
              <p>Les petits chats mignon envahissent internet</p>

              <h3>
                C'est un vrai phénomène de société, selon le Politologue Alain
                Chabat
              </h3>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                animi ducimus, eos cum sapiente tempora et praesentium
                necessitatibus soluta ipsa repellat, dolorum possimus maiores
                temporibus iure obcaecati vero. Delectus, culpa.
              </p>
            </Article>
          </RoundBorder>
          <RoundBorder>
            <Article
              title={"La longue marche des chats"}
              imgPath={
                "https://focus.nouvelobs.com/2021/02/09/430/0/4197/2098/633/306/75/0/8fdf6f2_713581386-033-6378888-5fa6d2561fe23.jpg"
              }
              imgAlt={"Un petit chat tout mignon"}
            >
              <p>Les petits chats mignon envahissent internet</p>

              <h3>
                C'est un vrai phénomène de société, selon le Politologue Alain
                Chabat
              </h3>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                animi ducimus, eos cum sapiente tempora et praesentium
                necessitatibus soluta ipsa repellat, dolorum possimus maiores
                temporibus iure obcaecati vero. Delectus, culpa.
              </p>
            </Article>
          </RoundBorder>
        </FlexboxContainer>
        <Footer content="Made with React :)" />
      </FlexboxContainer>
    </MainContainer>
  );
}

export default App;
