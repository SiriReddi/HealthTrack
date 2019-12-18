import React from "react";
import "./rightside.css";
class Range extends React.Component {
  constructor(props) {
    super(props);
    this.updateRange = this.updateRange.bind(this);
  }

  updateRange(e) {
    this.props.updateRange(e.target.value);
  }

  render() {
    // console.log(this.props);
    const { range } = this.props;
    return (
      <div className="slidecontainer">
        <input
          id="range"
          type="range"
          value={range}
          min="0"
          max="24"
          step="1"
          width="100px"
          className="slider"
          onChange={this.updateRange}
        />
        <span id="output">{range}</span>
      </div>
    );
  }
}

export default Range;
