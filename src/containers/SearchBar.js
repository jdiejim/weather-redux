import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default SearchBar;
