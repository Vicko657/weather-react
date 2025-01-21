import "./App.css";
import Header from "./Header";
import Search from "./Search";
import Main from "./Main";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="container p-2 weather-app">
      <div className="App card p-3">
        <Header />
        <Search />
        <Main
          city="London"
          time="Monday 17:00"
          description="overcast clouds"
          humidity="80%"
          wind="2.68km/h"
          icon={
            <img
              className="weather-app-icon"
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
            />
          }
          temp="5"
        />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
