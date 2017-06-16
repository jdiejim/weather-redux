import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, dispatch } from 'redux';
import { searchCity } from '../actions/index';

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
    const { search } = this.props;

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
  return bindActionCreators({ search: searchCity }, dispatch);
}

const connectComponent = connect(mapDispatchToProps);

export default connectComponent(SearchBar);
