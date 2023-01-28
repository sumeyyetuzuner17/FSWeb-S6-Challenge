import React, { useState, useEffect } from "react";
import Karakter from "./components/Karakter";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [karakters, setKarakters] = useState([]);
  const [okunanIndex, setOkunanIndex] = useState(0);



  useEffect(() => {
    axios.get("https://swapi.dev/api/people/").then((response) => {
      setKarakters(response.data.results);
      console.log("burdayım", response.data);
    });
  }, []);

  console.log("şşşşşşşşş", okunanIndex)
  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      {karakters === null ? (
        <div>Yükleniyor</div>
      ) : (
        <div className="chars-list">
          {karakters.map((k, sira) => (
            <Karakter
              kisi={k}
              kisiIndex={sira}
              acikMi={sira === okunanIndex}
              tiklayincaYap={() => setOkunanIndex(sira)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
