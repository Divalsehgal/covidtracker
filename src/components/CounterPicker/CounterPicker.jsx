import React, { useState, useEffect } from "react";
import { fetchCountries } from "./../../api/index";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CounterPicker.module.css";
const CounterPicker = ({handleChange}) => {
  const [countries, setcountries] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      setcountries(await fetchCountries());
    };
    fetchapi();
  }, [setcountries]);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={e=>handleChange(e.target.value)}>
        <option value="global">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CounterPicker;
