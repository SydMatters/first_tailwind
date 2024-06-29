import "./App.css";
import Header from "./components/Header";
import Navar from "./components/Navar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header></Header>
      <Navar></Navar>
      <main className="p-4">
        <Card>
          {("Spiderman", "El Ascenso de Spider-Man: Más Allá de las Telarañas")}
        </Card>
      </main>
    </>
  );
}

export default App;
