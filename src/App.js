
import './App.css';
import {fetchData} from './api/'
import image from './images/image.png'
import styles from './App.module.css'
import Cards from './components/Cards/Cards'
import Chartt from './components/Chart/Chartt'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Chart from 'chart.js/auto';
import React from 'react';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chartt data={data} country={country}/>
      </div>
    );
  }
}

export default App;