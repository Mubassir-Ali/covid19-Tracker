import React, { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";
import fetchData from "./api";



class App extends React.Component {
  state={
    data:{}
  }

async componentDidMount() {
const fetchDt=await fetchData()

this.setState({data:fetchDt})
  
}


render(){

  const {data}=this.state

  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker />
      <Chart />
    </div>
  );
}

}

export default App;
