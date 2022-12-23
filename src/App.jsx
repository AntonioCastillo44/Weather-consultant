import { useEffect } from "react";
import "./App.css";
import "axios";
import axios from "axios";
import { useState } from "react";
import Card from "./components/Card";
import Loading from "./components/Loading";
import background from "./utils/changeBackgroud";
import img from "./utils/changeImg"
import color from "./utils/changeColor";
import btn from "./utils/imgBtn"

function App() {
  const [temperature, setTemperature] = useState()
  const [change, setChange] = useState(true)
  const [descrptionData, setDescrptionData] = useState()
  const [location, setLocation] = useState({});
  const changeDegrees = () => setChange(!change)
  
  const success = (location) => {
    const coords = { lon: location.coords.longitude, lat: location.coords.latitude };
    setLocation(coords);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const [datesLocation, setDatesLocation] = useState();
  useEffect(() => {
    if (location) {
      const API_KEY = "a17e7147bd5a391f02771df3fc7a3092";
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`
        )
        .then((res) => {
          const DegreesC = (res.data.main.temp - 273.15).toFixed(2)
          const DegreesF = ((DegreesC * 9 / 5) + 32).toFixed(2)
          const imgDescription = res.data.weather?.[0].description
          const Degrees = {
            celcius: DegreesC,
            fahrenheit: DegreesF
          }
          setDatesLocation(res.data)
          setTemperature(Degrees)
          setDescrptionData(imgDescription)
        })
        .catch((err) => console.log(err));
    }
  }, [location]);
console.log(change)
  return (

    <div className={`${background[descrptionData]} backgroundWeather`}>
      {
        datesLocation ?
          <Card
            datesLocation={datesLocation}
            changeDegrees={changeDegrees}
            change={change}
            temperature={temperature}
            descrptionData={descrptionData}
            img={img}
            color={color}
            btn={btn}
          /> : <Loading />
      }

    </div>
  );
}

export default App;
