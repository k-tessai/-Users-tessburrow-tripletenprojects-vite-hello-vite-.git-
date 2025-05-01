import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Animal from "./Animal";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Animal selectedAnimal="" />
      </div>
    </>
  );
}

export default App;
