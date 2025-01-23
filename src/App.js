import "./App.css";
import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="container p-2 weather-app">
      <div className="App card p-3">
        <Header />
        <Weather city="London" />

        <Footer />
      </div>
    </div>
  );
}

export default App;
