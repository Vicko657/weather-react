import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="container p-2 weather-app">
      <div className="App card p-3">
        <Header />
        <Main city="London" />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
