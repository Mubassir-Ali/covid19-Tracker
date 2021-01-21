
// import Cards from './Components/Cards/Cards'
// import Chart from './Components/Chart/Chart'
// import CountryPicker from './Components/CountryPicker/CountryPicker'

import {Cards,Chart,CountryPicker} from './Components';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
    <Cards/>
    <CountryPicker/>
    <Chart/>
    
      
    </div>
  );
}

export default App;
