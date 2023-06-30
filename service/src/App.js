import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  // const [geolocationData, setGeolocationData] = useState();

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position);
  //     setGeolocationData({
  //       car_code: "test !",
  //       latitude: position.latitude,
  //       longitude: position.longitude,
  //     });
  //   });
  // }, []);

  const postCarCode = () => {
    axios
      .post("/test", {
        car_code: "test1",
        latitude: "test!!!",
        longitude: "test@@@",
      })
      .then((res) => console.log(res));
  };
  return (
    <div>
      <button onClick={postCarCode}>TEST</button>
    </div>
  );
}

export default App;
