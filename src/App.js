import React, { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";
import fetchData from "./api";

const App = () => {
  const [globData, setGlobData] = useState({});

  useEffect(() => {
    async function getData() {
      const fdata = await fetchData();

      return setGlobData(fdata)
    }

    getData();
  },[]);

  
  return (
    <div className={styles.container}>
      {/* <Cards data={globData}/> */}
      <CountryPicker />
      {/* <Chart /> */}
    </div>
  );
};

export default App;
