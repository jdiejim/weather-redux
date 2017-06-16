import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchCity } from '../actions/index';

class SearchBar extends Component {
    render() {
      const { search } = this.props;

      return (
        <form className="input-group">
          <input ref={input => this.input = input} />
          <span className="input-group-btn">
            <button
              className="btn btn-secndary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                searchCity(this.input.value);
              }}>
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
