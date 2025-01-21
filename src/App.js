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
        <Main
          city="London"
          time="Monday 17:00"
          description="overcast clouds"
          humidity="80%"
          wind="2.68km/h"
          temp="5"
        />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
