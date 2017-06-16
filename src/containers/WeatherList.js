import React, { Component } from 'react';
import ChartComponent from '../components/ChartComponent';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderList() {
    return this.props.weather.map(e => {
      const city = e.city.name;
      const temp = e.list.map(t => t.main.temp - 273.15);
      const pressure = e.list.map(t => t.main.pressure);
      const humidity = e.list.map(t => t.main.humidity);
      console.log(temp);
      console.log(pressure);
      console.log(humidity);

      return (
      <tr key={city}>
        <td>{city}</td>
        <td><ChartComponent data={temp} color={"#e39b47"} units={"C"} /></td>
        <td><ChartComponent data={pressure} color={"#e35c5c"} units={"hPa"} /></td>
        <td><ChartComponent data={humidity} color={"#0099ba"} units={"%"} /></td>
      </tr>
      )
    })
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

const connectComponent = connect(mapStateToProps);

export default connectComponent(WeatherList);
