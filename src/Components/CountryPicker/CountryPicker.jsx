import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchcountries } from "../../api";

const CountryPicker = () => {
  const [fetchCountriesList, setFetchCountriesList] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountriesList(await fetchcountries());
    };

    fetchAPI();
  }, [setFetchCountriesList]);


  console.log(fetchCountriesList)

  return (
    <div>
      <FormControl>
        <NativeSelect>
          <option value="global">Global</option>
          {fetchCountriesList.map((countries,i)=><option key={i} value={countries}>{countries}</option>)}
         
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
