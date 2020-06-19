import React, { Component } from "react";
import { Cards, Charts, CounterPicker } from "./components";
import styles from "./App.module.css";
import covid from "./images/image.png";
import { fetchData } from "./api";
export default class App extends Component {
  state = {
    data: {}, 
    country: "",
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  handleChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img alt="Covid19" src={covid} className={styles.image} />
        <Cards data={data} />
        <CounterPicker handleChange={this.handleChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}
