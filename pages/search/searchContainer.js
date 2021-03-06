import SearchPresenter from "./searchPresenter";
import React from "react";
import { Query } from "react-apollo";
import { SEARCH_QUERY } from "./searchQueries";

export default class extends React.Component {
  state = {
    searchTerm: "",
    canSearch: false
  };
  render() {
    const { searchTerm, canSearch } = this.state;
    return (
      <Query skip={!canSearch} query={SEARCH_QUERY} variables={searchTerm}>
        {({ data }) => (
          <SearchPresenter
            searchTerm={searchTerm}
            updateSearchTerm={this._updateSearchTerm}
            data={data}
          />
        )}
      </Query>
    );
  }
  _updateSearchTerm = event => {
    clearTimeout(this.searchTimeout);
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
    this.searchTimeout = setTimeout(() => console.log("Searching ..."), 600);
  };
}
