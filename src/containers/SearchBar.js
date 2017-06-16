import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit.bind(this)}
        className="input-group">
        <input
          onChange={this.onInputChange.bind(this)}
          placeholder="Get a five-day forecast of your favorite cities"
          className="form-control"
          value={this.state.term}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-secndary"
            type="submit"
            >
            Search
          </button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

const connectComponent = connect(null, mapDispatchToProps);

export default connectComponent(SearchBar);
