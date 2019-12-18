import React, { Component } from "react"; //Always need in JSX files

class SearchBar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { term: "" };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div
        className="search-bar"
        style={{ margin: "20px", textAlign: "center" }}
      >
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          style={{ width: "50%", borderRadius: "20px" }}
        />
      </div>
    );
  }
}

export default SearchBar;
